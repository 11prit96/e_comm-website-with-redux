import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Card, Grid } from "@mui/material";
import { Box } from "@mui/material";

const HomeLoading = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={3} key={item}>
      <Card
        sx={{
          width: { md: 200, lg: 300 },
          height: "400px",
          backgroundColor: "#f0f0f5",
        }}
      >
        <Stack spacing={1}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Skeleton variant="text" sx={{ fontSize: "3rem", width: 150, my: 1}} />
          <Skeleton variant="rounded" width="200px" height="200px" />
          <Skeleton variant="text" sx={{ fontSize: "2rem", width: 200, my: 0.5}} />
          <Skeleton variant="rounded" width="60px" height="30px" sx={{borderRadius: "40%"}} />
          <Skeleton variant="text" sx={{ fontSize: "3rem", width: 150, marginBottom: 1}} />
          </Box>
        </Stack>
      </Card>
    </Grid>
  );
};

export default HomeLoading;
