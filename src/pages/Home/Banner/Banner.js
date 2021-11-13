import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import airconditioner from "../../../images/airconditioner.jpg";

const Banner = () => {
  const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400,
  };
  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h2">
              Get Cool and Comfortable. Get Some Air.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Max Cooling. Low Noise. Sit back (or jump up) and enjoy the
              benefits of a smart, energy-efficient air conditioner.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "100%" }} src={airconditioner} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
