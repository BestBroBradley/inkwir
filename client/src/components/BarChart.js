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
          <ChartInstance results={result} />
        </div>)}
    </div>
  )
}
export default BarChart;

