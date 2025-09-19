import React from 'react';
import './TopicSelector.css';

const TopicSelector = ({ topics, studyData, onTopicSelect }) => {
    return (
        <div className="topic-selector fade-in">
            <h2>Choose a Topic to Study</h2>
            <p className="topic-subtitle">Select from the available topics below to start your interview preparation</p>

            <div className="topics-grid">
                {topics.map((topic) => {
                    const topicData = studyData[topic];
                    const totalQuestions = Object.values(topicData.questions).reduce(
                        (total, difficultyQuestions) => total + difficultyQuestions.length,
                        0
                    );

                    return (
                        <div
                            key={topic}
                            className="topic-card"
                            onClick={() => onTopicSelect(topic)}
                        >
                            <div className="topic-header">
                                <h3>{topicData.name}</h3>
                                <div className="question-count">
                                    {totalQuestions} questions
                                </div>
                            </div>
                            <p className="topic-description">{topicData.description}</p>

                            <div className="difficulty-preview">
                                <div className="difficulty-item">
                                    <span className="difficulty-label easy">Easy</span>
                                    <span className="count">{topicData.questions.easy?.length || 0}</span>
                                </div>
                                <div className="difficulty-item">
                                    <span className="difficulty-label medium">Medium</span>
                                    <span className="count">{topicData.questions.medium?.length || 0}</span>
                                </div>
                                <div className="difficulty-item">
                                    <span className="difficulty-label hard">Hard</span>
                                    <span className="count">{topicData.questions.hard?.length || 0}</span>
                                </div>
                            </div>

                            <div className="card-footer">
                                <span className="select-text">Click to start learning</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopicSelector;
