// import ReactApexChart from 'apexcharts';
// import {render} from "react-dom";
// import React from "react";
//
// class ApexChart extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             series: [{
//                 name: 'Correct Answers',
//                 data: [10, 15, 9, 7, 8, 12, 14]
//             }, {
//                 name: 'Wrong Answers',
//                 data: [2, 5, 3, 4, 3, 2, 1]
//             }],
//             options: {
//                 chart: {
//                     type: 'bar',
//                     height: 350,
//                     stacked: true,
//                     stackType: '100%'
//                 },
//                 plotOptions: {
//                     bar: {
//                         horizontal: true,
//                     },
//                 },
//                 stroke: {
//                     width: 1,
//                     colors: ['#fff']
//                 },
//                 title: {
//                     text: 'Quiz Results: Correct vs Wrong Answers'
//                 },
//                 xaxis: {
//                     categories: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7'],
//                 },
//                 tooltip: {
//                     y: {
//                         formatter: function (val) {
//                             return val + " answers"
//                         }
//                     }
//                 },
//                 fill: {
//                     opacity: 1
//                 },
//                 legend: {
//                     position: 'top',
//                     horizontalAlign: 'left',
//                     offsetX: 40
//                 }
//             },
//         };
//     }
// //
// // const ResultChart = ({series}) => {
// //             const options = {
// //
// //
// //                     series: [{
// //                         name: 'Marine Sprite',
// //                         data: [44, 55, 41, 37, 22, 43, 21]
// //                     }, {
// //                         name: 'Striking Calf',
// //                         data: [53, 32, 33, 52, 13, 43, 32]
// //                     }, {
// //                         name: 'Tank Picture',
// //                         data: [12, 17, 11, 9, 15, 11, 20]
// //                     }, {
// //                         name: 'Bucket Slope',
// //                         data: [9, 7, 5, 8, 6, 9, 4]
// //                     }, {
// //                         name: 'Reborn Kid',
// //                         data: [25, 12, 19, 32, 25, 24, 10]
// //                     }],
// //                     options: {
// //                         chart: {
// //                             type: 'bar',
// //                             height: 350,
// //                             stacked: true,
// //                             stackType: '100%'
// //                         },
// //                         plotOptions: {
// //                             bar: {
// //                                 horizontal: true,
// //                             },
// //                         },
// //                         stroke: {
// //                             width: 1,
// //                             colors: ['#fff']
// //                         },
// //                         title: {
// //                             text: '100% Stacked Bar'
// //                         },
// //                         xaxis: {
// //                             categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
// //                         },
// //                         tooltip: {
// //                             y: {
// //                                 formatter: function (val) {
// //                                     return val + "K"
// //                                 }
// //                             }
// //                         },
// //                         fill: {
// //                             opacity: 1
// //
// //                         },
// //                         legend: {
// //                             position: 'top',
// //                             horizontalAlign: 'left',
// //                             offsetX: 40
// //                         }
// //                     },
// //
// //
// //                 };
// //             }
// //
// //         // return (
// //         //     <div>
// //         //         <div id="chart">
// //         //             <ReactApexChart options={options} series={series} type="bar" height={350}/>
// //         //         </div>
// //         //         <div id="html-dist"></div>
// //         //     </div>
// //         // );
// //
// //
// // };
// // export default ResultChart;