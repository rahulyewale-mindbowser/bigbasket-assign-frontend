import React, { Suspense } from "react";
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import CircularProgress from '@mui/material/CircularProgress';
import "./home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Checkout = React.lazy(() => import("../../components/CheckoutItems/Checkout"));
const ProductList = React.lazy(()=>import("../../container/productlist/ProductList"))


function Home() {
  return (
    <div className="home">
      <Router>
        <ResponsiveAppBar />
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
      </Router>
    </div>
  );
}

export default Home;
