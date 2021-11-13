import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://blooming-reaches-66273.herokuapp.com/products", data)
      .then((res) => {
        console.log(res);
        reset();
      });
  };
  return (
    <Container>
      <div className="add-package">
        <h2 className="text-center">Please Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          <input {...register("description")} placeholder="Description" />
          <input type="number" {...register("price")} placeholder="Price" />
          <input {...register("img")} placeholder="Image url" />
          <input
            style={{
              backgroundColor: "#1565c0",
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
              border: "none",
            }}
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
