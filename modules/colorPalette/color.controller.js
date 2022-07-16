const ColorModel = require('./color');

const createColor = async (req, res) => {

    try {
        const token = req.headers.authorization;
        console.log(token);

        // if (!token) {
        //     throw new Error('Not found token');
        // }


        // const jwtToken = token.split(' ')[1];

        // check token có thuộc token của dự án mình ko
        // check token có hết hạn hay ko
        // trả về payload
        // const data = jwt.verify(token, process.env.SECRET_KEY);

        // const { userId } = data;
        // if (!userId) {
        //     throw new Error('Authorization fail');
        // }
        // console.log(data);

        // const existedUser = await UserModel.findById(userId);

        // if (!existedUser) {
        //     throw new Error('Authorization fail');
        // }

        // console.log(token);


        // const senderUser = req.user
        console.log(req.body);

        const user = '629cbf78ab088a03ab60a5b9'

        const { idColor1,idColor2,idColor3,idColor4,idColor5, } = req.body;

        const newPalette = await ColorModel.create({
            idColor1,
            idColor2,
            idColor3,
            idColor4,
            idColor5,
            createdBy: user,
        });

        res.send({ success: 1, data: newPalette });
    } catch (err) {
        res.status(400).send({ success: 0, data: null, message: err });
    }
}

module.exports ={
    createColor
}
