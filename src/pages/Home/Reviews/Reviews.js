import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowReviews from "../ShowReviews/ShowReviews";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://blooming-reaches-66273.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Typography variant="h3" sx={{ my: 3 }}>
        Users Reviews
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4}>
            <ShowReviews key={review.id} review={review}></ShowReviews>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
