import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowAllProducts from "../ShowAllProducts/ShowAllProducts";

const AllProducts = () => {
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
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ShowAllProducts
              key={product.id}
              product={product}
            ></ShowAllProducts>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;
