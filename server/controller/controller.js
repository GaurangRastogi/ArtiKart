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


exports.searchData = (req,res) =>{

  const data=req.params.name;
  const product = Product.find({name:data})
  .then((data)=>{
      return res.send(data);
  }).catch((err)=>{
    res.status(500).send({message:err.message});
  })

}


exports.productData = (req,res) =>{
  const id=req.params.id;
  const product = Product.find({_id:id})
  .then((data)=>{
      return res.send(data);
  }).catch((err)=>{
    res.status(500).send({message:err.message});
  })
}


exports.cartData = async (req,res) =>{
  const userId=req.params.userId;
  const cart=await User.find({userId:userId})
  .then((cartData)=>{
      let arr=[];
      cartData.forEach((data)=>{
        arr.push(Product.findOne({_id:data.cart}))
      })
      return Promise.all(arr);  
  })
  .then((arr)=>{
    res.send(arr);
  })
  .catch((err)=>{
    res.status(400).send({message:err.message});
  })
}