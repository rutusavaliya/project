const express = require('express');
const ReviewRoutes = express.Router();
const { verifyToken }  = require('../../helpers/verifytoken')

const {  getAllReview ,  deleteReview } = require('../../controller/admin/review.controller');



ReviewRoutes.get('/get-all-review' , verifyToken,  getAllReview);
ReviewRoutes.delete('/delete-review' , verifyToken , deleteReview);




module.exports = ReviewRoutes;