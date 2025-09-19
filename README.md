# Interview Learning App 🎓

A comprehensive React-based interview preparation application designed to help you master technical concepts through structured learning paths.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-Modern-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## 🌟 Features

- **📚 Multiple Topics**: LangChain, LangGraph, MCP, RAG, Vector Stores, FastAPI, Backend Development
- **🎯 Difficulty Levels**: Easy, Medium, and Hard questions for progressive learning
- **💡 Interactive Learning**: Show/hide answers with smooth animations
- **📊 Progress Tracking**: Visual progress indicators and question navigation
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Beautiful glass-morphism design with gradient backgrounds
- **⚡ Fast Navigation**: Previous/Next buttons with keyboard shortcuts
- **📈 Study Statistics**: Track your learning progress

## 🚀 Live Demo

The app runs locally at: `http://localhost:3000`

## 📁 Project Structure

```
interview/
├── app/                          # React application
│   ├── public/
│   │   └── index.html           # HTML template
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── TopicSelector.js     # Topic selection interface
│   │   │   ├── DifficultySelector.js # Difficulty level selection
│   │   │   └── QuestionViewer.js    # Q&A interface
│   │   ├── data/
│   │   │   └── studyData.js     # Question database
│   │   ├── App.js               # Main app component
│   │   └── index.js             # App entry point
│   ├── package.json             # Dependencies
│   └── README.md                # App-specific documentation
├── study/                       # Study materials
│   ├── langchain.txt           # LangChain questions (30 questions)
│   ├── langgraph.txt           # LangGraph questions
│   ├── mcp.txt                 # MCP questions
│   ├── rag.txt                 # RAG questions
│   ├── vectorestore.txt        # Vector store questions
│   ├── fastapi.txt             # FastAPI questions
│   ├── backend.txt             # Backend questions
│   └── aws/                    # AWS-specific materials
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd interview
   ```

2. **Install dependencies**
   ```bash
   cd app
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Select a Topic**: Choose from available topics like LangChain, RAG, etc.
2. **Pick Difficulty**: Select Easy (beginner), Medium (intermediate), or Hard (advanced)
3. **Study Questions**: 
   - Read each question carefully
   - Try to answer before revealing the solution
   - Click "Show Answer" to see the detailed explanation
   - Use Previous/Next buttons to navigate

## 📊 Current Content

### LangChain (30 Questions)
- **Easy**: 10 foundational questions about LangChain basics
- **Medium**: 10 intermediate questions about implementation
- **Hard**: 10 advanced questions about production systems

### Other Topics
- LangGraph, MCP, RAG, Vector Stores, FastAPI, Backend Development
- More questions can be added by editing `src/data/studyData.js`

## 🎨 Design Features

- **Glass-morphism UI**: Modern frosted glass effect
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Fade-in and slide effects
- **Color-coded Difficulties**: Green (Easy), Yellow (Medium), Red (Hard)
- **Progress Indicators**: Visual progress bars and statistics
- **Responsive Layout**: Optimized for all screen sizes

## 🔧 Development

### Available Scripts

```bash
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
npm eject      # Eject from Create React App
```

### Adding New Content

To add new topics or questions, edit `app/src/data/studyData.js`:

```javascript
export const studyData = {
  newTopic: {
    name: "New Topic",
    description: "Topic description",
    questions: {
      easy: [
        {
          id: 1,
          question: "Your question?",
          answer: "Your detailed answer..."
        }
      ],
      medium: [...],
      hard: [...]
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 Study Materials

The `study/` directory contains source materials:
- Text files with questions and answers
- Organized by technology/topic
- Can be used to expand the app content

## 🔮 Future Enhancements

- [ ] Add more topics (AWS, Python, System Design)
- [ ] Implement user progress tracking
- [ ] Add bookmarking functionality
- [ ] Include code syntax highlighting
- [ ] Add search functionality
- [ ] Implement spaced repetition algorithm
- [ ] Add dark/light theme toggle
- [ ] Include performance analytics

## 📄 License

This project is for educational purposes. Feel free to use and modify for your learning needs.

## 🙏 Acknowledgments

- Built with Create React App
- Inspired by modern interview preparation needs
- Designed for effective learning and retention

---

**Happy Learning! 🚀**

*Master your technical interviews with structured, progressive practice.*
