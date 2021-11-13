import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowProducts from "../ShowProducts/ShowProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://blooming-reaches-66273.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container style={{ marginBottom: "30px" }}>
      <Typography variant="h3" sx={{ my: 3 }}>
        The Best Air Conditioner
      </Typography>
      <Grid container spacing={4}>
        {products.slice(0, 6).map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ShowProducts key={product._id} product={product}></ShowProducts>
          </Grid>
        ))}
      </Grid>

      <Link style={{ textDecoration: "none" }} to="/allProducts">
        <Button
          sx={{ my: 2 }}
          style={{ textDecoration: "none" }}
          variant="contained"
        >
          Explore More...
        </Button>
      </Link>
    </Container>
  );
};

export default Products;
