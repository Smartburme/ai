# Structure 
```
ai-assistant/
│
├── .github/                ← GitHub Actions (CI/CD)
│   ├── workflows/
│   │   ├── tests.yml       ← Pytest run on push/PR
│   │   └── deploy.yml      ← Build & deploy automation
│   └── ISSUE_TEMPLATE/     ← GitHub Issue templates
│       └── bug_report.md
│
├── assistant/              ← Main Python package
│   ├── core/               ← Core assistant logic
│   │   ├── nlp_engine.py       ← Basic NLP intent classifier
│   │   ├── dialog_manager.py  ← Handles conversation flow
│   │   └── knowledge_base.py  ← Simple QA knowledge lookup
│   │
│   ├── skills/             ← Modular skills (can expand)
│   │   ├── weather.py          ← Weather info (dummy now)
│   │   ├── calculator.py       ← Math operations
│   │   └── reminder.py         ← Reminder storage
│   │
│   ├── utils/              ← Helper functions
│   │   ├── logger.py           ← Logger setup
│   │   ├── config.py           ← Load config from file
│   │   └── helpers.py          ← Math/utils
│   │
│   ├── interfaces/         ← Input/output interfaces
│   │   ├── cli.py              ← Command Line Chat
│   │   ├── web.py              ← FastAPI Web Server
│   │   └── api.py              ← REST API (uses web.py)
│   │
│   └── __init__.py         ← Defines package
│
├── data/                   ← Static data files
│   ├── models/             ← Trained ML models (ignored)
│   │   └── nlp_model.h5        ← Dummy placeholder
│   ├── knowledge/          ← Knowledge base info
│   │   ├── faq.json             ← Common Q&A
│   └── training/
│       └── intents.json         ← For training NLP
│
├── tests/                  ← Pytest suite
│   ├── unit/               ← Individual function tests
│   │   ├── test_nlp.py
│   │   └── test_skills.py
│   └── integration/        ← Whole-system tests
│       ├── test_dialog.py
│       └── test_api.py
│
├── docs/                   ← Markdown documentation
│   ├── architecture.md         ← System design overview
│   ├── api.md                  ← REST API routes
│   └── skills/
│       ├── weather.md
│       └── calculator.md
│
├── notebooks/              ← Jupyter notebooks
│   ├── nlp_training.ipynb      ← NLP training notes
│   └── analysis.ipynb          ← Performance results
│
├── scripts/                ← Utility scripts
│   ├── setup_env.sh            ← Set up virtualenv
│   └── train_model.py          ← Dummy model trainer
│
├── .env.example            ← Sample env variables
├── .gitignore              ← Ignore compiled/cache files
├── pyproject.toml          ← Python project setup config
├── requirements.txt        ← Dependency list
├── README.md               ← Project overview
└── LICENSE                 ← MIT License
# Project overview
