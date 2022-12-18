const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');

router.get("/",controller.homeRoute);
router.post("/signIn",controller.signInUser);
router.post('/signUp',controller.signUpUser);
router.post('/signInSeller',controller.signInSeller);
router.post('/signUpSeller',controller.signUpSeller);

router.get('/main',controller.landingPage);
// router.get('/categories',controller.categories);
router.get('/product/:id',controller.productData);

router.get('/search/:name',controller.searchData);

module.exports=router;