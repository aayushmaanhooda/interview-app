import React from 'react';
import './DifficultySelector.css';

const DifficultySelector = ({ topic, topicData, onDifficultySelect, onBack }) => {
    const difficulties = ['easy', 'medium', 'hard'];

    const getDifficultyInfo = (difficulty) => {
        const questionCount = topicData.questions[difficulty]?.length || 0;

        const difficultyConfig = {
            easy: {
                label: 'Easy',
                description: 'Perfect for beginners and foundational concepts',
                color: 'green',
                icon: '🟢'
            },
            medium: {
                label: 'Medium',
                description: 'Intermediate level questions for deeper understanding',
                color: 'yellow',
                icon: '🟡'
            },
            hard: {
                label: 'Hard',
                description: 'Advanced concepts and complex scenarios',
                color: 'red',
                icon: '🔴'
            }
        };

        return { ...difficultyConfig[difficulty], questionCount };
    };

    return (
        <div className="difficulty-selector fade-in">
            <div className="selector-header">
                <button className="back-button" onClick={onBack}>
                    ← Back to Topics
                </button>
                <div className="topic-info">
                    <h2>{topicData.name}</h2>
                    <p>{topicData.description}</p>
                </div>
            </div>

            <div className="difficulty-content">
                <h3>Choose Your Difficulty Level</h3>
                <p className="difficulty-subtitle">
                    Select the appropriate difficulty level based on your current knowledge
                </p>

                <div className="difficulty-cards">
                    {difficulties.map((difficulty) => {
                        const info = getDifficultyInfo(difficulty);

                        return (
                            <div
                                key={difficulty}
                                className={`difficulty-card ${info.color}`}
                                onClick={() => onDifficultySelect(difficulty)}
                            >
                                <div className="card-header">
                                    <span className="difficulty-icon">{info.icon}</span>
                                    <h4>{info.label}</h4>
                                    <div className="question-badge">
                                        {info.questionCount} questions
                                    </div>
                                </div>

                                <p className="difficulty-description">
                                    {info.description}
                                </p>

                                <div className="progress-bar">
                                    <div className="progress-fill"></div>
                                </div>

                                <div className="card-action">
                                    <span>Start Learning</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="study-tips">
                    <h4>💡 Study Tips</h4>
                    <ul>
                        <li>Start with Easy questions to build confidence</li>
                        <li>Progress to Medium once you're comfortable</li>
                        <li>Challenge yourself with Hard questions for interviews</li>
                        <li>Review questions you find difficult</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DifficultySelector;
