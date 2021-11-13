import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const CheckOut = () => {
  const history = useHistory();
  const [checkOut, setCheckOut] = useState({});
  const { checkoutId, user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${checkoutId}`)
      .then((res) => res.json())
      .then((data) => setCheckOut(data))
      .catch((err) => {
        console.log(err);
      });
  }, [checkoutId]);

  const checkoutHandler = () => {
    const orderData = {
      email: user.email,
      name: checkOut.name,
      price: checkOut.price,
      status: "pending",
    };
    fetch("https://blooming-reaches-66273.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => {
        res.data && history.push("/purchase");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container style={{ marginBottom: "100px" }}>
      <h2>CheckOut</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Image</TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <img alt="air conditioner" src={checkOut.img} width="100px" />
              </TableCell>
              <TableCell align="center">{checkOut.name}</TableCell>
              <TableCell align="right">{checkOut.price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: "right" }}>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/purchase"
        >
          <Button
            variant="contained"
            onClick={checkoutHandler}
            style={{
              marginTop: "20px",
              border: "none",
            }}
          >
            Buy Now
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
};

export default CheckOut;
