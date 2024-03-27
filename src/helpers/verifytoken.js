const jwt = require('jsonwebtoken');
const User = require('../model/user.model');



exports.adminverifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (authorization === undefined) {
            return res.json({ Message: `Invalid Authorization ${console.error()}` });

        }
        let token = authorization.split(" ")[1];
        // console.log(token);
        if (token === undefined)
            return res.status(401).json({ Message: 'Unauthorize' });
        else {
            let { adminId } = jwt.verify(token, 'Admin');
            // console.log(adminId);
            let admin = await User.findById(adminId);
            // console.log(admin);
            if (admin) {
                req.admin = admin;
                next();
            }
            else {
                return res.status(401).json({ Message: `Invalid Admin(token) ${console.error()}` })
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ Message: `Internal Server Error From Admin Token` });
    }
}  