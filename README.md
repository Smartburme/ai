# ai
Assistant website app
# AI Assistant Project Implementation

Here's the implementation of the core files for your AI assistant project. I'll focus on the key components to get you started.

## 1. Core Assistant Files

### assistant/core/nlp_engine.py
```python
import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class NLPEngine:
    def __init__(self, intents_file='data/training/intents.json'):
        self.intents = self._load_intents(intents_file)
        self.vectorizer = TfidfVectorizer()
        self._train_model()

    def _load_intents(self, file_path):
        with open(file_path, 'r') as f:
            return json.load(f)

    def _train_model(self):
        patterns = []
        self.intent_labels = []
        
        for intent in self.intents['intents']:
            for pattern in intent['patterns']:
                patterns.append(pattern)
                self.intent_labels.append(intent['tag'])
        
        self.X = self.vectorizer.fit_transform(patterns)

    def classify_intent(self, text):
        query_vec = self.vectorizer.transform([text])
        similarities = cosine_similarity(query_vec, self.X)
        most_similar = np.argmax(similarities)
        return self.intent_labels[most_similar]
```

### assistant/core/dialog_manager.py
```python
from typing import Dict, Any
from .nlp_engine import NLPEngine
from ..skills import get_skill_response

class DialogManager:
    def __init__(self):
        self.nlp_engine = NLPEngine()
        self.context = {}

    def process_input(self, user_input: str) -> Dict[str, Any]:
        intent = self.nlp_engine.classify_intent(user_input)
        response = get_skill_response(intent, user_input, self.context)
        
        return {
            'intent': intent,
            'response': response,
            'context': self.context
        }
```

### assistant/core/knowledge_base.py
```python
import json

class KnowledgeBase:
    def __init__(self, faq_file='data/knowledge/faq.json'):
        self.faq = self._load_faq(faq_file)

    def _load_faq(self, file_path):
        with open(file_path, 'r') as f:
            return json.load(f)

    def get_answer(self, question):
        for item in self.faq:
            if question.lower() in item['question'].lower():
                return item['answer']
        return "I don't have an answer for that question."
```

## 2. Skill Implementations

### assistant/skills/__init__.py
```python
from typing import Dict, Any
from ..skills import weather, calculator, reminder

def get_skill_response(intent: str, user_input: str, context: Dict[str, Any]) -> str:
    skills = {
        'weather': weather.handle_weather,
        'calculation': calculator.handle_calculation,
        'reminder': reminder.handle_reminder,
        'faq': KnowledgeBase().get_answer
    }
    
    handler = skills.get(intent)
    if handler:
        return handler(user_input, context)
    return "I'm not sure how to help with that."
```

### assistant/skills/weather.py
```python
def handle_weather(user_input: str, context: dict) -> str:
    # This is a dummy implementation - would connect to weather API in real version
    if 'location' in user_input.lower():
        return "The weather is sunny in your location."
    return "Please specify a location for weather information."
```

### assistant/skills/calculator.py
```python
import re
from ..utils.helpers import safe_eval

def handle_calculation(user_input: str, context: dict) -> str:
    try:
        # Extract math expression
        expr = re.sub(r'[^0-9+\-*/(). ]', '', user_input)
        result = safe_eval(expr)
        return f"The result is: {result}"
    except:
        return "I couldn't calculate that. Please try a different expression."
```

### assistant/skills/reminder.py
```python
from datetime import datetime

reminders = []

def handle_reminder(user_input: str, context: dict) -> str:
    if "set" in user_input.lower():
        # Extract time and reminder text
        time_str = "tomorrow"  # Would parse this from input in real version
        reminder_text = " ".join(user_input.split()[2:])
        reminders.append({
            'time': time_str,
            'text': reminder_text
        })
        return f"I'll remind you to {reminder_text} {time_str}."
    else:
        return f"You have {len(reminders)} pending reminders."
```

## 3. Interface Implementations

### assistant/interfaces/cli.py
```python
from ..core.dialog_manager import DialogManager

def start_cli():
    print("AI Assistant CLI - Type 'exit' to quit")
    dialog_manager = DialogManager()
    
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break
            
        response = dialog_manager.process_input(user_input)
        print(f"Assistant: {response['response']}")
```

### assistant/interfaces/web.py (FastAPI)
```python
from fastapi import FastAPI
from ..core.dialog_manager import DialogManager

app = FastAPI()
dialog_manager = DialogManager()

@app.post("/chat")
async def chat_endpoint(user_input: str):
    response = dialog_manager.process_input(user_input)
    return {
        "response": response['response'],
        "intent": response['intent']
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
```

## 4. Utility Files

### assistant/utils/logger.py
```python
import logging

def setup_logger(name):
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    handler = logging.StreamHandler()
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    
    logger.addHandler(handler)
    return logger
```

### assistant/utils/config.py
```python
import os
from dotenv import load_dotenv

def load_config():
    load_dotenv()
    return {
        'debug': os.getenv('DEBUG', 'False') == 'True',
        'api_key': os.getenv('API_KEY', ''),
        'model_path': os.getenv('MODEL_PATH', 'data/models/nlp_model.h5')
    }
```

