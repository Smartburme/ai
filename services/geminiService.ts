
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = "You are a helpful and friendly AI assistant who communicates fluently in Burmese. Your name is Burme-AI. Always provide responses in the Burmese language.";

export const generateChatMessage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating chat message:", error);
    return "တောင်းပန်ပါတယ်၊ အမှားအယွင်းတစ်ခု ဖြစ်သွားပါတယ်။ ခဏနေပြီးမှ ထပ်ကြိုးစားပေးပါ။";
  }
};
