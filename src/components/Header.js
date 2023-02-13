import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = (props) => {
  const cart = useSelector(selectCart)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          eComm Website
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem sx={{ my: 2 }}>
          <ListItemIcon>
            <SearchIcon sx={{ ml: 2 }} />
            <Typography sx={{ ml: 6 }}>Search</Typography>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ my: 2 }}>
          <ListItemIcon>
            <ShoppingCartSharpIcon sx={{ ml: 2 }} />
            <Typography sx={{ ml: 6 }}>Your Cart</Typography>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ my: 2 }}>
          <ListItemIcon>
            <FavoriteBorderSharpIcon sx={{ ml: 2 }} />
            <Typography sx={{ ml: 6 }}>Favorite</Typography>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#fff", width: 300 }}>
              eComm Website
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                size="small" 
              />
              <IconButton sx={{ width: 50, marginRight: 3 }}>
              <SearchIcon />
            </IconButton>
            <IconButton  sx={{ width: 50, marginInline: 3 }}>
              <FavoriteBorderSharpIcon />
            </IconButton>
            <IconButton aria-label="cart" sx={{ width: 50, marginInline: 3 }}>
              <StyledBadge badgeContent={cart.length} color="secondary">
                <NavLink to="/cart" style={{color: "inherit"}}>
                  <ShoppingCartSharpIcon />
                </NavLink>
              </StyledBadge>
            </IconButton>
            <IconButton  sx={{ width: 50, marginInline: 3  }}>
              <AccountCircleSharpIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default Header;
