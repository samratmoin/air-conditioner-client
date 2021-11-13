import {
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAllOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://blooming-reaches-66273.herokuapp.com/orders/all")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://blooming-reaches-66273.herokuapp.com/orders/all/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are You Sure, You Want to Delete?");
          const remaining = manageOrders.filter((order) => order._id !== id);
          setManageOrders(remaining);
        }
      });
  };
  return (
    <div>
      <Container>
        <Typography variant="h2">All Orders</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {manageOrders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.name}
                  </TableCell>
                  <TableCell align="right">{order.price}</TableCell>
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
    </div>
  );
};

export default ManageAllOrders;
