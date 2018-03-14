import { Router } from 'express';
import userRoute from './userRoute';

let root = Router();
let api = Router();

root.get('/', (req, res) => {
	res.json('root');
});

api.use('/users', userRoute);

root.use('/api', api);

export default root;
