import React from "react";
import { useSelector } from "react-redux";

import './tableMaker.scss';
import { salesData } from '../../../store/stacklineSlice';

//format date in to MM-DD-YY
function formatDate(date) {
    var D = new Date(date);
    var year = D.getFullYear().toString().substr(2,2)
    var month = D.getMonth() + 1;
    var day = D.getDate()
    //change month and date to two digit
    if(month < 10) month = '0' + month.toString();
    if(day < 10) day = '0' + day.toString();
  return [month, day, year].join('-')
}

//add $ sign to amount and comma saperated in 1000s
const money = (value) => '$' + value.toLocaleString("en-US");

export const TableMaker = () => {
    var header = ['WEEK ENDING', 'RETAIL SALES', 'WHOLESALE SALE', 'UNIT SOLD', 'RETAILER MARGIN']
    var tableData = useSelector(salesData);
    return (
        <div className="tableMaker">
            <table>
                <thead key={'tr-th'}>
                    <tr>
                        {header.map((ele, i) => <th key={'th-' + i}>{ele}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((ele, i) => {
                            var dataRow = []
                            for(var prop in ele){
                                var value = ele[prop]
                                if(prop === 'weekEnding') value = formatDate(ele[prop]);
                                if(prop === 'retailSales' || prop === 'wholesaleSales' || prop === 'retailerMargin') value = money(value);
                                dataRow.push(<td key={'td-' + i + '-' + prop}>{value}</td>)
                            }
                            return (<tr key={'tr-' + i + '-' + prop}>{dataRow}</tr>)
                    })}                     
                </tbody>
            </table>
        </div>
    )
}
