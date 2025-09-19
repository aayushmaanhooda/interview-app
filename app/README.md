# Interview Learning App

A modern React application for technical interview preparation with structured learning paths.

## Features

- **Topic Selection**: Choose from various technical topics (LangChain, LangGraph, MCP, RAG, Vector Stores, FastAPI, Backend Development)
- **Difficulty Levels**: Practice with Easy, Medium, and Hard questions
- **Interactive Learning**: Show/hide answers, navigate between questions
- **Progress Tracking**: Visual progress indicators and statistics
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful glass-morphism design with smooth animations

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TopicSelector.js
│   │   ├── TopicSelector.css
│   │   ├── DifficultySelector.js
│   │   ├── DifficultySelector.css
│   │   ├── QuestionViewer.js
│   │   └── QuestionViewer.css
│   ├── data/
│   │   └── studyData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Adding New Content

To add new topics or questions, edit the `src/data/studyData.js` file. The structure follows:

```javascript
{
  topicKey: {
    name: "Display Name",
    description: "Topic description",
    questions: {
      easy: [{ id: 1, question: "...", answer: "..." }],
      medium: [{ id: 1, question: "...", answer: "..." }],
      hard: [{ id: 1, question: "...", answer: "..." }]
    }
  }
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.
