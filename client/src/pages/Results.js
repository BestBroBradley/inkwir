import React, { useRef, useContext, useState, useEffect } from "react";
// import  { Chart } from "react-google-charts";
import BarChart from "../components/BarChart";
import UserContext from "../utils/UserContext";
import { Grid, Container } from "semantic-ui-react";
import SingleSurvey from "../components/SingleSurvey";
import TakeSurvey from "../components/TakeSurvey";
import API from "../utils/API";


import GroupResults from "../components/GroupResults";

function Results() {

    const { userState } = useContext(UserContext);
    
  useEffect(() => {
      API.getResult().then(res => {
          setResults(res.data)
          console.log(res.data[0].title)
    });
  }, [])

  const [results, setResults] = useState([]);
  const title = (results[0] ? results[0].title : "");
  const category = (results[0] ? results[0].category : "");
  console.log(title);
  console.log(category);


    return (
        
        <Container>
            <Grid>
                <Grid.Row columns={1}>

                    <Grid.Column >
                        <h5 id="answers">Title: {title}</h5>

                        <h5 id="fontPatrol">Category: {category}</h5>

                        <BarChart />
                        <br></br>
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                        <GroupResults />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>


    );
}          
          
export default Results;
// const Example = () => {
//   const Results = useRef();
//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <button>Print this out!</button>}
//         content={() => Results.current}
//       />
//       <ComponentToPrint ref={Results} />
//     </div>
//   );
// };
// export default Results;