import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { calculate_total, selectCart, selectGrandTotal } from "./features/cartSlice"
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const grandTotal = useSelector(selectGrandTotal)
  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price,0);

    dispatch(calculate_total(total));

    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout total={grandTotal}/>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
