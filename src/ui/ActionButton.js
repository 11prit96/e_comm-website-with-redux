import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import {add} from "../features/cartSlice"

const ActionButton = ({ prod }) => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  
  return (
    <Fragment>
      {cart.some((p) => p.id === prod.id) ? (
        <Button variant="contained" disabled>
        Added to Cart
      </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            dispatch(add(prod))
          }}
        >
          Add to Cart
        </Button>
      )}
    </Fragment>
  );
};

export default ActionButton;
