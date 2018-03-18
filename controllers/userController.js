import Joi from 'joi';
import User from '../models/User';
import userRepository from '../repositories/userRepository';

const controller = {
    list: async (req, res, next) => {
        const {skip, limit} = req.query;
        const data = {
            skip: parseInt(skip),
            limit: parseInt(limit)
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
    },
    create: async (req, res, next) => {
        const body = req.body,
            data = {
                email: body.email,
                password: body.password,
            };

        const rule = Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required().min(6)
        });

        const { error } = Joi.validate(data, rule);

        if(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }

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
    },
    show: async (req, res, next) => {
        const { id } = req.params;

        try {
            let user = await userRepository.getById(id);
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
    },
    update: async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const data = {
            email: body.email,
            password: body.password,
        };

        const rule = Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required().min(6)
        });

        const { error } = Joi.validate(data, rule);

        if(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }

        try {
            let user = await userRepository.update(id, data);
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
    },
    delete: async (req, res, next) => {
        const { id } = req.params;

        try {
            let user = await userRepository.softDelete({ _id: id });
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
};

export default controller;
