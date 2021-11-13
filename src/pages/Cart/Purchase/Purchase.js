import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./Purchase.css";

const Purchase = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkoutHandler = () => {
    history.push("/payment");
  };

  useEffect(() => {
    const url = `https://blooming-reaches-66273.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
  return (
    <Container style={{ marginBottom: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7}>
          <h2>My Orders</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myOrders.map((order) => (
                  <TableRow
                    key={order._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.name}
                    </TableCell>
                    <TableCell align="right">{order.price}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          <form
            className="shipping-form"
            onSubmit={handleSubmit(checkoutHandler)}
          >
            <input defaultValue={user.displayName} {...register("name")} />

            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />

            <input type="submit" value="Pay Now" />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Purchase;
