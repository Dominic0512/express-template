import User from '../models/User';
import userRepository from '../repositories/userRepository';

const controller = {
    list: [
        (req, res, next) => {
            console.log('use validator');
            next();
        },
        async (req, res, next) => {
            const query = req.query,
                data = {
                    skip: query.skip,
                    limit: query.limit
                };

            try {
                let users = await userRepository.list(data);

                return res.json({
                    status: 'successed',
                    content: {
                        users: users
                    }
                });
            } catch(e) {
                return res.json({
                    status: 'failed',
                    error: `error: ${e}`
                });
            }
        }
    ],
    create: [
        (req, res, next) => {
            console.log('use validator');
            next();
        },
        async (req, res, next) => {
            const body = req.body,
                data = {
                    email: body.email,
                    password: body.password,
                    createAt: new Date()
                };

            try {
                let user = await userRepository.create(data);
                return res.json({
                    status: 'successed',
                    content: {
                        user: user
                    }
                });
            } catch(e) {
                return res.json({
                    status: 'failed',
                    error: `error: ${e}`
                });
            }
        }
    ],
    show: (req, res, next) => {
        res.json('show');
    },
    update: (req, res, next) => {
        res.json('update');
    },
    delete: (req, res, next) => {
        res.json('delete');
    }
};

export default controller;
