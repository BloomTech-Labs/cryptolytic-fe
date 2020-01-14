import React from "react";
import Chart from "../Components/Charting/Chart";
import ChartOptionSelect from "../Components/Charting/ChartOptionSelect";

const Charts = () => {
  return (
    <div>
      <ChartOptionSelect />
      <Chart />
    </div>
  );
};

export default Charts;
