require('dotenv').config()
const UserModel = require('../modules/auth/user');
const jwt = require('jsonwebtoken');

async function needAuthenticated(req, res, next) {
    try {

        const token = req.headers.authorization;

        if (!token) {
            throw new Error('Not found token');
        }
        const jwtToken = token.split(' ')[1];

        // check token có thuộc token của dự án mình ko
        // check token có hết hạn hay ko
        // trả về payload
        const data = jwt.verify(jwtToken, process.env.SECRET_KEY);

        const { userId } = data;
        if (!userId) {
            throw new Error('Authorization fail');
        }

        const existedUser = await UserModel.findById(userId);

        if (!existedUser) {
            throw new Error('Authorization fail');
        }

        //nhet them thong tin vao bien req


        next()
    } catch (error) {
        res.status(400).send({ success: 0, message: error })
    }
}

module.exports = needAuthenticated