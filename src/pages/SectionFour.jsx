import { Grid } from '@mui/material'
import React from 'react'

function SectionFour() {
  return (
    <div>
<Grid  container >
<Grid item  md={6} sm={12} sx={{marginTop:"5%"}}>
  

  <div style={{justifyContent:"center",alignItems:"center",display:"grid",marginLeft:"15%"}}>
<p style={{fontWeight:'lighter'}}>OUR SERVICE</p>

<p style={{fontWeight:'normal',fontSize:"30px",marginTop:"-1%"}}>

Web and Mobile Platform
</p>

<p style={{fontWeight:'normal',fontSize:"12px", marginTop:"-1%",marginRight:"15%"}}>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam odit rerum voluptate nobis, sed impedit debitis aliquid vitae velit perspiciatis neque dolorum nulla quo eaque! Aspernatur placeat facere odit.
</p>
  </div>

 
</Grid>
<Grid item md={6} sm={12} sx={{marginTop:"5%"}}>
 
  <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <img style={{width:"50%" }} src="/src/assets/Rectangle 34.png" alt="" srcset="" />
        </div>
       
  </Grid>
</Grid>


    </div>
  )
}

export default SectionFour