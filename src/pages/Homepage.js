import {useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import SingleProduct from "../components/SingleProduct";
import HomeLoading from "../components/HomeLoading";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectProducts } from "../features/cartSlice";
import { getProducts } from "../features/cartSlice";

function Homepage() {
  const products = useSelector(selectProducts)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  // console.log('products', products)
  // console.log(isLoading)

  useEffect(() => {
    // console.log("useEffect")
    dispatch(getProducts())
  }, [dispatch])

  const HomeItems = (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {products?.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );

  const LoadItems = (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {[...Array(20)].map((i) => (
          <HomeLoading key={i} item={i} />
        ))}
      </Grid>
    </Box>
  );
  return isLoading ? (
    LoadItems
  ) : (
    HomeItems
  );
}

export default Homepage;
