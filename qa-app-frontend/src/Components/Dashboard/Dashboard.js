import React, {useState, useEffect} from "react";
import React from "react";
import './Dashboard.css';

const Dashboard = () => {
    const [userData, setUserData] = useState({
        labels: ['MockQuiz 1', 'MockQuiz 2', 'MockQuiz 3'],
        datasets: [
            {
                label: 'Your Score',
                data: [85, 90, 78],
                backgroundColor: 'rgb(53, 162, 235, 0.5)',
            },
            {
                label: 'Average Score',
                data: [80, 85, 75],
                backgroundColor: 'rgb(255, 99, 132, 0.5)'
            }
        ]
        });
    const [loading, setLoading] = useState(false);
    //Mock fetch data function
    const fetchData = () => {
        setLoading(true);
        //Simulate an API call
        setTimeout(() => {
            setUserData({
                labels: ['MockQuiz 1', 'MockQuiz 2', 'MockQuiz 3'],
                datasets: [
                    {
                        label: 'Your Score',
                        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
                        backgroundColor: 'rgb(53, 162, 235, 0.5)',
                    },
                    {
                        label: 'Average Score',
                        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
                        backgroundColor: 'rgb(255, 99, 132, 0.5)',
                    }
                ]
            });
            setLoading(false);
        }, 1000);

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                {loading ? <p>Loading...</p> : <Bar data={userData} />}
            </div>
            <button onClick={fetchData}>Refresh Data</button>
        </div>
    );
};

export default Dashboard;