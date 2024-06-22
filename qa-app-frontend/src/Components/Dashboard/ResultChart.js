import React from "react";
import ReactApexChart from "react-apexcharts";

const ResultChart = ({ series, quizNames }) => {
    // Define default series data to avoid undefined
    const defaultSeries = [
        {
            name: "Correct Answers",
            data: []
        },
        {
            name: "Wrong Answers",
            data: []
        }
    ];

    // Use series if defined, else fallback to defaultSeries
    const finalSeries = series && Array.isArray(series) && series.length ? series : defaultSeries;
    const finalQuizNames = quizNames && Array.isArray(quizNames) && quizNames.length ? quizNames : [];

    const options = {
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%"
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        stroke: {
            width: 1,
            colors: ["#fff"]
        },
        title: {
            text: "Quiz Results: Correct vs Wrong Answers"
        },
        xaxis: {
            categories: finalQuizNames,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " answers";
                }
            }
        },
        fill: {
            opacity: 1,
            colors: ["#5b984d", "#e35449"]
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40
        }
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={finalSeries} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ResultChart;
