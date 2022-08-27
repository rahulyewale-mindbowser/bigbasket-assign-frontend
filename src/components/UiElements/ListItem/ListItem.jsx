import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./listItem.css";
import { useDispatch } from "react-redux";
import {
  getcartItems,
  removeItem,
  updateQuantity,
} from "../../../redux/Slices/CartSlice";
import { getproducts } from "../../../redux/Slices/ProductListSlice";
const ListItem = ({ product }) => {
  const dispatch = useDispatch();

  let quantity = product.quantity;

  const productId = product.id;

  return (
    <li style={{ margin: 3 }}>
      <div className="cartItem">
        <div className="prodimage">
          <img
            src={product.image}
            alt="productimage"
            width="40%"
            height="40%"
          />
        </div>
        <div className="prodDesc">
          <div>{product.name}</div>
          <div>{`${product.quantity}*${product.price}`}</div>
        </div>
        <div>
          <div className="buttonGroup">
            <button
              onClick={() => {
                if (quantity > 1) {
                  quantity = quantity - 1;
                }
                dispatch(updateQuantity({ productId, quantity }));
                dispatch(getcartItems());
              }}
            >
              <RemoveCircleOutlineIcon fontSize="small" />
            </button>
            <button>{product.quantity}</button>

            <button
              onClick={() => {
                quantity = quantity + 1;
                dispatch(updateQuantity({ productId, quantity }));
                dispatch(getcartItems());
              }}
            >
              <AddCircleOutlineIcon fontSize="small" />
            </button>
          </div>
        </div>
        <div>
          RS
          <span> {product.price}</span>
        </div>
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(removeItem(product.id));
              dispatch(getcartItems());
              dispatch(getproducts());
            }}
          >
            <ClearIcon />
          </button>
        </div>
      </div>
    </li>
  );
};
export default ListItem;
