import React, { Suspense } from "react";
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import CircularProgress from '@mui/material/CircularProgress';
import "./home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../../components/header/Header";
import Slider from "../../components/Swiper/Slider";
import { Dropdown } from "../../components/UiElements/Dropdown/Dropdown";
import { Information } from "../../components/Information/Information";
import Footer from "../../components/Footer/Footer";
const Checkout = React.lazy(() => import("../../components/CheckoutItems/Checkout"));
const ProductList = React.lazy(()=>import("../../container/productlist/ProductList"))


function Home() {
  return (
    <div className="home">
      <Router>
        <Header/>
        <ResponsiveAppBar />
        <Dropdown/>
        {/* <Slider/> */}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<CircularProgress />}>
                <ProductList />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Checkout />
              </Suspense>   
            }
          />

        </Routes>
        {/* <Information/> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default Home;
