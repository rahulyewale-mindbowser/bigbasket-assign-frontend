import React, { useEffect } from "react";
import basket from "../../assets/basket.svg";
import { useMediaQuery, useTheme, IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./mybasket.css";
import { useDispatch, useSelector } from "react-redux";
import { getcartItems } from "../../redux/Slices/CartSlice";
import CartModal from "../UiElements/Modal/CartModal";
import { useState } from "react";
const Mybasket = () => {
  const[open,setOpen]=useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

 
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartItems);
  let itemCount = 0;
  if (cartList.cartItems) {
    itemCount = cartList.cartItems.length;
  }
  useEffect(() => {
    dispatch(getcartItems());
  }, [dispatch]);

  const opencartlist = () => {
    setOpen(true);
  };

  const callback =(arg)=>{
    setOpen(arg)
  }

  return (
    <>
    <button className="mybasket" onClick={opencartlist}>
      {isMobile ? (
        <IconButton aria-label="cart">
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      ) : (
        <img src={basket} alt="basket svg" className="basketimg" />
      )}
      {isMobile ? (
        ""
      ) : (
        <span
          style={{
            fontSize: "13px",
            fontFamily: "roximaNovaA-Semibold",
            fontWeight: "bold",
          }}
        >
          <div>My Basket</div>
          <div>{itemCount} Items</div>
        </span>
      )}
    </button>
      {open===true && <CartModal dopen={open} callback={callback}/>}
    </>
  );
};

export default Mybasket;
