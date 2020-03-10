import React, { useContext, useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Input, Form, Radio, Button } from 'semantic-ui-react'
import '../styles/index.css'
import API from '../utils/API'

export const ChartInstance = (props) => {

    console.log(props)

    // const q1 = (questions[0] ? questions[0].q1 : "");
    // const q2 = (questions[0] ? questions[0].q2 : "");
    // const q3 = (questions[0] ? questions[0].q3 : "");
    // const q4 = (questions[0] ? questions[0].q4 : "");
    // const q5 = (questions[0] ? questions[0].q5 : "");

    // const resultA1a = (props.results.results.a1 ? parseInt(props.results.results.a1.a) : "");
    // const resultA1b = (props.results.results.a1 ? parseInt(props.results.results.a1.b) : "");
    // const resultA1c = (props.results.results.a1 ? parseInt(props.results.results.a1.c) : "");
    // const resultA1d = (props.results.results.a1 ? parseInt(props.results.results.a1.d) : "");
    // const resultA2a = (props.results.results.a2 ? parseInt(props.results.results.a2.a) : "");
    // const resultA2b = (props.results.results.a2 ? parseInt(props.results.results.a2.b) : "");
    // const resultA2c = (props.results.results.a2 ? parseInt(props.results.results.a2.c) : "");
    // const resultA2d = (props.results.results.a2 ? parseInt(props.results.results.a2.d) : "");
    // const resultA3a = (props.results.results.a3 ? parseInt(props.results.results.a3.a) : "");
    // const resultA3b = (props.results.results.a3 ? parseInt(props.results.results.a3.b) : "");
    // const resultA3c = (props.results.results.a3 ? parseInt(props.results.results.a3.c) : "");
    // const resultA3d = (props.results.results.a3 ? parseInt(props.results.results.a3.d) : "");
    // const resultA4a = (props.results.results.a4 ? parseInt(props.results.results.a4.a) : "");
    // const resultA4b = (props.results.results.a4 ? parseInt(props.results.results.a4.b) : "");
    // const resultA4c = (props.results.results.a4 ? parseInt(props.results.results.a4.c) : "");
    // const resultA4d = (props.results.results.a4 ? parseInt(props.results.results.a4.d) : "");
    // const resultA5a = (props.results.results.a5 ? parseInt(props.results.results.a5.a) : "");
    // const resultA5b = (props.results.results.a5 ? parseInt(props.results.results.a5.b) : "");
    // const resultA5c = (props.results.results.a5 ? parseInt(props.results.results.a5.c) : "");
    // const resultA5d = (props.results.results.a5 ? parseInt(props.results.results.a5.d) : "");

    return (
        <>
        <Chart
            id="barChart"
            width={'80rem'}
            height={'30rem'}
            chartType="BarChart"
            loader={<div><h1>Loading Chart</h1></div>}
            data={[
                ['Answers', 'Response'],
                [`${props.a.a}`, props.r.a],
                [`${props.a.b}`, props.r.b],
                [`${props.a.c}`, props.r.c],
                [`${props.a.d}`, props.r.d],

            ]}
            options={{
                title: `${props.q}`,
                chartArea: { width: '50%' },
                colors: ['#fde9e8', '#f8a9a5', '#f36962', '#ef291f'],
                hAxis: {
                    title: 'Number of Responses for Each Answer',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Possible Choices',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
        </>
    )
}
    
