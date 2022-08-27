import React from 'react'
import { useDispatch } from 'react-redux';
import { getproducts } from '../../../redux/Slices/ProductListSlice';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import './dropdown.css'


export const Dropdown = () => {

    const category = localStorage.getItem('category')
    const [pcategory, setpcategory] = React.useState(category);
    const dispatch =useDispatch();

    const handleChange = (event) => {
        setpcategory(event.target.value);
        localStorage.setItem("category", event.target.value);
        dispatch(getproducts());
      };
    
  return (
    <div className='dropdown-main'> 
    <select className='dropdown'
    value={pcategory}
    onChange={handleChange}
     >
      <option value="all">SHOP BY CATEGORY</option>
      <option value={"fruits"}>Fruits</option>
      <option value={"herbs"}>Herbs</option>
      <option value={"vegetables"}>Vegetables</option>
    </select>
  <div className='offers'> <LocalOfferIcon fontSize='small' /> OFFERS</div>
  </div>
  )
}
