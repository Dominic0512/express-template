import User from '../models/User';

const repository = {
    list: async (data) => {
        return await User.list(data);
    },
    create: async (data) => {
        return await User.create(data);
    },
    update: (req, res, next) => {

    }

};

export default repository;
