import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {  error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
     
        <Fragment>
          <MetaData title="Omart" />

          <div className="banner">
            <p>OMART</p>
            {/*<h1>Discover a better way to shop</h1>*/}

            <a href="#container">
              <button>
               START SHOPPING
            </button>
            </a>
        <div className="Categories homeHeading">
          <div className="col-1">
            Kitchen
          </div>
          <div className="col-1">
            Bathroom
          </div><div className="col-1">
            Gifts
          </div><div className="col-1">
            Bathroom
          </div>
        </div>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      
    </Fragment>
  );
};

export default Home;
