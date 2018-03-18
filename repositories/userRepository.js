import User from '../models/User';

const repository = {
    list: async ({skip = 0, limit = 24}) => {
        return await User.find()
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .exec();
    },
    getById: async (id) => {
        return await User.findById(id);
    },
    create: async (data) => {
        return await User.create(data);
    },
    update: async (id, data) => {
        return await User.findOneAndUpdate({ _id, id }, { $set: data }, { new: true });
    }
    softDelete: async (id) => {
        return await User.findOneAndUpdate({ _id, id }, { $set: { isDeleted: true }}, { new: true });
    }
};

export default repository;
