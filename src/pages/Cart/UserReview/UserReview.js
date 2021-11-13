import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://blooming-reaches-66273.herokuapp.com/reviews", data)
      .then((res) => {
        console.log(res);
        reset();
      });
  };
  return (
    <Container style={{ marginBottom: "100px" }}>
      <div className="add-package">
        <h2 className="text-center">Please Give Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          <input {...register("feedback")} placeholder="Feedback" />
          <input type="number" {...register("rating")} placeholder="Rating" />

          <input
            style={{
              backgroundColor: "#1565c0",
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
              border: "none",
            }}
            type="submit"
            value="Give Review"
          />
        </form>
      </div>
    </Container>
  );
};

export default UserReview;
