import React, { useContext, useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Input, Form, Radio, Button } from 'semantic-ui-react'
import '../styles/index.css'
import API from '../utils/API'

export const ChartInstance = (props) => {

    console.log(props)

    const title = (props.results.title ? props.results.title : "");

    const questions = (props.results.questions ? props.results.questions : "");

    const q1 = (questions[0] ? questions[0].q1 : "");
    const q2 = (questions[0] ? questions[0].q2 : "");
    const q3 = (questions[0] ? questions[0].q3 : "");
    const q4 = (questions[0] ? questions[0].q4 : "");
    const q5 = (questions[0] ? questions[0].q5 : "");

    const resultA1a = (result.a1 ? result.a1.a : "");
    const resultA1b = (result.a1 ? result.a1.b : "");
    const resultA1c = (result.a1 ? result.a1.c : "");
    const resultA1d = (result.a1 ? result.a1.d : "");
    const resultA2a = (result.a2 ? result.a2.a : "");
    const resultA2b = (result.a2 ? result.a2.b : "");
    const resultA2c = (result.a2 ? result.a2.c : "");
    const resultA2d = (result.a2 ? result.a2.d : "");
    const resultA3a = (result.a3 ? result.a3.a : "");
    const resultA3b = (result.a3 ? result.a3.b : "");
    const resultA3c = (result.a3 ? result.a3.c : "");
    const resultA3d = (result.a3 ? result.a3.d : "");
    const resultA4a = (result.a4 ? result.a4.a : "");
    const resultA4b = (result.a4 ? result.a4.b : "");
    const resultA4c = (result.a4 ? result.a4.c : "");
    const resultA4d = (result.a4 ? result.a4.d : "");
    const resultA5a = (result.a5 ? result.a5.a : "");
    const resultA5b = (result.a5 ? result.a5.b : "");
    const resultA5c = (result.a5 ? result.a5.c : "");
    const resultA5d = (result.a5 ? result.a5.d : "");

    return (

        <Chart
            id="barChart"
            width={'80rem'}
            height={'30rem'}
            chartType="BarChart"
            loader={<div><h1>Loading Chart</h1></div>}
            data={[
                ['Q1', 'A1', 'A2', 'A3', 'A4'],
                [`${q1}`, resultA1a, resultA1b, resultA1c, resultA1d],
                [`${q2}`, resultA2a, resultA2b, resultA2c, resultA2d],
                [`${q3}`, resultA3a, resultA3b, resultA3c, resultA3d],
                [`${q4}`, resultA4a, resultA4b, resultA4c, resultA4d],
                [`${q5}`, resultA5a, resultA5b, resultA5c, resultA5d]

            ]}
            options={{
                title: `${title}`,
                chartArea: { width: '50%' },
                colors: ['#fde9e8', '#f8a9a5', '#f36962', '#ef291f'],
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
    )
}
    
