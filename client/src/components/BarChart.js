import React from "react";
import { Chart } from "react-google-charts";




const BarChart = () => (

<Chart
    width={'500px'}
    height={'300px'}
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Q1', 'A1', 'A2', 'A3', 'A4'],
      ['How often do you shop for groceries in a week?', 10, 3, 9, 20],
      ['How often do you get gas in a week?', 2, 3, 50, 10],
      ['How often do you clean your bathroom?', 16, 89, 34, 4],
     
    ]}
    options={{
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      colors: ['#fde9e8', '#f8a9a5', '#f36962', '#ef291f' ],
      hAxis: {
        title: 'Number of Responses for Each Answer',
        minValue: 0,
      },
      vAxis: {
        title: 'Questions',
      },
    }}
    // For tests
    rootProps={{ 'data-testid': '1' }}
  />
); 
export default BarChart;

