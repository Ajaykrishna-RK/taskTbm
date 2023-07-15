import { AppBar, Box, Drawer, Toolbar, useMediaQuery } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const list =  ["Home", "About","ContactUs"]

function Header() {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

const [open,setOpen] = useState(false)
const handleOpenDrawer = ()=>{
  setOpen(true)
}
const handleCloseDrawer  = () =>{
  setOpen(false)
}

  return (
    <div>
{isNonMobileScreens ? 

<AppBar sx={{backgroundColor:"#e7e3e3",color:"black"}} >
    <Toolbar sx={{justifyContent:'space-between',alignItems:'center',display:'flex'}}>
        <div>
           
          
    <ul style={{display:'flex'}}>
    <li style={{marginLeft:'25%'}}>
           <img src="/src/assets/nBM.png" style={{width:"40px",height:"20px"}} alt="" sizes="" srcset="" />
        </li>
 {list.map((item)=>(
 <li style={{marginLeft:"20%"}}>
 {item}
</li>
 ))}
      
    </ul>

        
        </div>
    

        <div style={{marginRight:"10%",cursor:'pointer'}}>
      <SearchIcon/>
        </div>
    </Toolbar>
</AppBar>
: 



<AppBar sx={{backgroundColor:"#e7e3e3",color:"black"}} >
    <Toolbar sx={{justifyContent:'space-between',alignItems:'center',display:'flex'}}>
        <div>
   <MenuIcon onClick={handleOpenDrawer}/>
        </div>
        <div>
         
          
    <ul style={{display:'flex'}}>
    <li >
           <img src="/src/assets/nBM.png" style={{width:"40px",height:"20px"}} alt="" sizes="" srcset="" />
        </li>
 
      
    </ul>

        
        </div>
    

        <div style={{cursor:'pointer'}}>
      <SearchIcon/>
        </div>
    </Toolbar>
</AppBar>
}




<Drawer
      anchor="left"
      open={open}
      onClose={handleCloseDrawer}
    >
    <Box style={{width:"200px"}}>
      <ul>
      {list.map((item)=>(
 <li style={{marginTop:"50px"}}>
 {item}
</li>
 ))}
      </ul>
    </Box>
    </Drawer>


    </div>
  )
}

export default Header