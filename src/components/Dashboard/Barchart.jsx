// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from '.\node_modules\faker\Faker';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// let options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// let data = {
//   labels,
//   datasets: [
//     {
//       label: 'Course Sales Per Day',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//         label: 'Users Per Day',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(13, 155, 25, 0.5)',
//     }
//   ],
// };

// export default function Barchart() {
//   return <Bar options={options} data={data} />;
// }
import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid'; 
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar,} from 'recharts';

const pdata = [
  {
      name:"python",
      student:13,
      fees:10
  },
  {
      name:"java",
      student:14,
      fees:18
  },
  {
      name:"nodejs",
      student:9,
      fees:11
  },
  {
      name:".net",
      student:12,
      fees:8
  },
  {
      name:"PHP",
      student:16,
      fees:17
  },
  {
      name:"html",
      student:15,
      fees:19
  },
  {
      name:"css",
      student:10,
      fees:20
  }
]

const Barchart= ()=>{
  return(
    <>
<ResponsiveContainer width="100%" aspect={3}>
<BarChart data={pdata} width={500} height={300} margin={{top:10, right:5, left:5, bottom:5}}>
    <CartesianGrid strokeDasharray="3 3"/>
    <Legend/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Bar dataKey="student" fill='#88884d8'/>
    <Bar dataKey="fees" fill='#82ca9d'/>
</BarChart>
</ResponsiveContainer>
</>
  )}
export default Barchart;