import { useState, useEffect } from "react";
import Rodal from "rodal";
import { useForm } from "react-hook-form";
import axios from "axios";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "rodal/lib/rodal.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  useEffect(() => {
    getProduct();
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  function getProduct() {
    axios({
      url: "http://localhost:3000/product",
      method: "get",
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {});
  }
  const mySubmit = (data) => {
    let file = data.file[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let result = reader.result;
    };
  };
  return (
    <div className="Main">
      <button onClick={() => setModalVisible(true)} className="btn btn-info">
        Add Product
      </button>
      {product &&
        product.map((item, index) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.file}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price : {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Shopping card</Button>
              </CardActions>
            </Card>
          );
        })}
      <Rodal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <form onSubmit={handleSubmit(mySubmit)}>
          <input {...register("file")} type="file" />
          <input
            {...register("title")}
            type="text"
            placeholder="Product title..."
            className="form-control my-3"
          />
          <input
            {...register("price")}
            type="text"
            placeholder="Product price..."
            className="form-control my-3"
          />
          <button className="btn btn-success float-end">Save</button>
        </form>
      </Rodal>
    </div>
  );
};

export default Main;
