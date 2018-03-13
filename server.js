import express from 'express';
import http from 'http';
import root from './routes/index';

const port = 3000;

let app = express();

app.server = http.createServer(app);

app.use('/', root);

app.server.listen(port, () => {
	console.log('Started on port 3000');
});

export default app;
