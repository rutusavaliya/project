const express = require('express');
const ReviewRoutes = express.Router();
const {userverifyToken} = require('../../helpers/user.verifytoken')

const { addReview, getAllReview ,  deleteReview } = require('../../controller/user/review.controller');


ReviewRoutes.post('/add-new-review' , userverifyToken,  addReview);
ReviewRoutes.get('/get-all-review' , userverifyToken,  getAllReview);
ReviewRoutes.delete('/delete-review' , userverifyToken , deleteReview);




module.exports = ReviewRoutes;