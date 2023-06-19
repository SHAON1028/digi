"use client"
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
 
  datasets: [
    {
      data: [12, 10, 10, 15, 20, 15,20],
      backgroundColor: [
        "rgba(247, 114, 52, 1)",
        "rgba(22, 93, 255, 1)",
        "rgba(15, 198, 194, 1)",
        "rgba(247, 186, 30, 1)",
        "rgba(114, 46, 209, 1)",
        "rgba(52, 145, 250, 1)",
        "rgba(217, 26, 217, 1)",
      ],
      borderColor: [
        "rgba(247, 114, 52, 1)",
        "rgba(22, 93, 255, 1)",
        "rgba(15, 198, 194, 1)",
        "rgba(247, 186, 30, 1)",
        "rgba(114, 46, 209, 1)",
        "rgba(52, 145, 250, 1)",
        "rgba(217, 26, 217, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Chartskill() {
  return <Doughnut data={data} />;
}

