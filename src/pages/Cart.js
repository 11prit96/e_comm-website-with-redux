import {
  Box,
  Button,
  ButtonGroup,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCart, selectGrandTotal } from "../features/cartSlice";
import {add, remove} from "../features/cartSlice"

const Cart = () => {
  const cart = useSelector(selectCart)
  const grandTotal = useSelector(selectGrandTotal)
  
  return (
    <Box sx={{ margin: 20 }}>
      <Typography variant="h3" component="div" textAlign="center">
        Your Cart
      </Typography>

      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            add={add}
            remove={remove}
          />
        );
      })}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <Typography variant="h5">Total:</Typography>
        <Typography variant="h5">{grandTotal.toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <NavLink to="/checkout" style={{textDecoration: "none"}}>
          <Button variant="contained" color="secondary">
            Proceed to Checkout
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Cart;

export const CartItem = ({ item}) => {
  const itemTotalPrice = item.quantity * item.price;
  const dispatch = useDispatch()
  console.log(item.id)

  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <List sx={{ width: 500 }}>{item.title}</List>
        <List sx={{ width: 100 }}>(x{item.quantity})</List>
        <ButtonGroup size="small">
          <Button onClick={() => dispatch(add(item))}>+</Button>
          <Button onClick={() => dispatch(remove(item))}>-</Button>
        </ButtonGroup>
        <List sx={{ width: 80 }}>$ {itemTotalPrice}</List>
      </Paper>
    </Box>
  );
};
