import React, { useStambzzbmxmbte, u.seRef, useEffect, useCallback } from 'react';
import { ChatMessage } from './types';
import { generateChatMessage } from './services/geminiService';

const BotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
 cc 8 8 3.59 8 8-3.59 8-8 8z" />mocmcovx
zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    ccc    <path d="M12 16.5cxxxc2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
me="h-8 w-8 text-ccckcxvioxxxxxzvprimary-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 16.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        <circle cx="8.5" cy="11.5" r="1.5," />
                <circle cx="15.5" cy="11.5" r="1.5" /nstruction ice cream.   cx="8.5" cy="11.5" r="1.5" />
        <circccccxxvxxvzcxcvxvxccxxxzvxvvxzxvzvzle cx="15.5" cy="11.5" r="1.5" />
    </svg>cxxc
);
guxuuuyvy vxzvxuymcygbbcmcc
const UserIcon = () =g>nc (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
    );


    const SendIcon = ({ isDisabled c}: { isDisabledbled: boolean }) => (
        <svg xmlxnss="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-200 ${isDisabled ? '' : 'hover:scale-110'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
BCG 2z" />
                    </slxns"hxcgcgcg
);
c

const SendIcon = ({ isDisabled }: { isDisabledbled: boolean }) => (
    <svg xmlxnss="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-200 ${isDisabled ? '' : 'hover:scale-110'}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </slxns"h
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const NewChatIconisDisabled
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecapinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const HistoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path>
path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AboutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const APIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
        <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && <div className="flex-shrink-0"><BotIcon /></div>}
            <div className={`max-w-xs md:max-w-md lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md ${isUser ? 'bg-primary-600 text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
            {isUser && <div className="flex-shrink-0 bg-primary-600 rounded-full p-1"><UserIcon /></div>}
        </div>
    );
};

const TypingIndicator = () => (
  <div className="flex items-start gap-3 my-4 justify-start">
    <div className="flex-shrink-0"><BotIcon /></div>
    <div className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
      <div className="flex items-center justify-center space-x-1">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
       strokeLinecapme="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

type View = 'chat' | 'history' | 'about' | 'settings' | 'api';

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? 'text-primary-500' : 'text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400'}`}
        aria-label={label}
    >
        {icon}
        <span className="text-xs mt-1">{label}</span>
    </button>
);

const BottomNavigation: React.FC<{
    activeView: View;
    onNewChat: () => void;
    onViewToggle: (view: Exclude<View, 'chat'>) => void;
}> = ({ activeView, onNewChat, onViewToggle }) => {
    const navItems: { id: Exclude<View, 'chat'>, label: string, icon: React.ReactNode }[] = [
        { id: 'history', label: 'History', icon: <HistoryIcon /> },
        { id: 'about', label: 'About', icon: <AboutIcon /> },
        { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
        { id: 'api', label: 'API', icon: <APIIcon /> },
    ];
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 z-20">
            <div className="max-w-4xl mx-auto h-full flex items-stretch justify-around">
                <NavItem icon={<NewChatIcon />} label="New Chat" isActive={activeView === 'chat'} onClick={onNewChat} />
                {navItems.map(item => (
                    <NavItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        isActive={activeView === item.id}
                        onClick={() => onViewToggle(item.id)}
                    />
                ))}
            </div>
        </nav>
    );
};

const PlaceholderView: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
    <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 dark:text-slate-400 pt-20">
        <div className="w-16 h-16 text-slate-400 dark:text-slate-500 mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>
        <p className="mt-2">This feature is under construction. Check back soon!</p>
    </div>
);


export default function App() {
    const getInitialMessages = () => [{ id: 'initial-message', role: 'model' as const, text: 'မင်္ဂလာပါ! ကျွန်တော်က Burme-AI ပါ။ သင့်ကို ဘယ်လိုကူညီပေးရမလဲ။' }];
    const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages());
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [activeView, setActiveView] = useState<View>('chat');
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.theme) {
            return localStorage.theme;
        }
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (activeView === 'chat') {
            scrollToBottom();
        }
    }, [messages, isLoading, activeView]);

    const handleSendMessage = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newUserMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: userInput.trim(),
        };

        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            const botResponseText = await generateChatMessage(userInput.trim());
            const newBotMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: botResponseText,
            };
            setMessages(prev => [...prev, newBotMessage]);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMtMessage       
            const errorBotMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: 'တောင်းပန်ပါတယ်၊ အမှားအယွင်းတစ်ခု ဖြစ်ပွားခဲ့ပါသည်။',
            };
            setMessages(prev => [...prev, errorBotMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [userInput, isLoading]);

    const handleNewChat = () => {
        setMessages(getInitialMessages());
        setUserInput('');
        setIsLoading(false);
        setError(null);
        setActiveView('chat');
    };
    
    const handleViewToggle = (view: Exclude<View, 'chat'>) => {
        setActiveView(prev => prev === view ? 'chat' : view);
    };

    const mainPaddingBottom = activeView === 'chat' ? 'pb-36' : 'pb-20';

    const renderContent = () => {
        if (activeView === 'chat') {
            return (
                <>
                    {messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} />
                    ))}
                    {isLoading && <TypingIndicator />}
                    {error && (
                        <div className="max-w-4xl mx-auto mt-4 text-center text-red-500">
                            <p>Error: {error}</p>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </>
            );
        }
        const viewMap = {
            history: { title: "History", icon: <HistoryIcon /> },
            about: { title: "About", icon: <AboutIcon /> },
            settings: { title: "Settings", icon: <SettingsIcon /> },
            api: { title: "API", icon: <APIIcon /> },
        };
        const currentView = viewMap[activeView as Exclude<View, 'chat'>];
        return <PlaceholderView title={currentView.title} icon={currentView.icon} />;
    };

    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
            <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm p-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                         <div className="flex-shrink-0"><BotIcon/></div>
                        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">Burmese AI Chatbot</h1>
                    </div>
                     <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>
            </header>

            <main className={`flex-1 overflow-y-auto p-4 ${mainPaddingBottom}`}>
                <div className="max-w-4xl mx-auto">
                   {renderContent()}
                </div>
            </main>
            
            {activeView === 'chat' && (
                <footer className="fixed bottom-16 left-0 right-0 bg-white dark:bg-slate-800 z-10">
                    <div className="max-w-4xl mx-auto p-4 border-t border-slate-200 dark:border-slate-700">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="စာတစ်စောင်ရိုက်ပါ..."
                                className="flex-1 w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                                disabled={isLoading}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleSendMessage(e as any);
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !userInput.trim()}
                                className="p-3 rounded-full bg-primary-600 text-white disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                aria-label="Send message"
                            >
                                <SendIcon isDisabled={isLoading || !userInput.trim()} />
                            </button>
                        </form>
                    </div>
                </footer>
            )}

            <BottomNavigation 
              activeView={activeView}
              onNewChat={handleNewChat}
              onViewToggle={handleViewToggle}
            />
        </div>
    );
}