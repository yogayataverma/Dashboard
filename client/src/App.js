import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import {Chart as ChartJS, CategoryScale, LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement,BarElement } from 'chart.js';
import faker from 'faker';

ChartJS.register(
CategoryScale,
LinearScale,
LinearScale,
BarElement,
PointElement,
LineElement,
ArcElement,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);



function App() 
{
  const [data, setData] = useState([]);
  const [AA1, setAA1] = useState([]);

// Sort results by id in descending order, take two
// and return the age as an integer.

useEffect (()=>{

  const getUserData = async() =>{
    const reqData = await fetch("https://sheetdb.io/api/v1/b1mkig24i5yl5");
    const resData= await reqData.json();
    setData(resData);
    console.log(resData);
  }

  getUserData();
  

} , []);

const placedf = (value) => value == "Placed";
const placed = data.filter(placedf);
console.log(placed);

var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;
var s6 = 0;
var s7 = 0;
var s8 = 0;
var s9 = 0;
var s10 = 0;
var s11 = 0;
var s12 = 0;
var s13 = 0;

const placed1 = data.filter( str => { return str.status == "Placed" });

const unplaced1 = data.filter( str => { return str.status == "Not Placed" });

const A = data.filter( str => { return str.company == "A" });
const B = data.filter( str => { return str.company == "B" });
const C = data.filter( str => { return str.company == "C" });
const D = data.filter( str => { return str.company == "D" });
const E = data.filter( str => { return str.company == "E" });
const F = data.filter( str => { return str.company == "F" });
const G = data.filter( str => { return str.company == "G" });
const H = data.filter( str => { return str.company == "H" });
const I = data.filter( str => { return str.company == "I" });
const J = data.filter( str => { return str.company == "J" });
const X = data.filter( str => { return str.company == "X" });
const Y = data.filter( str => { return str.company == "Y" });
const Z = data.filter( str => { return str.company == "Z" });

var AA = data.filter( str => { return str.company == "A" ? s1 = s1 + parseInt(str.ctc,10) : s1 = s1 + 0 }) 
var BA = data.filter( str => { return str.company == "B" ? s2 = s2 + parseInt(str.ctc,10) : s2 = s2 + 0 })
var CA = data.filter( str => { return str.company == "C" ? s3 = s3 + parseInt(str.ctc,10) : s3 = s3 + 0 }) 
var DA = data.filter( str => { return str.company == "D" ? s4 = s4 + parseInt(str.ctc,10) : s4 = s4 + 0 }) 
var EA = data.filter( str => { return str.company == "E" ? s5 = s5 + parseInt(str.ctc,10) : s5 = s5 + 0 }) 
var FA = data.filter( str => { return str.company == "F" ? s6 = s6 + parseInt(str.ctc,10) : s6 = s6 + 0 }) 
var GA = data.filter( str => { return str.company == "G" ? s7 = s7 + parseInt(str.ctc,10) : s7 = s7 + 0 }) 
var HA = data.filter( str => { return str.company == "H" ? s8 = s8 + parseInt(str.ctc,10) : s8 = s8 + 0 }) 
var IA = data.filter( str => { return str.company == "I" ? s9 = s9 + parseInt(str.ctc,10) : s9 = s9 + 0 }) 
var JA = data.filter( str => { return str.company == "J" ? s10 = s10 + parseInt(str.ctc,10) : s10 = s10 + 0 }) 
var XA = data.filter( str => { return str.company == "X" ? s11 = s11 + parseInt(str.ctc,10) : s11 = s11 + 0 }) 
var YA = data.filter( str => { return str.company == "Y" ? s12 = s12 + parseInt(str.ctc,10) : s12 = s12 + 0 }) 
var ZA = data.filter( str => { return str.company == "Z" ? s13 = s13 + parseInt(str.ctc,10) : s13 = s13 + 0 }) 

console.log("Value of A.length"+A.length);
console.log("Value of AA1"+AA);
var avga = AA/(A.length);


console.log(avga);

console.log(placed1);


  const data1 = {
  labels: ["A", "B", "C", "D", "E", "F" , "G" , "H" , "I" , "J" , "X" , "Y" , "Z"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [A.length , B.length , C.length , D.length , E.length , F.length , G.length , H.length , I.length , J.length , X.length , Y.length , Z.length ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  ],
};

const data2 = {
  labels: ['Placed', 'Unplaced'],
  datasets: [
    {
      label: 'Students Data',
      data: [placed1.length , unplaced1.length ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data3 = {
  labels: ["A", "B", "C", "D", "E", "F" , "G" , "H" , "I" , "J" , "X" , "Y" , "Z"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [AA , BA , CA , DA , EA , FA , GA , HA , IA , JA , XA , YA , ZA ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  ],
};

const options11 = {
  plugins: {
    legend: {
      display: false,
    },
  },

  elements: {
    point:{
        radius: 0
    },
},


  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },

      title :{
        text:"Comapnies",
        display: true,
        color:"brown",
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: true,
        beginAtZero: true,
      },
      title :{
        text:"# of Students",
        display: true,
        color:"brown",
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },

};

const options12 = {
  plugins: {
    legend: {
      display: true,
      position:"bottom",
    },
  },

  elements: {
    point:{
        radius: 0
    },
},


};


  return (
    <div>

    <div style={{textAlign:"center" , fontWeight:"bold" , fontSize:"2vw"}}>Placed Student's Data</div>


    <Card></Card>

    <div style={{height:"25vw" , width:"40vw" ,marginLeft:"28vw" }} >
    <Bar data={data1}  options={options11} />
    </div>

    <div style={{height:"25vw" , width:"20vw" ,marginLeft:"38vw" }} >
    <Doughnut data={data2}  options={options12} />
    </div>

    <div style={{height:"25vw" , width:"40vw" ,marginLeft:"28vw" }} >
    <Bar data={data3}  options={options11} />
    </div>


    </div>
  );
}

export default App;
