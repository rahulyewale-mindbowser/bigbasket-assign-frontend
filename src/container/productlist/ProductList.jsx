import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { container, Gridcontainer } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getproducts, setmyBasket } from "../../components/Slices/ProductListSlice";
import { MenuItem, FormControl, Select } from "@mui/material";
import Box from "@mui/material/Box";

const ProductList = () => {
  const category = localStorage.getItem('category')

  const [pcategory, setpcategory] = React.useState(category);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getproducts());
    dispatch(setmyBasket());
  }, [dispatch]);

  const handleChange = (event) => {
    setpcategory(event.target.value);
    localStorage.setItem("category", event.target.value);
    dispatch(getproducts());
  };

  return (
    <div style={container}>
      <Box
        position="fixed"
        sx={{
          minWidth: 120,
          textAlign: "left",
          paddingLeft: "2rem",
          zIndex: 10,
          top: "3rem",
        }}
      >
        <FormControl variant="standard">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={pcategory}
            label="shop"
            onChange={handleChange}
          >
            <MenuItem value="all">SHOP BY CATEGORY</MenuItem>
            <MenuItem value={"fruits"}>Fruits</MenuItem>
            <MenuItem value={"herbs"}>Herbs</MenuItem>
            <MenuItem value={"vegetables"}>Vegetables</MenuItem>
          </Select>
        </FormControl>
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
  );
};

export default ProductList;
