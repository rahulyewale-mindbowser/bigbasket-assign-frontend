import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import "./ResponsiveAppbar.css";
import bb_logo from "../../assets/bb_logo.png";
import Mybasket from "../mybasket/Mybasket";
import { useNavigate } from "react-router-dom";

export default function ResponsiveAppBar() {
  const navigate= useNavigate()
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        position: "sticky",
        top: "20rem",
        bottom: 0,
        zIndex: 4,
        backgroundColor: "#FFF",
      }}
    >
      <AppBar sx={{ bgcolor: "white", color: "black" }} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
            <div>
              <img src={bb_logo} alt="icon" width="50%" height="50%" />
            </div>
          </IconButton>
          <Mybasket />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
