import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ShowAllProducts = (props) => {
  const { _id, name, img, description, price } = props.product;
  const { setCheckoutId } = useAuth();
  return (
    <div>
      <Card sx={{ height: "500px", padding: "20px 10px" }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            sx={{ color: "blue", marginTop: "20px", fontWeight: "bold" }}
            variant="h6"
            component="h6"
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions style={{ display: "inline-block", textAlign: "center" }}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/checkout"
          >
            <Button variant="contained" onClick={() => setCheckoutId(_id)}>
              Buy Now
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
};

export default ShowAllProducts;
