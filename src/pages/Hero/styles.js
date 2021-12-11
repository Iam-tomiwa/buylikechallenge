import {makeStyles} from "@mui/styles";
const useStyles = makeStyles(theme => ({
  hero: {
    overflow: "hidden",
    margin: "auto",
    padding: theme.spacing(1),
    width: "95% !important",
    borderRadius: 15,
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
  clrSec: {
    color: theme.palette.secondary.main,
  },
  right: {
    // width: "100%",
    "& img": {
      width: "100%",
      maxHeight: 550,
      minHeight: 300,
      objectFit: "cover",
    },
  },
}));

export default useStyles;
