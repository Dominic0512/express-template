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
        } catch(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }
    },
    create: async (req, res, next) => {
        const body = req.body;

        const data = {
            name: body.name,
            email: body.email,
            password: body.password,
        };

        const rule = Joi.object().keys({
            name: Joi.string().required(),
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
        } catch(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
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
        } catch(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }
    },
    update: async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const data = {
            name: body.name,
            email: body.email,
            password: body.password,
        };

        const rule = Joi.object().keys({
            name: Joi.string(),
            email: Joi.string(),
            password: Joi.string().min(6)
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
        } catch(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }
    },
    delete: async (req, res, next) => {
        const { id } = req.params;

        try {
            let user = await userRepository.delete({ _id: id });
            return res.json({
                status: 'successed',
                content: {}
            });
        } catch(error) {
            return res.json({
                status: 'failed',
                error: `error: ${error}`
            });
        }
    }
};

export default controller;
