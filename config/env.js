import Joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string()
        .valid(['test', 'development', 'staging', 'production']),
    PORT: Joi.number().required(),
    MONGOOSE_DEBUG: Joi.boolean().required(),
    JWT_SECRET: Joi.string().required(),
    MONGO_HOST: Joi.string().required(),
    MONGO_PORT: Joi.number().required(),
    MONGO_DB: Joi.string().required()
}).unknown().required();

let { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongooseDebug: envVars.MONGOOSE_DEBUG,
    jwtSecret: envVars.JWT_SECRET,
    mongo: {
        host: envVars.MONGO_HOST,
        port: envVars.MONGO_PORT,
        db: envVars.NODE_ENV == 'test' ? 'test' : envVars.MONGO_DB,
    }
};

export default config;
