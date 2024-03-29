const express = require('express');
const UserRoutes = express.Router();
const {verifyToken} = require('../../helpers/verifytoken')

const {
    registerAdmin,
    loginAdmin,
    getAllAdmin,
    getAdmin ,
    updateAdmin ,
    deleteAdmin


} = require('../../controller/admin/admin.controller');

UserRoutes.post('/register-admin' , registerAdmin);
UserRoutes.post('/login-admin' ,loginAdmin );
UserRoutes.get('/get-all-admin' , verifyToken,  getAllAdmin);
UserRoutes.get('/get-admin' , verifyToken, getAdmin);
UserRoutes.put('/update-admin' , verifyToken, updateAdmin);
UserRoutes.delete('/delete-admin' , verifyToken, deleteAdmin);



module.exports = UserRoutes;