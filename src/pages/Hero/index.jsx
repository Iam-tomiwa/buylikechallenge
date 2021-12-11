import {Box, Grid, Typography, Button, Container} from "@mui/material";
import heroGif from "../../assets/images/heroImg3.svg";
import useStyles from "./styles";
import Nav from "../../components/Navbar/Nav";

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{overflowX: "hidden"}} className="app">
        <Nav />
        <main>
          <Box className={classes.hero}>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: {
                  xs: "calc(100vh - 97px)",
                  sm: "calc(80vh - 97px)",
                  lg: "calc(100vh - 97px)",
                },
              }}
              maxWidth="lg"
            >
              <Grid
                container
                spacing={3}
                justifyContent={{xs: "center", md: "space-between"}}
                alignItems="center"
              >
                <Grid item xs={12} md={5}>
                  <Typography color="white" variant="h1" gutterBottom>
                    Lorem ipsum <span className={classes.clrSec}>dolor</span>{" "}
                    sit amet consectetur.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                  <Button sx={{mt: 1}} color="secondary" variant="contained">
                    Shop Now
                  </Button>
                </Grid>
                <Grid item xs={12} md={7} className={classes.right}>
                  <img src={heroGif} alt="Shop" />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </main>
      </div>
    </>
  );
};

export default Hero;
