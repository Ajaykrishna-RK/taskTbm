import { useMediaQuery } from '@mui/material'
import React from 'react'

function LandingPage() {

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
  return (
    <>
    {isNonMobileScreens ? 
    <div style={{marginTop:"70px"}}>

<div style={{fontSize:"100px",marginLeft:'23%'}}>The World's</div>
<div style={{position:'relative'}}>
<div style={{position:'absolute',left:"50%",top:"5%"}}>
<div style={{fontSize:"100px"}}>Best</div>
</div> 
<div style={{position:'absolute',left:"31%",top:'30%'}}>
<div style={{fontSize:"100px"}}> Brand Builders </div>
</div> 
<div style={{position:'absolute',left:"31%",top:'30%'}}>
<div style={{fontSize:"100px"}}> Brand Builders </div>
</div> 

<div style={{position:'absolute',left:"70%",top:'70%',bottom:'0%',right:"0%",lineHeight:"40px"}}>
<div style={{fontSize:"20px"}}>  Only AI Powered Brand  </div>
<div style={{fontSize:"20px"}}>  Builders, Social Media And    </div>
<div style={{fontSize:"20px"}}>  Digital Marketers   </div>
</div> 
    <img   src="/src/assets/Rectangle 19.png" alt="" sizes="" srcset="" />
  
    
</div>


    </div> 
    : 
    
    <div style={{ position: 'relative' ,marginTop:'60px'}}>
    <img src="/src/assets/Rectangle 19.png" alt="" sizes="" srcset="" style={{width: '100%', height: 'auto' }} />

    <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontSize: '50px', textAlign: 'center' }}>The World's</div>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0 }}>
          <div style={{ fontSize: '50px', textAlign: 'center' }}>Best</div>
        </div>

        <div style={{ position: 'absolute', left: 0, top: 40, right: 0 }}>
          <div style={{ fontSize: '50px', textAlign: 'center' }}>Brand Builders</div>
        </div>

        <div style={{ textAlign: 'center',marginTop:"80%" }}>
          <div style={{ fontSize: '20px' }}>Only AI Powered Brand</div>
          <div style={{ fontSize: '20px' }}>Builders, Social Media And</div>
          <div style={{ fontSize: '20px' }}>Digital Marketers</div>
        </div>
      </div>
    </div>
  </div> 
}
    </>

  )
}

export default LandingPage