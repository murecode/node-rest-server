import server from './model/server.js';
import dotenv from 'dotenv';

dotenv.config();
const appServer = new server();

appServer.listenPort();











