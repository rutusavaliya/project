const express = require('express');
const CartRoutes = express.Router();
const {userverifyToken} = require('../../helpers/user.verifytoken')

const { addNewCart, getAllCart, getCart, updateCart, deleteCart } = require('../../controller/user/cart.controller');

CartRoutes.post('/add-new-cart' , userverifyToken,   addNewCart);
CartRoutes.get('/get-all-cart' , userverifyToken  ,getAllCart );
CartRoutes.get('/getcart' , userverifyToken,  getCart);
CartRoutes.put('/updtecart' , userverifyToken, updateCart);
CartRoutes.delete('/deletecart' , userverifyToken , deleteCart);




module.exports = CartRoutes;