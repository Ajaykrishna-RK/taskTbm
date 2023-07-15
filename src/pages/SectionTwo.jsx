import { Grid } from '@mui/material'
import React from 'react'

function SectionTwo() {
  return (
    <div style={{justifyContent : "center",alignItems: 'center ', display:'flex'}}>

<Grid  container >
  <Grid item md={6} sm={12}>
  <div>
            <img style={{width:"100%", height:"450px"}} src="/src/assets/Rectangle 25.png" alt="" srcset="" />
        </div>

       
  </Grid>
  <Grid item  md={6} sm={12}>
  <div>
            <img style={{width:"100%", height:"450px"}} src="/src/assets/Rectangle 26.png" alt="" srcset="" />
        </div>

       
  </Grid>

       


 
  <Grid item md={6} sm={12} sx={{marginTop:"5%"}}>
  <div style={{justifyContent:"center",alignItems:"center",display:"grid",marginLeft:"10%"}}>
  <p style={{fontWeight:'lighter'}}>OUR SERVICE</p>

  <p style={{fontWeight:'normal',fontSize:"25px",marginTop:"-2%"}}>

    Influencer Marketing Strategy
  </p>

  <p style={{fontWeight:'normal',fontSize:"12px",marginTop:"-2%", marginRight:"15%"}}>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam odit rerum voluptate nobis, sed impedit debitis aliquid vitae velit perspiciatis neque dolorum nulla quo eaque! Aspernatur placeat facere odit.
  </p>
        </div>

       
  </Grid>
  <Grid item  md={6} sm={12} sx={{marginTop:"5%"}}>
  <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <img style={{width:"50%" }} src="/src/assets/Rectangle 27.png" alt="" srcset="" />
        </div>

       
  </Grid>



  <Grid item md={6} sm={12} sx={{marginTop:"5%"}}>
 
  <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <img style={{width:"50%" }} src="/src/assets/Rectangle 29.png" alt="" srcset="" />
        </div>
       
  </Grid>
  <Grid item  md={6} sm={12} sx={{marginTop:"5%"}}>
  

        <div style={{justifyContent:"center",alignItems:"center",display:"grid",marginLeft:"10%"}}>
  <p style={{fontWeight:'lighter'}}>OUR SERVICE</p>

  <p style={{fontWeight:'normal',fontSize:"25px",marginTop:"-2%"}}>

   AI Powered
  </p>

  <p style={{fontWeight:'normal',fontSize:"12px",marginTop:"-2%", marginRight:"15%"}}>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam odit rerum voluptate nobis, sed impedit debitis aliquid vitae velit perspiciatis neque dolorum nulla quo eaque! Aspernatur placeat facere odit.
  </p>
        </div>

       
  </Grid>


  </Grid>



    </div>
  )
}

export default SectionTwo