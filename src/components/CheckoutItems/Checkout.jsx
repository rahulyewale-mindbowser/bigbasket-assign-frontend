import React, { useState } from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcartItems, removeItem, updateQuantity } from "../Slices/CartSlice";
import EmptyBasket from "../UiElements/Modal/EmptyBasket";

 const Checkout = () => {
  const navigate = useNavigate();
  const [open,setOpen]=useState(false);

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartItems);
  const { loading, cartItems, error } = cartList;

  useEffect(() => {
    dispatch(getcartItems());
  }, [dispatch]);

  const openhome = () => {
    navigate("../");
  };

  const openDialog =()=>{
    setOpen(true);
  }
  let total = 0;
  let delivery_charge = 30;
  return (
    <div style={{ marginTop: "6rem" }}>
      {loading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : cartItems && cartList.cartItems.length ? (
        <table>
          <tbody>
            <tr>
              <th>ITEM DESCRIPTION</th>
              <th>UNIT PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
            {cartItems.map((product, id) => {
              
                var quantity = product.quantity;
                total = total + product.price * product.quantity;
              
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>Rs {product.price}</td>
                  <td>
                    <div className="buttonGroup">
                      <button
                        onClick={() => {
                          if (quantity > 1) {
                            quantity = quantity - 1;
                            dispatch(
                              updateQuantity({
                                productId: product.id,
                                quantity,
                              })
                            );
                            dispatch(getcartItems());
                          }
                        }}
                      >
                        <RemoveCircleOutlineIcon fontSize="small" />
                      </button>
                      <button>{product.quantity}</button>

                      <button
                        onClick={() => {
                          quantity = quantity + 1;
                          dispatch(
                            updateQuantity({ productId: product.id, quantity })
                          );
                          dispatch(getcartItems());
                        }}
                      >
                        <AddCircleOutlineIcon fontSize="small" />
                      </button>
                    </div>
                  </td>
                  <td>Rs {quantity * product.price} </td>
                  <td>
                    <span className="removeicon">
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "#fff",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          dispatch(removeItem(product.id));
                          dispatch(getcartItems());
                        }}
                      >
                        <ClearIcon />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>YOUR BASKET IS EMPTY..!</div>
      )}
      <div className="totalcontainer">
        <div className="totalbuttons">
          <button onClick={openDialog} >EMPTY BASKET</button>
          <button onClick={openhome}>CONTINUE SHOPPING</button>
        </div>
        <div className="subtotal">
          <div>
            Subtotal
            <span>Rs {total}</span>
          </div>
          <div>
            Delivery Charge
            <span>
              Rs{total > 500 ||total===0 ? (delivery_charge = 0) : (delivery_charge = 30)}
            </span>
          </div>

          <hr />
          <h2>
            TOTAL
            <span>Rs {total + delivery_charge}</span>
          </h2>
          <hr />
          <button>
            <p>Checkout</p>
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
      <EmptyBasket open={open} setOpen={setOpen}/>
    </div>
  );
};
export default Checkout;