### assistant/utils/helpers.py
```python
def safe_eval(expr):
    """Safely evaluate a mathematical expression"""
    allowed_chars = set('0123456789+-*/(). ')
    if not all(c in allowed_chars for c in expr):
        raise ValueError("Invalid characters in expression")
    return eval(expr)
```

## 5. Example Data Files

### data/training/intents.json
```json
{
    "intents": [
        {
            "tag": "greeting",
            "patterns": ["Hi", "Hello", "Hey", "Good day"],
            "responses": ["Hello!", "Hi there!", "Greetings!"]
        },
        {
            "tag": "weather",
            "patterns": ["What's the weather?", "How's the weather today?", "Is it raining?"],
            "responses": ["I can check the weather for you."]
        },
        {
            "tag": "calculation",
            "patterns": ["Calculate 2+2", "What's 5 times 3?", "Math: 10/2"],
            "responses": ["I can help with calculations."]
        }
    ]
}
```

### data/knowledge/faq.json
```json
[
    {
        "question": "What is your name?",
        "answer": "I'm an AI assistant designed to help you."
    },
    {
        "question": "Who created you?",
        "answer": "I was created by a team of developers."
    }
]
```

## 6. Project Configuration

### pyproject.toml
```toml
[project]
name = "ai-assistant"
version = "0.1.0"
description = "A modular AI assistant framework"
authors = [{name = "Your Name", email = "your.email@example.com"}]
readme = "README.md"
requires-python = ">=3.8"
dependencies = [
    "numpy>=1.21.0",
    "scikit-learn>=1.0.0",
    "fastapi>=0.68.0",
    "uvicorn>=0.15.0",
    "python-dotenv>=0.19.0"
]

[project.optional-dependencies]
dev = ["pytest", "black", "flake8", "mypy"]
```

### requirements.txt
```
numpy>=1.21.0
scikit-learn>=1.0.0
fastapi>=0.68.0
uvicorn>=0.15.0
python-dotenv>=0.19.0
```

This implementation provides a solid foundation for your AI assistant with:
- Modular skill system that's easy to extend
- Basic NLP intent classification
- Multiple interface options (CLI and Web)
- Configuration management
- Example data files

To run the CLI interface:
```python
from assistant.interfaces.cli import start_cli
start_cli()
```

To run the web server:
```bash
uvicorn assistant.interfaces.web:app --reload
```
## 1. GitHub Actions (CI/CD) Configuration

### .github/workflows/tests.yml
```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest
    - name: Run tests
      run: |
        pytest tests/ -v
```

### .github/workflows/deploy.yml
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Deploy to Server
      env:
        SSH_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        SERVER_IP: ${{ secrets.PRODUCTION_IP }}
      run: |
        # Add your deployment scripts here
        echo "Deploying to production server..."
```

## 2. Documentation Files

### docs/architecture.md
```
# System Architecture

## Components
1. **NLP Engine** - စာသားများကို နားလည်ပြီး ရည်ရွယ်ချက်ကို ခွဲခြားပေးသည်
2. **Dialog Manager** - စကားပြောဆိုမှုအလိုက် စီမံခန့်ခွဲပေးသည်
3. **Skills Modules** - အထူးလုပ်ဆောင်ချက်များ (ရာသီဥတု၊ ဂဏန်းတွက်ချက်မှု စသည်)
4. **Interfaces** - CLI, Web API နှင့် REST API တို့ဖြင့် အသုံးပြုနိုင်သည်

## Data Flow
User Input → Interface → NLP → Dialog Manager → Skill → Response
```

### docs/api.md
```
# API Documentation

## Endpoints
- `POST /chat` - စာတိုပေးပို့ရန်
  - Parameters: `user_input` (string)
  - Returns: JSON response with `response` and `intent`

- `GET /health` - ဆာဗာအခြေအနေစစ်ဆေးရန်
  - Returns: `{"status": "healthy"}`
```

## 3. Environment Configuration

### .env.example
```
DEBUG=True
API_KEY=your_api_key_here
MODEL_PATH=data/models/nlp_model.h5
DATABASE_URL=sqlite:///data/assistant.db
```

### .gitignore
```
# Python
__pycache__/
*.py[cod]
*.so
.Python
env/
venv/
*.env

# Data files
data/models/
*.db
*.sqlite

# IDE
.vscode/
.idea/
```

## 4. Project README

### README.md
```markdown
# AI Assistant Project

မြန်မာဘာသာဖြင့် အခြေခံထားသော AI အကူအညီစနစ်

## Features
- ရိုးရှင်းသော NLP အင်ဂျင်
- Modular skills system
- CLI နှင့် Web Interface နှစ်မျိုးလုံး
- REST API ထောက်ပံ့မှု

## Installation
```bash
pip install -r requirements.txt
```

## Usage
CLI Version:
```bash
python -m assistant.interfaces.cli
```

Web Server:
```bash
uvicorn assistant.interfaces.web:app --reload
```

## License
MIT License
```

## 5. MIT License

### LICENSE
```
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted...
(ကျန်တဲ့ MIT license စာသားများ)
```

## 6. Utility Scripts

### scripts/setup_env.sh
```bash
#!/bin/bash
# Virtual environment setup script

python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

### scripts/train_model.py
```python
"""
Dummy model training script
Would be replaced with actual ML training code
"""
print("Training model...")
print("Model saved to data/models/nlp_model.h5")
```

---
