"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsCharts() {
  const data = {
    labels: ["Features", "Kitchen", "Gadget", "Electronics"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(99,193,80,0.6)",
          "rgba(97,69,28,0.6)",
          "rgba(253,160,80,0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(97,229,28,1)",
          "rgba(97,69,28,1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">
        Best Selling Charts
      </h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data} className="w-32 h-32" />
      </div>
    </div>
  );
}
