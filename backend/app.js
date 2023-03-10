const express = require("express");
const app = express();

//middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Content-Allow-Methods",
    "get, post, patch, delete, options"
  );
  next();
});

app.use("/api/users", (req, res, next) => {
  const users = [
    {
      id: 1237,
      username: "tonyTiger",
      password: "123yn",
      email: "tonytiger@gmail.com",
      age: 14,
    },
    {
      id: 1232,
      username: "bugsbunny",
      password: "123yu",
      email: "bugsy@gmail.com",
      age: 19,
    },
    {
      id: 1244,
      username: "terry",
      password: "123",
      email: "terry@gmail.com",
      age: 12,
    },
    {
      id: 1143,
      username: "terrier",
      password: "123",
      email: "terrier@gmail.com",
      age: 15,
    },
  ];
  res.status(200).json({
    message: "Users fetched succesfully",
    users: users,
  });
});

module.exports = app;
