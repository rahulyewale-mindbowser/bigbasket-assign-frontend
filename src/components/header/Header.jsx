import React from "react";
import './header.css'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Header = () => {
  return (
    <div className="header-main">
     <span style={{display:'flex',justifyContent:'center'}}> <PhoneIcon fontSize="small"/>1860 123 1000</span>
      <p style={{display:'flex',justifyContent:'center'}}>
      <LocationOnIcon fontSize="small"/>
        <select name="" id="" className="hdropdown">
          <option value=""> 56004, Banglore</option>
        </select>
      </p>
      <p>
        <select name="" id="" className="hdropdown">
          <option value="">Bigbasketeer</option>
        </select>
      </p>
     </div>
  
  );
};
