const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');


//Home page and authentication
router.get("/",controller.homeRoute);
router.post("/signIn",controller.signInUser);
router.post('/signUp',controller.signUpUser);
router.post('/signInSeller',controller.signInSeller);
router.post('/signUpSeller',controller.signUpSeller);


//Get Requests
router.get('/main',controller.landingPage);
// router.get('/categories',controller.categories);
router.get('/product/:id',controller.productData);
router.get('/search/:name',controller.searchData);
router.get('/cart/:userId', controller.cartData);
//add to cart and remove from cart

//Posts Requests & Delete Requests
// router.post('cart/product/:id',controller.addToCart);
// router.delete('/cart/product/:id',controller.removeFromCart);

module.exports=router;