
// import Chart from "react-apexcharts";
// import React, { useState, useEffect } from "react";

// function BarChart() {
//   const [trackingName, setTrackingName] = useState([]);
//   const [trackingValue, setTrackingValue] = useState([]);

//   useEffect
//     (() => {
//       const recentSevenDay = [];
//       const trackingValuePerDay = [];

//       const getTrackinkRecord = async () => {
//         const dataRequest = await fetch("#");
//         const dataResponse = await dataRequest.json();

//         //console.log(dataResponse); -> array

//         //ดึงข้อมูลมาทำชื่อกราฟแกน x -> ดึง 7 วันล่าสุด
//         for (let i = 0; i < dataResponse.length; i++) {
//           recentSevenDay.push(dataResponse[i].recent7dayInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
//           trackingValuePerDay.push(dataResponse[i].valueExerciseInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
//         }

//         // console.log(recentSevenDay);
//         // console.log(trackingValuePerDay);

//         setTrackingName(recentSevenDay);
//         setTrackingValue(trackingValuePerDay);
//       };

//       getTrackinkRecord();
//     },
//     []);



//   return (
//     <React.Fragment>
//       <div className="container-fluid mb-5">
//         <div className="dashboard-header">
//           <img className="header-icon" src="/bar-graph.png" />
//           <h3 className="text-center mt-3 mb-3">Track History</h3>
//         </div>

//         <Chart
//           type="bar"
//           width={450}
//           height={250}
//           series={[
//             {
//               name: "Track History",
//               data: [1,2,3,4,5,6,7],//trackingValue,   //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
//             },
//           ]}
//           options={{
//             title: {
//               text: "",
//               style: { fontSize: 10 },
//             },

//             subtitle: {
//               text: "",
//               style: { fontSize: 18 },
//             },

//             colors: ["#515A5A"],  //สีกราฟแท่ง 
//             theme: { mode: "light" },

//             xaxis: {
//               tickPlacement: "on",
//               categories: trackingName,  //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
//               title: {
//                 text: "Day per week",
//                 style: { color: "#F1C40F", fontSize: 17 },  //สีชื่อแกน x
//               },
//             },

//             yaxis: {
//               labels: {
//                 formatter: (val) => {
//                   return `${val}`;
//                 },
//                 style: { fontSize: "15", colors: ["#34495E"] }, //สีอักษรแกน y
//               },
//               title: {
//                 text: "Time (minute)",
//                 style: { color: "#F1C40F", fontSize: 17 },  //สีแกน y
//               },
//             },

//             legend: {
//               show: true,
//               position: "left",
//             },

//             dataLabels: {
//               formatter: (val) => {
//                 return `${val}`;
//               },
//               style: {
//                 colors: ["#F1C40F"],  //text in bar
//                 fontSize: 15,
//               },
//             },
//           }}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// }

// export default BarChart;




// //แบบอื่นและสวยกว่า

// // class ApexChart extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
    
// //       series: [{
// //         data: [21, 22, 10, 28, 16, 21, 13, 30]
// //       }],
// //       options: {
// //         chart: {
// //           height: 350,
// //           type: 'bar',
// //           events: {
// //             click: function(chart, w, e) {
// //               // console.log(chart, w, e)
// //             }
// //           }
// //         },
// //         colors: colors,
// //         plotOptions: {
// //           bar: {
// //             columnWidth: '45%',
// //             distributed: true,
// //           }
// //         },
// //         dataLabels: {
// //           enabled: false
// //         },
// //         legend: {
// //           show: false
// //         },
// //         xaxis: {
// //           categories: [
// //             ['John', 'Doe'],
// //             ['Joe', 'Smith'],
// //             ['Jake', 'Williams'],
// //             'Amber',
// //             ['Peter', 'Brown'],
// //             ['Mary', 'Evans'],
// //             ['David', 'Wilson'],
// //             ['Lily', 'Roberts'], 
// //           ],
// //           labels: {
// //             style: {
// //               colors: colors,
// //               fontSize: '12px'
// //             }
// //           }
// //         }
// //       },
    
    
// //     };
// //   }



// //   render() {
// //     return (
      

// // <div id="chart">
// // <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// // </div>


// //     );
// //   }
// // }

// // const domContainer = document.querySelector('#app');
// // ReactDOM.render(React.createElement(ApexChart), domContainer);

// //ref https://apexcharts.com/react-chart-demos/column-charts/distributed/




import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import './BarChart.css'

const BarChart = ({ dailyStats, loading }) => {
  // if (loading) return <h2>Loading..</h2>

  const [trackingName, setTrackingName] = useState([]);
  const [trackingValue, setTrackingValue] = useState([]);


  const getWeekDay = (firstDay) => {
    const day = firstDay.getDay()
    switch (day) {
      case 0:
        return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        break
      case 1:
        return ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        break
      case 2:
        return ['tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon']
        break
      case 3:
        return ['wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue']
        break
      case 4:
        return ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed']
          break
      case 5:
        return ['fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu']
        break
      case 6:
        return ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']
        break
    }
  }

  const getWeeklyStats = () => {
    //get last 7 days' date
    const sevenDays = [...Array(7).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date.toISOString().slice(0, 10);
    });
    // console.log('date', sevenDays)

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    // get last 7 days' data
    let currentWeek = []
    for (let day of dailyStats) {
      if (Date.parse(day._id) >= Date.parse(sevenDaysAgo)) {
        day._id = day._id.slice(0, 10)
        currentWeek.push(day)
      }
    }
    // console.log('test', currentWeek)

    // keep data in weeklyStats
    let weeklyStats = {}
    for (let i = 0; i < sevenDays.length; i++) {
      for (let date of currentWeek) {
        if (sevenDays[i] == date._id) {
          weeklyStats[sevenDays[i]] = date.total_duration
          break;
        }
        weeklyStats[sevenDays[i]] = 0
      }
    }
    // console.log('weeklyStats', weeklyStats)
    setTrackingValue(Object.values(weeklyStats))
    // set keys of chart
    // setTrackingName(Object.keys(weeklyStats))
    setTrackingName(getWeekDay(sevenDaysAgo))

  }

  useEffect(() => {
    getWeeklyStats()
  }, [])

  //  if (loading) return <h2>Loading..</h2>
  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h2 className="text-center mt-3 mb-3"></h2>

        <Chart
          type="bar"
          width={452}
          height={268}
          series={[
            {
              name: "Total Duration",
              data: trackingValue,
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false
              }
            },
            title: {
              text: "",
              style: { fontSize: 30, fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif;' },
            },

            subtitle: {
              text: "",
              style: { fontSize: 18, fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif;'},
            },

            colors: ["#000"],  //สีกราฟแท่ง 
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: trackingName,
              title: {
                text: "Day per week",
                style: { color: "#000", fontSize: 17, fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif;' , fontWeight : "bold" },  //สีชื่อแกน x
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#34495E"] }, //สีอักษรแกน y
              },
              title: {
                text: "Time (minute)",
                style: { color: "#000", fontSize: 17, fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif;' , fontWeight : "bold" },  //สีแกน y
              },
            },

            legend: {
              show: true,
              position: "left",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#fff"],  //text in bar
                fontSize: 15,
                fontFamily: 'Space Grotesk'
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;