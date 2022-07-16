function middleware1(req,res,next) {
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
    
}