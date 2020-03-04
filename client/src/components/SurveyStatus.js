import React from 'react'
import { Card, Progress } from 'semantic-ui-react'



const SurveyStatus = () => (
  
<div>
  <Card color='pink'> 
     <h3>Survey Status</h3>
     <h5>Complete 10 surveys to unlock the
       ability to create your own surveys!</h5>
      
  <Progress class='progress' color='pink' value='3' total='10' progress='ratio' />
     <h4 color= 'grey'>Create your own surveys!</h4> 
  </Card>
</div>
)

    

export default SurveyStatus;