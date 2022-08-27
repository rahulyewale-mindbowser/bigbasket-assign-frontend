import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { container, Gridcontainer } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getproducts, setmyBasket } from "../../redux/Slices/ProductListSlice";
import Box from "@mui/material/Box";
import Slider from "../../components/Swiper/Slider";
import { Information } from "../../components/Information/Information";
import './productlist.css'
import { textAlign } from "@mui/system";


const ProductList = () => {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getproducts());
    dispatch(setmyBasket());
  }, [dispatch]);

  

  return (
   <>
   <Slider/>

   <Grid container spacing={2} style={{marginTop:10,alignContent:'center'}} >
    <Grid item xs={12} sm={6} lg={2} >
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_eggs-topstrip_m_250822_01.png" alt="eggs" />
    </Grid>
    <Grid item xs={12}sm={6} lg={2}>
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_neupass-topstrip_m_250822_02.png" alt="neupass" />
       </Grid>
       <Grid item xs={12} sm={6} lg={2}>
    
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250822_03.png" alt="ayurveda" />
    </Grid>
    <Grid item xs={12} sm={6} lg={2}>
    
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_buy-more-save-more-topstrip_m_250822_04.png" alt="buy more" />
    </Grid>

    <Grid item xs={12} sm={6} lg={2}>
    
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_dow-topstrip_m_250822_05.png" alt="deals of week" />
    </Grid>
    <Grid item xs={12} sm={6} lg={2}>
    <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_combo-storetopstrip_m_250822_06.png" alt="combo-store" />
       </Grid>
   </Grid>
   

   <div>
    <h4>Bank Offers</h4>
    <hr />
   <div className="bank-offers" >
    <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/7dd00b6f-f6ea-483d-933b-3f5c8dd1f694/t1_hp_aff_m_paytm_360_11082022.jpg" alt="paytm" />
    <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/7dd00b6f-f6ea-483d-933b-3f5c8dd1f694/t1_hp_aff_m_kotak_360_260822.jpg" alt="kotak" />
    <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/7dd00b6f-f6ea-483d-933b-3f5c8dd1f694/t1_hp_aff_m_amex_360_260822.jpg" alt="amex" />
    <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/7dd00b6f-f6ea-483d-933b-3f5c8dd1f694/t1_hp_m_aff_dbs_360_260822.jpg" alt="digibank" />
    
   </div>
   </div>
    <div style={container}>
      <h4>Products</h4>
      <Box
        position="fixed"
        sx={{
          minWidth: 80,
          textAlign: "left",
          paddingLeft: "2rem",
          zIndex: 10,
          top: "7rem",
          height:'auto'
        }}
      >
       
      </Box>
      {loading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : !loading && productList.products ? (
        <Grid container spacing={2} style={Gridcontainer}>
          {products.data.map((ele) => {
            return (
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <ProductCard key={"card_key" + ele} data={ele} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        "ProductList is Empty..!"
      )}
    </div>
    <Information/>
   </>
  );
};

export default ProductList;
