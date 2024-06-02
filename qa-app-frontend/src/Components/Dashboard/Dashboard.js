import React, {useState, useEffect} from "react";
import './Dashboard.css';
import ResultChart from "./ResultChart";

const Dashboard = ({lastSubmittedResults}) => {

    const [chartSeries, setChartSeries] = useState([]);

    useEffect(() => {
        setChartSeries([lastSubmittedResults.filter(result => result.isCorrect).length, lastSubmittedResults.filter(result => !result.isCorrect).length]);
    }, [lastSubmittedResults]); // Dependency array


    return (
        <div className="dashboard">

            <h1>Dashboard</h1>
            <ResultChart series={chartSeries} />
        </div>
    );
};

export default Dashboard;