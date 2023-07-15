
import { Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
  return (
    <div style={{backgroundColor:"black" ,width:"100%",height:"160px",marginTop:"5%"}}>
        <Grid container sx={{justifyContent:"space-evenly" ,textAlign:"center",fontSize:"10px" ,color:"#fff",alignItems:"center",display:'flex'}}>
            <Grid item xs={12} md={6} sx={{marginTop:'2%'}}>
<ul>
    <li>
        Top brands Media 
    </li>
    <li>
        Chennai
    </li>
    <li>
       Los Angles
    </li>
</ul>

            </Grid>

           < Grid item xs={12} md={6} sx={{marginTop:'2%'}}>
<div>
    <p>Get In touch</p>

    <ArrowForwardIcon/>
</div>

            </Grid>
        </Grid>




    </div>
  )
}

export default Footer