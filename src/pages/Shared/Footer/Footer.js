import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1976d2", color: "white" }}>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={6} sx={{ my: 3 }}>
            <Box>
              <Typography variant="h2">Air Conditioner</Typography>
              <Typography variant="body2">Dhaka, Bangladesh</Typography>
              <Typography variant="body2">
                Helpline : 01722267058 (Available : 10:00am to 5:00pm)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: 3 }}>
            <Box>
              <Typography variant="h5">About us</Typography>
              <Typography variant="h5">Contact us</Typography>
              <Typography variant="h5">Terms of Service</Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ py: 5 }}>
          Copyright © 2021 Air Conditioner
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
