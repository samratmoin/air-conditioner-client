import { Paper, Typography } from "@mui/material";
import React from "react";
import Rating from "react-rating";
import "./ShowReviews.css";

const ShowReviews = (props) => {
  const { name, feedback, rating } = props.review;

  return (
    <div style={{ margin: "30px 0" }}>
      <Paper elevation={3} sx={{ py: 5, height: "250px" }}>
        <Typography
          sx={{ color: "info.main", fontWeight: 600, mb: 3 }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {feedback}
        </Typography>
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <Typography
          sx={{ color: "info.main", fontWeight: 600, mt: 3 }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {name}
        </Typography>
      </Paper>
    </div>
  );
};

export default ShowReviews;
