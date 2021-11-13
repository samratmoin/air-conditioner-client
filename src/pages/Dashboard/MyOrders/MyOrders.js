import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://blooming-reaches-66273.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const url = `https://blooming-reaches-66273.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are You Sure, You Want to Delete?");
          const remaining = myOrders.filter((order) => order._id !== id);
          setMyOrders(remaining);
        }
      });
  };
  return (
    <Container style={{ marginBottom: "100px" }}>
      <Typography variant="h2">Products: {myOrders.length}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrders?.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order?.name}
                </TableCell>
                <TableCell align="right">{order?.price}</TableCell>
                <TableCell align="right">{order?.status}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDelete(order._id)}>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyOrders;
