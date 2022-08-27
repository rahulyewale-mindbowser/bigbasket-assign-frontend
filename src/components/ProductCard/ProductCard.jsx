import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Tooltip } from "@mui/material";
import basket from "../../assets/basket.svg";
import Badge from '@mui/material/Badge';
import {
  typographyStyle,
  buttonStyle,
  basketStyle,
  delgrayStyle,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getcartItems } from "../../redux/Slices/CartSlice";
import { useEffect } from "react";
import { useState } from "react";

export default function ProductCard({ data }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartItems);
  useEffect(() => {
    if (cartList.cartItems) {
      cartList.cartItems.map((products) => {
        if (products.id === data._id) {
          setButtonText("ADDED");
        }
      });
    }
  }, []);
  const [buttonText, setButtonText] = React.useState("ADD");

  const addcart = () => {
    const product = {
      id: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
      quantity: quantity,
    };

    setLocalstorage(product);
    setButtonText("ADDED");
    dispatch(getcartItems());
    alert("Added to cart");
  };
  const setLocalstorage = (ele) => {
    let product = JSON.parse(localStorage.getItem("products"));

    if (product) {
      product.push(ele);
      localStorage.setItem("products", JSON.stringify(product));
    } else {
      localStorage.setItem("products", JSON.stringify([ele]));
    }
  };

  return (
    <div className="main" style={{ border: "1px ridge #6b68685e", padding: 0 }}>
      <Card sx={{ maxWidth: 300, Height: 400 }} elevation={0}>
        <CardActionArea>
      <div style={{position:'absolute',top:'5px',left:'5%',width:'90%',height:'1.5rem',backgroundColor:'white',color:'#ba5253',padding:'0 2px',
    textAlign: 'right',
    backgroundColor:'#FFF',boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',font: '10px ProximaNovaA-Semibold',
    lineHeight:'22px'  }}>GET 38% OFF </div>
          <Tooltip title={data.name}>
            <img src={data.image} alt={data.name} style={{marginTop:'2rem'}}/>
          </Tooltip>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={typographyStyle}
            sx={{ pl: 2 }}
          >
            {data.name}
          </Typography>
          <CardContent style={{ textAlign: "left", background: "#F4F3F2" }}>
            <Typography style={typographyStyle}>
              <span>
                <b>Rs {data.price}</b>{" "}
              </span>
              <span>{"(For 1kg)"}</span>
              <p>
                <span style={delgrayStyle}></span>
                <span>Standard Delivery: Today 9:00AM - 11:00AM</span>
              </p>
            </Typography>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ display: "flex" }}>
                <button style={{
                   borderLeft: "1px ridge #6b68685e",
                   borderTop: "1px ridge #6b68685e",
                   borderRight: "none",
                   borderBottom: "1px ridge #6b68685e",
                   outline:'none'
                }}>Qty</button>
                <input
                  type="text"
                  value={quantity}
                  style={{
                    width: "2.5rem",
                    borderLeft: "none",
                    borderTop: "1px ridge #6b68685e",
                    borderRight: "1px ridge #6b68685e",
                    borderBottom: "1px ridge #6b68685e",
                    outline:'none',
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </span>
              {buttonText === "ADDED" && (
                <Button
                  size="small"
                  style={buttonStyle}
                  onClick={addcart}
                  disabled
                >
                  {buttonText}
                  <span>
                    <img src={basket} alt="basket svg" style={basketStyle} />
                  </span>
                </Button>
              )}

              {buttonText === "ADD" && (
                <Button size="small" style={buttonStyle} onClick={addcart}>
                  {buttonText}
                  <span>
                    <img src={basket} alt="basket svg" style={basketStyle} />
                  </span>
                </Button>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
