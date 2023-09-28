import http from 'http';

import * as dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/db';
import connectRedis from './config/redis';

dotenv.config();

connectDB();
connectRedis();

const PORT = Number(process.env.PORT) || 5001;

const app = express();
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
