const middles = {
    isLogin: (req, res, next) => {
        let isLogin = false;

        if(!isLogin) {
            return res.status(401).send('Unauthorized');
        }

        next();
    }
};

export default middles;
