import { Router } from 'express';
import userController from '../controllers/userController';
import authMiddleware from './middlewares/authMiddleware';

let router = Router();

router.route('/')
    .get(userController.list)
    .post(userController.create);

router.route('/:id')
    .get(userController.show)
    .put(userController.update)
    .delete(userController.delete);

export default router;
