const userRoutes = require('express').Router();
const UserRoutes = require('./user.routes');
const CartRoutes = require('./cart.routes');
const FavoriteRoutes = require('./favorite.routes');
const OrderRoutes = require('./order.routes');
const ReviewRoutes = require('./review.routes');



userRoutes.use('/users' , UserRoutes);
userRoutes.use('/cart' , CartRoutes);
userRoutes.use('/favorite' , FavoriteRoutes);
userRoutes.use('/order' , OrderRoutes);
userRoutes.use('/review' , ReviewRoutes);
module.exports = userRoutes;