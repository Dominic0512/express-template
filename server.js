import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
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

//-- support json encoded body
app.use(bodyParser.json());

//-- support encoded body
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/', root);

app.server.listen(env.port, () => {
	console.log('Started on port 3000');
});

export default app;
