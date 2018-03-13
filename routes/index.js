import { Router } from 'express';
import api from './api';

let root = Router();

root.get('/', (req, res) => {
	res.json('root');
});

root.use('/api', api);

export default root;
