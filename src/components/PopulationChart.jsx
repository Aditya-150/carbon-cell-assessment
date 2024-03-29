import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register();

export default function PopulationChart() {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [],
  });
  const URL =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  const fetchData = async () => {
    const response = await fetch(URL);
    const fetchedData = await response.json();
    setPopulationData({
      labels: fetchedData.data.map((item) => item.Year),
      datasets: [
        {
          label: "US Population",
          data: fetchedData.data.map((item) => item.Population),
          borderColor: "#22c55e",
          backgroundColor: "#14532d",
          color: "#fff",
        },
      ],
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "US Population Chart",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h2>Task 2</h2>
      <h1 className="text-xl">US Population Data</h1>
      {populationData.datasets.length > 0 ? (
        <div className="bg-zinc-700 w-3/4 lg:w-full p-2 h-auto m-10 rounded-xl object-contain">
          <Line options={chartOptions} data={populationData} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
