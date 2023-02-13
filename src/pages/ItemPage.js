import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import ActionButton from "../ui/ActionButton";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function ItemPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const stringID = id.toString();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${stringID}`
      );
      const item = await response.json();
      setItem(item);
      setIsLoading(false);
    }

    fetchItem();
  }, [stringID]);

  const itemContent = (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          margin: { sm: 20, md: 20 },
          marginTop: 7,
          width: 600,
          backgroundColor: "#EBEBF0",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", m: 5 }}
        >
          {item.title}
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt="store item"
            sx={{
              objectFit: "cover",
              width: { xs: 150, sm: 200, md: 300, lg: 350 },
              height: { xs: 150, sm: 200, md: 300, lg: 400 },
              borderRadius: 5,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Alert severity="info" sx={{ textAlign: "center", my: 3 }}>
            {item.description}
          </Alert>
          <ActionButton prod={item} />
        </Box>
      </Card>
    </Box>
  );

  const itemSkeleton = (
    <Stack spacing={1}>
        <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            margin: { sm: 20, md: 20 },
            marginTop: 7,
            width: 600,
            backgroundColor: "#EBEBF0",
          }}
        ><Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
          <Skeleton variant="text" sx={{ fontSize: "3rem", width: 250, marginY: 4 }} />
          <Skeleton variant="rounded" sx={{
              width: { xs: 150, sm: 200, md: 300, lg: 350 },
              height: { xs: 150, sm: 200, md: 300, lg: 400 },
              borderRadius: 5
            }} />
            <Skeleton variant="rounded" sx={{ fontSize: "6rem", width: "100%", my: 3 }} />
            <Skeleton variant="text" sx={{ fontSize: "3.5rem", width: 150, marginBottom: 1}} />
            </Box>
        </Card>
        </Box>
      
    </Stack>
  );

  return isLoading ? itemSkeleton : itemContent;
}
