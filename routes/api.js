import { Router } from 'express';

let api = Router();

api.get('/', (req, res) => {
  res.json('api');
});

export default api;
