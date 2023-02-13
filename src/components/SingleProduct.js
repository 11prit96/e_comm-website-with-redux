import React from 'react'
import { Link } from "react-router-dom";
import ActionButton from "../ui/ActionButton";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Grid} from "@mui/material";
import Box from "@mui/material/Box";

const SingleProduct = ({item}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                width: {md: 200, lg: 300},
                height: "400px",
                backgroundColor: "#f0f0f5",
              }}
            >
              <Typography variant="h6" textAlign={"center"} m={2}>
                {capitalizeFirstLetter(item.category)}
              </Typography>
              <Link
                to={`${item.id}`}
                style={{ textDecoration: "none", color: "#111" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src={item.image}
                    alt="item.title"
                    width="200px"
                    height="200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    height: "20px",
                    overflowY: "hidden",
                    textOverflow: "ellipsis",
                    m: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Chip label={`$${item.price}`} sx={{mb: 1}}/>
                <ActionButton prod = {item}/>
              </Box>
            </Card>
          </Grid>
  )
}

export default SingleProduct