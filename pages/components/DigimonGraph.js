import React from 'react'
import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Script from "next/script";

const DigimonGraph = (props) => {

    const array = props.responseDigimonAll
    console.log(array);

    const {
      result,
      fresh,
      intraining,
      rookie,
      champion,
      ultimate,
      mega,
      training,
      armor,
    } = {
      result: array.filter((array) => array.level === props.singleDigimon.level),
      fresh: array.filter((array) => array.level === "Fresh"),
      intraining: array.filter((array) => array.level === "In Training"),
      rookie: array.filter((array) => array.level === "Rookie"),
      champion: array.filter((array) => array.level === "Champion"),
      ultimate: array.filter((array) => array.level === "Ultimate"),
      mega: array.filter((array) => array.level === "Mega"),
      training: array.filter((array) => array.level === "Training"),
      armor: array.filter((array) => array.level === "Armor"),
    };

    let unique = [...new Set(array.map((a) => a.level))];

    const labelsDigiData = [
      { id: 0, level: "In Training", lengthDigi: intraining.length },
      { id: 1, level: "Rookie", lengthDigi: rookie.length },
      { id: 2, level: "Champion", lengthDigi: champion.length },
      { id: 3, level: "Ultimate", lengthDigi: ultimate.length },
      { id: 4, level: "Fresh", lengthDigi: fresh.length },
      { id: 5, level: "Mega", lengthDigi: mega.length },
      { id: 6, level: "Training", lengthDigi: training.length },
      { id: 7, level: "Armor", lengthDigi: armor.length },
    ];

    let newArrayData = [];

    labelsDigiData.forEach((element) => {
      newArrayData = labelsDigiData.filter(
        (element) => element.level !== props.singleDigimon.level
      );
    });
    newArrayData.unshift({
      id: 8,
      level: props.singleDigimon.level,
      lengthDigi: result.length,
    });
    console.log(newArrayData);

    let newArray = unique.filter((unique) => unique !== props.singleDigimon.level);
    newArray.unshift(props.singleDigimon.level);

    newArrayData = newArrayData.map((element) => element.lengthDigi);

    const dataChart = {
      labels: newArray,
      datasets: [
        {
          label: "Digimon Level Distribution",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
          data: newArrayData,
        },
      ],
    };

  return (
    <div><Bar data={dataChart}></Bar></div>
  )
}

export default DigimonGraph