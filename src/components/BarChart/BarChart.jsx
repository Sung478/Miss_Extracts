
import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

function BarChart() {
  const [trackingName, setTrackingName] = useState([]);
  const [trackingValue, setTrackingValue] = useState([]);

  useEffect
    (() => {
      const recentSevenDay = [];
      const trackingValuePerDay = [];

      const getTrackinkRecord = async () => {
        const dataRequest = await fetch("#");
        const dataResponse = await dataRequest.json();

        //console.log(dataResponse); -> array

        //ดึงข้อมูลมาทำชื่อกราฟแกน x -> ดึง 7 วันล่าสุด
        for (let i = 0; i < dataResponse.length; i++) {
          recentSevenDay.push(dataResponse[i].recent7dayInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
          trackingValuePerDay.push(dataResponse[i].valueExerciseInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
        }

        // console.log(recentSevenDay);
        // console.log(trackingValuePerDay);

        setTrackingName(recentSevenDay);
        setTrackingValue(trackingValuePerDay);
      };

      getTrackinkRecord();
    },
    []);



  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h2 className="text-center mt-3 mb-3">Track History</h2>

        <Chart
          type="bar"
          width={550}
          height={350}
          series={[
            {
              name: "Track History",
              data: [1,2,3,4,5,6,7],//trackingValue,   //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
            },
          ]}
          options={{
            title: {
              text: "",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "",
              style: { fontSize: 18 },
            },

            colors: ["#515A5A"],  //สีกราฟแท่ง 
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: trackingName,  //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
              title: {
                text: "Day per week",
                style: { color: "#F1C40F", fontSize: 17 },  //สีชื่อแกน x
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
                style: { color: "#F1C40F", fontSize: 17 },  //สีแกน y
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
                colors: ["#F1C40F"],  //text in bar
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;




//แบบอื่นและสวยกว่า

// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [{
//         data: [21, 22, 10, 28, 16, 21, 13, 30]
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'bar',
//           events: {
//             click: function(chart, w, e) {
//               // console.log(chart, w, e)
//             }
//           }
//         },
//         colors: colors,
//         plotOptions: {
//           bar: {
//             columnWidth: '45%',
//             distributed: true,
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         legend: {
//           show: false
//         },
//         xaxis: {
//           categories: [
//             ['John', 'Doe'],
//             ['Joe', 'Smith'],
//             ['Jake', 'Williams'],
//             'Amber',
//             ['Peter', 'Brown'],
//             ['Mary', 'Evans'],
//             ['David', 'Wilson'],
//             ['Lily', 'Roberts'], 
//           ],
//           labels: {
//             style: {
//               colors: colors,
//               fontSize: '12px'
//             }
//           }
//         }
//       },
    
    
//     };
//   }



//   render() {
//     return (
      

// <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>


//     );
//   }
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

//ref https://apexcharts.com/react-chart-demos/column-charts/distributed/