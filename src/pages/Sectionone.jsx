import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import React from 'react'


const lists = [""]





function Sectionone() {

const isNonMobileScreens = useMediaQuery("(min-width:900px)")

  return (
    <>
    {isNonMobileScreens ? 

<div style={{backgroundColor:"#000", textAlign: "center" ,alignItems:"center" , overflow:"hidden", justifyContent:"center" , paddingTop:"4px",width:"100%",display:"flex"}}>
<ul style={{display:"flex",gap:"20px", overflowX:"auto"}}>
    <li style={{color:"#fff",fontSize:"20px"}}>
Digital First World Wide
    </li>
    <li style={{color:"#fff",fontSize:"20px"}}>
Digital First World Wide
    </li>
    <li style={{color:"#fff",fontSize:"20px"}}>
Digital First World Wide
    </li>
</ul>
</div>

: <div style={{backgroundColor:"#000", color:"#fff",textAlign: "center", marginTop: isNonMobileScreens ? "" : "20px" ,alignItems:"center" , overflow:"hidden", justifyContent:"center" , paddingTop:"4px",width:"100%",display:"flex"}}>
<p>Digital First WorldWide</p>
</div>
}



<div style={{justifyContent:'space-evenly',alignItems:"center",display: isNonMobileScreens ?  "flex" : "grid"}}>

<div style={{marginTop:'5%'}}>
<img src="/src/assets/Rectangle 21.png" alt="" srcset="" />
<p style={{fontWeight:'lighter'}}>OUR SERVICE</p>
<p style={{fontSize:"2rem",marginTop:"-2%"}}> Brand Identity</p>
</div>

<div style={{marginTop:isNonMobileScreens ? "19%" : "" }}>
<img src="/src/assets/Rectangle 22.png" alt="" srcset="" />
<p style={{fontWeight:'lighter'}}>OUR SERVICE</p>
<p style={{fontSize:"2rem",marginTop:"-2%"}}> Brand Strategy</p>
</div>

</div>

<div style={{justifyContent:'space-evenly',alignItems:"center",display: isNonMobileScreens ?  "flex" : "grid"}}>

<div >
<img src="/src/assets/Rectangle 22.png" alt="" srcset="" />
<p style={{fontWeight:'lighter'}}>OUR SERVICE</p>
<p style={{fontSize:"2rem",marginTop:"-2%"}}>Performance </p>
<p style={{fontSize:"2rem",marginTop:"-8%"}}>Marketing</p>

</div>

<div style={{marginTop:isNonMobileScreens ? "21%" : "" }}>
<img src="/src/assets/Rectangle 22.png" alt="" srcset="" />
<p style={{fontWeight:'lighter'}}>OUR SERVICE</p>
<p style={{fontSize:"2rem",marginTop:"-2%"}}> Content and  </p>
<p style={{fontSize:"2rem",marginTop:"-8%"}}>Copy Writing </p>
</div>

</div>





    </>
  )
}

export default Sectionone