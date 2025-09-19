import React, { useState } from 'react';
import './App.css';
import TopicSelector from './components/TopicSelector';
import DifficultySelector from './components/DifficultySelector';
import QuestionViewer from './components/QuestionViewer';
import { studyData } from './data/studyData';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedDifficulty('');
    setCurrentQuestionIndex(0);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
  };

  const handleBackToTopics = () => {
    setSelectedTopic('');
    setSelectedDifficulty('');
    setCurrentQuestionIndex(0);
  };

  const handleBackToDifficulty = () => {
    setSelectedDifficulty('');
    setCurrentQuestionIndex(0);
  };

  const getCurrentQuestions = () => {
    if (!selectedTopic || !selectedDifficulty) return [];
    return studyData[selectedTopic]?.questions[selectedDifficulty] || [];
  };

  const handleNextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Interview Learning App</h1>
        <p>Master your technical interviews with structured practice</p>
      </header>

      <main className="app-main">
        {!selectedTopic && (
          <TopicSelector
            topics={Object.keys(studyData)}
            studyData={studyData}
            onTopicSelect={handleTopicSelect}
          />
        )}

        {selectedTopic && !selectedDifficulty && (
          <DifficultySelector
            topic={selectedTopic}
            topicData={studyData[selectedTopic]}
            onDifficultySelect={handleDifficultySelect}
            onBack={handleBackToTopics}
          />
        )}

        {selectedTopic && selectedDifficulty && (
          <QuestionViewer
            topic={selectedTopic}
            difficulty={selectedDifficulty}
            questions={getCurrentQuestions()}
            currentIndex={currentQuestionIndex}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            onBack={handleBackToDifficulty}
            topicData={studyData[selectedTopic]}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 Interview Learning App - Practice makes perfect!</p>
      </footer>
    </div>
  );
}

export default App;
