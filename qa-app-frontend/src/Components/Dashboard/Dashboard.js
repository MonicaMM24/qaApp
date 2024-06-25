import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ResultChart from "./ResultChart";

const Dashboard = ({ allQuizResults }) => {
    const [chartSeries, setChartSeries] = useState([]);
    const [quizNames, setQuizNames] = useState([]);

    useEffect(() => {
        if (allQuizResults && Array.isArray(allQuizResults) && allQuizResults.length) {
            const correctAnswers = allQuizResults.map(results => results.filter(result => result.isCorrect).length);
            const wrongAnswers = allQuizResults.map(results => results.filter(result => !result.isCorrect).length);
            const names = allQuizResults.map(results => results[0]?.quizName || "Quiz");

            setChartSeries([
                {
                    name: "Correct Answers",
                    data: correctAnswers,
                    color: "#5b984d"
                },
                {
                    name: "Wrong Answers",
                    data: wrongAnswers,
                    color: "#e35449"
                }
            ]);

            setQuizNames(names);
        }
    }, [allQuizResults]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="chart-container">
                <ResultChart series={chartSeries} quizNames={quizNames} />
            </div>
        </div>
    );
};

export default Dashboard;
