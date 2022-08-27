import React from "react";
import { useNavigate } from "react-router-dom";
import "./cartlist.css";
import { useEffect } from "react";
import { getcartItems } from "../../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../UiElements/ListItem/ListItem";

 const CartList = ({setModal}) => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartItems);
  const { loading, cartItems, error } = cartList;
  useEffect(() => {
    dispatch(getcartItems());
  },[dispatch]);
  let subtotal =0;

  const opencheckout =()=>{
    navigate('../checkout')
    setModal(false)
  }
  const openhome=()=>{
    navigate('../')
    setModal(false);
  }
  return (
    <div className="cartlist">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : cartItems && cartList.cartItems.length? (
        <ul className="cartul">
          {cartItems.map((product, id) => {
            subtotal=parseInt(subtotal)+parseInt(product.price *product.quantity)
            return(

              <ListItem key={id} product={product}/>
            )
          }
          )
          }
        </ul>
       
      ) : (
        <div>
          <h2>Cart is Empty!</h2>
        <button className="backbutton" onClick={openhome}>CONTINUE SHOPPING</button>
        </div>
      )}
      <ul className="cartcheckoutlist">
        <li>
          <div className="cartCheckout">
            <div>
              <p>**Actual Delivery Charges computed at checkout </p>
            </div>
            <div className="subTotal">
             <div className="subtotal_sub">
             <p>
                SubTotal
                <span>RS {subtotal}</span>
              </p>
              <p>
                Delivery Charge
                <span>{subtotal>500 || subtotal===0?"**":30}</span>
              </p>
             </div>
              <div >
                <button onClick={opencheckout}>View Basket & Checkout</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      
    </div>
  );
};

export default CartList;