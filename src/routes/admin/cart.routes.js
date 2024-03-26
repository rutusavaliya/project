const express = require('express');
const CartRoutes = express.Router();
const {userverifyToken} = require('../../helpers/user.verifytoken')

const {  getAllCart } = require('../../controller/admin/cart.controller');

CartRoutes.get('/get-all-cart' , userverifyToken  ,getAllCart );




module.exports = CartRoutes;