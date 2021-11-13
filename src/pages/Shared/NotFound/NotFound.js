import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography variant="h5">Page not found</Typography>
      <Typography variant="body2">Don't ask me about this page.</Typography>
    </Container>
  );
};

export default NotFound;
