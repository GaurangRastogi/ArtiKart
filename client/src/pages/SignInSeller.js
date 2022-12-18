import React from "react";
import { useState } from "react";
import HomeImage from "../images/homeImage.avif";
import {
  Stack,
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Modal,
} from "@mui/material";
const SignInSeller = ({homepage,signUpSeller}) => {
  const [open,setOpen]=useState(true);
  const onclose =()=>{
    console.log("close")
  }

  const onclickButton = () =>{
      console.log("buton clicked");
  }

  const onclickLink = (params) =>{
    if(params==="home"){
        setOpen(false);
        homepage();
    }
    else{
      setOpen(false);
      signUpSeller();
    }

}

  return (
    <Modal open={open} onClose={onclose}>
      <Grid
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
          <Grid
            alingitems="center"
            justifyContent="center"
            sx={{
              width: "45%",
              backgroundImage: `url(${HomeImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Stack
            direction="column"
            alingitems="center"
            justifyContent="center"
            sx={{ width: "55%", backgroundColor: "#FFD8A9" }}
          >
            <Grid>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  fontSize: "2rem",
                  letterSpacing: ".1rem",
                  color: "#D36B00",
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: "Silkscreen,cursive",
                  lineHeight: "1",
                }}
              >
                Sell Your Products
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mb: 5,
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  letterSpacing: ".1rem",
                  color: "#D36B00",
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: "Silkscreen,cursive",
                }}
              >
                Show Your Skills To World
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  width: "100%",
                  fontWeight: 700,
                  fontSize: 25,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Login As Artisans
                <br />
                <TextField
                  variant="standard"
                  size="small"
                  label="E-mail"
                  color="primary"
                  type="email"
                  sx={{
                    mt: 2,
                    mb: 2,
                    textAlign: "center",
                  }}
                  id="email"
                />
                <br />
                <TextField
                  variant="standard"
                  size="small"
                  label="Password"
                  color="primary"
                  type="password"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                  id="password"
                />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onclickButton}
                >
                  Login 
                </Button>
              </Typography>
            </Grid>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mt: 5,
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: ".1rem",
                color: "#D36B00",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Don't have an account?
              <Link
                component="button"
                variant="body2"
                underline="hover"
                onClick={()=>onclickLink("signUpSeller")}
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: ".1rem",
                  fontFamily: "poppins",
                }}
              >
                SignUp
              </Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mt: 5,
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: ".1rem",
                color: "#D36B00",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Go to Home Page!
              <Link
                component="button"
                variant="body2"
                underline="hover"
                onClick={()=>onclickLink("home")}
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: ".1rem",
                  fontFamily: "poppins",
                }}
              >
                Home Page
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Modal>
  );
};

export default SignInSeller;
