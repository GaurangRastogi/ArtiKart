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
router.get('/cart/:userId/:productId',controller.checkStatus);
//add to cart and remove from cart

//Posts Requests & Delete Requests
router.post('/cart',controller.addToCart);
router.delete('/cart',controller.removeFromCart);
router.patch('/cart',controller.postFeedBack);



// API requests for Seller

//
// /My Products
// /Add products
// /Delete Product
// /Update Product -> Can update quantity
router.get('/myproducts/:sellerId',controller.myProducts);
router.get('/product/:productId',controller.myProduct);
router.get('/search/:sellerId/:name',controller.searchMyProduct);
router.post('/addProduct',controller.addProduct);
// router.delete('/product',controller.deleteProduct);
// router.patch('/updateProduct',controller.updateProduct);
// 

module.exports=router;