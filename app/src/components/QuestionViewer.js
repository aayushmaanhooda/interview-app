import React, { useState } from 'react';
import './QuestionViewer.css';

const QuestionViewer = ({
    topic,
    difficulty,
    questions,
    currentIndex,
    onNext,
    onPrevious,
    onBack,
    topicData
}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const currentQuestion = questions[currentIndex];

    const handleNextQuestion = () => {
        setShowAnswer(false);
        onNext();
    };

    const handlePreviousQuestion = () => {
        setShowAnswer(false);
        onPrevious();
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const getDifficultyColor = (diff) => {
        const colors = {
            easy: '#22c55e',
            medium: '#fbbf24',
            hard: '#ef4444'
        };
        return colors[diff] || '#6b7280';
    };

    const getDifficultyIcon = (diff) => {
        const icons = {
            easy: '🟢',
            medium: '🟡',
            hard: '🔴'
        };
        return icons[diff] || '⚪';
    };

    if (!currentQuestion) {
        return (
            <div className="question-viewer fade-in">
                <div className="no-questions">
                    <h3>No questions available for this difficulty level</h3>
                    <button className="back-button" onClick={onBack}>
                        ← Back to Difficulty Selection
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="question-viewer fade-in">
            <div className="viewer-header">
                <button className="back-button" onClick={onBack}>
                    ← Back to Difficulty
                </button>

                <div className="topic-breadcrumb">
                    <span className="topic-name">{topicData.name}</span>
                    <span className="separator">•</span>
                    <span className="difficulty-badge" style={{ color: getDifficultyColor(difficulty) }}>
                        {getDifficultyIcon(difficulty)} {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </span>
                </div>
            </div>

            <div className="question-content">
                <div className="progress-section">
                    <div className="progress-info">
                        <span className="question-counter">
                            Question {currentIndex + 1} of {questions.length}
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${((currentIndex + 1) / questions.length) * 100}%`,
                                background: getDifficultyColor(difficulty)
                            }}
                        ></div>
                    </div>
                </div>

                <div className="question-card">
                    <div className="question-section">
                        <h3 className="question-title">Question</h3>
                        <p className="question-text">{currentQuestion.question}</p>

                        <div className="question-actions">
                            <button
                                className={`reveal-button ${showAnswer ? 'active' : ''}`}
                                onClick={toggleAnswer}
                            >
                                {showAnswer ? 'Hide Answer' : 'Show Answer'}
                            </button>
                        </div>
                    </div>

                    {showAnswer && (
                        <div className="answer-section slide-in">
                            <h3 className="answer-title">Answer</h3>
                            <div className="answer-text">
                                {currentQuestion.answer.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="navigation-section">
                    <button
                        className="nav-button prev"
                        onClick={handlePreviousQuestion}
                        disabled={currentIndex === 0}
                    >
                        ← Previous
                    </button>

                    <div className="question-dots">
                        {questions.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                style={{
                                    backgroundColor: index === currentIndex ? getDifficultyColor(difficulty) : 'rgba(255, 255, 255, 0.3)'
                                }}
                            ></span>
                        ))}
                    </div>

                    <button
                        className="nav-button next"
                        onClick={handleNextQuestion}
                        disabled={currentIndex === questions.length - 1}
                    >
                        Next →
                    </button>
                </div>

                <div className="study-stats">
                    <div className="stat-item">
                        <span className="stat-label">Progress</span>
                        <span className="stat-value">
                            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
                        </span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Remaining</span>
                        <span className="stat-value">
                            {questions.length - currentIndex - 1} questions
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionViewer;
