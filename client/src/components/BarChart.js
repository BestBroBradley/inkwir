import React, { useContext, useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import {ChartInstance} from "./Chart"

const BarChart = () => {
  // const userState = useContext(UserContext);

  const [results, setResults] = useState([]);

  useEffect(() => {
    API.getAll().then(res => {
      setResults(res.data)
      console.log(res.data)
    });
  }, [])

  return (
    <div>
      {results.map(result =>
        <div>
          <h5 id="answers">Title: {result.title}</h5>
          <h5 id="fontPatrol">Category: {result.category}</h5>
          { result.questions[0].q1 ? 
          <ChartInstance 
            q={result.questions[0].q1}
            a={result.questions[0].a1}
            r={result.results.a1}/> : null }
          { result.questions[0].q2 ? 
          <><br/><ChartInstance 
            q={result.questions[0].q2}
            a={result.questions[0].a2}
            r={result.results.a2}/></> : null }
          { result.questions[0].q3 ? 
          <><br/><ChartInstance 
            q={result.questions[0].q3}
            a={result.questions[0].a3}
            r={result.results.a3}/></> : null }
          { result.questions[0].q4 ? 
          <><br/><ChartInstance 
            q={result.questions[0].q4}
            a={result.questions[0].a4}
            r={result.results.a4}/></> : null }
          { result.questions[0].q5 ? 
          <><br/><ChartInstance 
            q={result.questions[0].q5}
            a={result.questions[0].a5}
            r={result.results.a5}/></> : null }
          {/* <ChartInstance results={result} /> */}
        </div>)}
    </div>
  )
}
export default BarChart;

