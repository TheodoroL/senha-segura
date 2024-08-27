import express from 'express'; 
import { router } from './routes/routes';

const server =express();
server.use(express.json()); 
server.use(router); 
server.listen(8080, ()=> console.log("http run"));