const express = require('express');
const CartRoutes = express.Router();
const {verifyToken} = require('../../helpers/verifytoken')

const {  getAllCart } = require('../../controller/admin/cart.controller');

CartRoutes.get('/get-all-cart' , verifyToken  , getAllCart );




module.exports = CartRoutes;