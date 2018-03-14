import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import env from './config/env';
import root from './routes/index';

let app = express();

app.server = http.createServer(app);

//-- connect to mongo db
const mongoUri = `mongodb://${env.mongo.host}:${env.mongo.port}/${env.mongo.db}`;

mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use('/', root);

app.server.listen(env.port, () => {
	console.log('Started on port 3000');
});

export default app;
