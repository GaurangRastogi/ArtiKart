const Product = require("../model/Product");
const Seller = require("../model/Seller");
const SellerCredential = require("../model/SellerCredential");
const User = require("../model/User");
const UserCredential = require("../model/UserCredential");
const db = require("../database/database");
db();

exports.homeRoute = (req, res) => {
  res.send(data);
};
exports.signInUser = (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  UserCredential.find({ email: email1, password: password1 })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error Occurred while updating " });
    });
};
exports.signUpUser = async (req, res) => {
  const email = req.body.email;

  const present = await UserCredential.find({ email });

  if (present.length === 0) {
    const user = new UserCredential({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    user
      .save(user)
      .then((data) => {
        return res.send({ message: "success" });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating a create operation",
        });
      });
  } else {
    res.send({ message: "User Already Present" });
  }
};
exports.signInSeller = (req, res) => {
  const email1 = req.body.email;
  const password1 = req.body.password;
  SellerCredential.find({ email: email1, password: password1 })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error Occurred while updating " });
    });
};
exports.signUpSeller = (req, res) => {
  console.log("Sign Up Seller");
  const user = new SellerCredential({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

exports.landingPage = (req, res) => {

  const product = Product.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
