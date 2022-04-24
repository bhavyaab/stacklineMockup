import React from "react";
import { useSelector } from "react-redux";
import Chart from 'react-google-charts'
import variables from '../../../styles/lib/_var.scss';
import { salesData } from "../../../store/stacklineSlice";
import './drawChart.scss'

export const options = {
  chartArea: { width: '94%' },//chart diaplay area
  title: "Retail Sales",
  curveType: "function",
  legend: { position: "none" },
  titleTextStyle: {
    bold: false,
    fontName: variables.ffPrimary,
  },
  vAxis: { ticks: [], viewWindow: {
          min: -100000,
          max: 1500000
        }, baselineColor: 'none'},
  hAxis: { ticks: [], format: 'MMM'},
  colors: [variables.colorSecondary, variables.colorTertiory],
}

export function DrawChart() {
  var chartData = salesVsRetail(useSelector(salesData));
  return (
    <div className="myChart">
      <Chart
        chartType="LineChart"
        width="100%"
        height="60vh"
        data={chartData}
        options={options}
      />
      <ul>
        <li>JAN</li>
        <li>FEB</li>
        <li>MAR</li>
        <li>APR</li>
        <li>MAY</li>
        <li>JUN</li>
        <li>JUL</li>
        <li>AUG</li>
        <li>SEP</li>
        <li>OCT</li>
        <li>NOV</li>
        <li>DEC</li>
      </ul>
    </div>
  );
}
//filter data for date, retailSales and wholeSales from given data
var salesVsRetail = (data) => {
    var result = [['', '', '']];
    var date = ''
    data.forEach(ele => {
      date =  new Date(ele.weekEnding);
      result.push([date, ele.retailSales, ele.wholesaleSales])
    })

    return result;
}