import { Router } from 'express';
import indexRouter from './router';
import indexMiddleware from './middlewares';

let api = Router();

api.get('/', (req, res) => {
  res.json('api');
});


api.use('/users', indexRouter.user);

export default api;
