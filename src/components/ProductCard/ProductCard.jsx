
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Tooltip } from "@mui/material";
import basket from '../../assets/basket.svg';
import { typographyStyle,buttonStyle,basketStyle,delgrayStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getcartItems } from "../Slices/CartSlice";
import { useEffect } from "react";

export default function ProductCard({data}) {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartItems);
  useEffect(()=>{
    if(cartList.cartItems){

      cartList.cartItems.map(products=>{
        if(products.id ===data._id){
          setButtonText("ADDED")
        }
        
      })
    }
  },[])
  const [buttonText,setButtonText]=React.useState('ADD');

     const addcart = () => {
        const product ={
          id:data._id,
         name :data.name,
         price :data.price,
         image :data.image,
         quantity :1,
        }

        setLocalstorage(product);
        setButtonText("ADDED")
        dispatch(getcartItems());
      alert("Added to cart");

    };
    const setLocalstorage = (ele)=>{
        let product = JSON.parse(localStorage.getItem("products"))

        if(product){
            product.push(ele)
            localStorage.setItem("products", JSON.stringify(product))
        }else{
            localStorage.setItem("products", JSON.stringify([ele]))
        }
    }
 

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 250,Height:400 }}>
        <CardActionArea>
          <Tooltip title={data.name}>
            <img
              src={data.image}
              alt={data.name}
            />
          </Tooltip>
            <Typography gutterBottom variant="h4" component="div" style={typographyStyle} sx={{pl:2}}>
              {data.name}
            </Typography>
          <CardContent style={{textAlign:'left',background:'#F4F3F2'}} >
              <Typography style={typographyStyle}>
               <span><b>Rs {data.price}</b> </span> 
               <span>{"(For 1kg)"}</span>
               <p >
                <span 
                style={delgrayStyle}></span>
               <span >Standard Delivery: Today 9:00AM - 11:00AM</span></p>
              </Typography>


            { buttonText ==="ADDED"&&<Button
                size="small"
                style={buttonStyle}
                onClick={addcart}
                disabled
              >
                {buttonText}
                <span><img src={basket} alt="basket svg" style={basketStyle}/></span>
              </Button>}

              {buttonText==="ADD"&& <Button
                size="small"
                style={buttonStyle}
                onClick={addcart}
              >
                {buttonText}
                <span><img src={basket} alt="basket svg" style={basketStyle}/></span>
              </Button>}

           
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
