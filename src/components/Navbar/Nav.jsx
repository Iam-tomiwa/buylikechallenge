import {useState} from "react";
import {Link} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const [displayNav, setdisplayNav] = useState(false);
  const showNav = () => setdisplayNav(!displayNav);
  return (
    <AppBar className={classes.navBar} position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5">Shoply</Typography>
          <Box sx={{flexGrow: "1"}} />
          <Box>
            <ul
              className={`${classes.navLinks} ${
                displayNav ? classes.showNav : ""
              }`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </Box>
          <Box sx={{flexGrow: "1"}} />

          <Box>
            <IconButton color="secondary">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="secondary">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton
              color="secondary"
              sx={{
                display: {
                  sm: "flex",
                  md: "none",
                },
              }}
              onClick={showNav}
            >
              {displayNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
