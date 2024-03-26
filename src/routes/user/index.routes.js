const userRoutes = require('express').Router();
const UserRoutes = require('./user.routes');
const CartRoutes = require('./cart.routes');
const FavoriteRoutes = require('./favorite.routes');



userRoutes.use('/users' , UserRoutes);
userRoutes.use('/cart' , CartRoutes);
userRoutes.use('/favorite' , FavoriteRoutes);
module.exports = userRoutes;