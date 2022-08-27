import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import bb_logo from "../../assets/bb_logo.png";
import Mybasket from "../mybasket/Mybasket";
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import './responsiveAppbar.css'
import { useState } from "react";
export default function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate= useNavigate()

  const [navbar, setNavbar] = React.useState(false);
  const [logo,setlogo] =useState(false);

  const changeShadow =()=>{
    if(window.scrollY>=80){
      setNavbar(true)
      setlogo(true);
    }else{
      setNavbar(false);
      setlogo(false);
    }
  }
  window.addEventListener('scroll', changeShadow);
  return (
    <>
   {isMobile?<Box 
      sx={{ flexGrow: 1,position:'sticky',top:0 ,zIndex:5 }} className={navbar?'active':''}
    >
      <AppBar sx={{backgroundColor:'#FFF',position:'sticky',
      }} elevation={0} >
        <Toolbar  sx={{ color: "black",justifyContent: "space-between",maxHeight:'0rem' }} >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{
              navigate('./')
            }}
          >
           {logo?<div className="nav-logo"><img src="https://www.bbassets.com/static/v2580/custPage/build/content/img/bb-icon.png" alt="" height='30px'  onClick={()=>{
              navigate('./')
            }}/> <select name="shop"  id="nav-dropdown"><option value="shop">SHOP</option></select></div>: <div>
              <img src={bb_logo} alt="icon" height="40px"  onClick={()=>{
              navigate('./')
            }}/>
            </div>}
          </IconButton>
          <Mybasket />
        </Toolbar>
      </AppBar>
     </Box>:
   <Box elevation={0}
      sx={{ flexGrow: 1,position:'sticky',top:0 ,zIndex:5 }} className={navbar?'active':''}
    >
      <AppBar sx={{backgroundColor:'#FFF',position:'sticky',padding: '0 3.5rem',
     
      }} elevation={0}  >
        <Toolbar  sx={{ color: "black",justifyContent: "space-between" }} >
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
            onClick={()=>{
              navigate('./')
            }}
          > */}
             {logo?<div className="nav-logo"><img src="https://www.bbassets.com/static/v2580/custPage/build/content/img/bb-icon.png" alt="" height='30px'  onClick={()=>{
              navigate('./')
            }}/> <select name="shop"  id="nav-dropdown"><option value="shop">SHOP</option></select></div>: <div>
              <img src={bb_logo} alt="icon" height="40px"  onClick={()=>{
              navigate('./')
            }}/>
            </div>}
          {/* </IconButton> */}
          <Mybasket />
        </Toolbar>
      </AppBar>
     </Box>}
     </>
  );
}
