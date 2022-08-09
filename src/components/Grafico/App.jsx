import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "3S BET LOHAN", "1T ALINE", "Profit"],
  ["Agosto", 5, 10, 5],
  ["Setembro", 5, 50, 30],

];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export function App() {
  return (
    <>
    <h2>ESTATÍSTICAS</h2>
    <Chart
      chartType="Bar"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
    </>
  );
  
}

export default App;
