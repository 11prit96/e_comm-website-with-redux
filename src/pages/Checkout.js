import { Card, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";

const Checkout = (props) => {
    const [payment, setPayment] = React.useState('');

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const shippingCharge = 4.99;
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <Card sx={{ margin: 20, width: 500, height: 400, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" textAlign="center" marginY="1rem">
            Contact Details
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Name"
          size="small"
          sx={{ margin: 2 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          size="small"
          sx={{ margin: 2 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Number"
          size="small"
          sx={{ margin: 2 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          size="large"
          sx={{ margin: 2 }}
        />
      </Card>
      <Card sx={{ margin: 20, width: 500, height: 400, display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" textAlign="center" marginY="1rem">
            Payment
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: 3}}>
        <Typography>
            Subtotal
        </Typography>
        <Typography>
            $ {(props.total).toFixed(2)}
        </Typography>
        </Box>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: 3}}>
        <Typography>
            Shipping
        </Typography>
        <Typography>
            $ {shippingCharge}
        </Typography>
        </Box>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: 3}}>
        <Typography>
            Total
        </Typography>
        <Typography>
            $ {(props.total + shippingCharge).toFixed(2)}
        </Typography>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={payment}
          label="Payment Method"
          onChange={handleChange}
        >
          <MenuItem >Credit Card</MenuItem>
          <MenuItem >DebitCard</MenuItem>
          <MenuItem >Cash on Delivery</MenuItem>
        </Select>
      </FormControl>
      </Card>
    </Box>
  );
};

export default Checkout;
