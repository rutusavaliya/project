const jwt = require('jsonwebtoken');
const User = require('../model/user.model');



exports.userverifyToken = async (req, res, next) => {
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
            let { userId } = jwt.verify(token, 'User');
            // console.log(userId);
            let user = await User.findById(userId);
            // console.log(user);
            if (user) {
                req.user = user;
                next();
            }
            else {
                return res.status(401).json({ Message: `Invalid User(token) ${console.error()}` })
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ Message: `Internal Server Error From Admin Token` });
    }
}  