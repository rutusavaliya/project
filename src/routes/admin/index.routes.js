const adminsRoutes = require('express').Router();
const productRoutes = require('./product.routes');
const UserRoutes = require('./admin.routes');
const CartRoutes = require('./cart.routes')


adminsRoutes.use('/product' , productRoutes);
adminsRoutes.use('/user' , UserRoutes);
adminsRoutes.use('/cart' , CartRoutes);
module.exports = adminsRoutes;