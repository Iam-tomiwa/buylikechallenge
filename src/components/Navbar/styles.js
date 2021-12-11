import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
  navBar: {
    background: "transparent",
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    color: "#000 !important",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    position: "absolute",
    top: "85%",
    left: 0,
    borderRadius: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    clipPath: "inset(0 0 100% 0)",
    transition: "0.5s clip-path ease",
    padding: 0,
    background: theme.palette.common.white,
    [theme.breakpoints.up("sm")]: {
      background: "transparent",
      padding: "initial",
      position: "static",
      flexDirection: "row",
      clipPath: "none",
    },
    "& li": {
      margin: "0.5rem",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        margin: "0 0.5rem",
      },
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "0",
      [theme.breakpoints.up("sm")]: {
        padding: "0 1rem",
      },
    },
  },
  showNav: {
    clipPath: "inset(0)",
  },
  a: {
    margin: "0 0.5rem",
  },
}));

export default useStyles;
