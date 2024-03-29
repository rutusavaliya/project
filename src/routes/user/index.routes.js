const userRoutes = require('express').Router();
const UserRoutes = require('./user.routes');
const CartRoutes = require('./cart.routes');
const FavoriteRoutes = require('./favorite.routes');
const OrderRoutes = require('./order.routes');
const ReviewRoutes = require('./review.routes');
const ProductRoutes = require('./product.routes');



userRoutes.use('/users' , UserRoutes);
userRoutes.use('/cart' , CartRoutes);
userRoutes.use('/favorite' , FavoriteRoutes);
userRoutes.use('/order' , OrderRoutes);
userRoutes.use('/review' , ReviewRoutes);
userRoutes.use('/products' , ProductRoutes);
module.exports = userRoutes;