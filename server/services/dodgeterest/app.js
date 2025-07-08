//  Учебная МИС ПИМУ.
//  Точка входа в серверную часть приложения.

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fileUpload from 'express-fileupload';

import apiRouter from './routes/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ServerPort = process.env.SERVER_PORT ?? 5026;

//  Инициализация expressjs.
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './static')))
app.use(cors())
app.use(fileUpload({}))
//  Пути, которые будет обрабатывать express.
app.use('/api', apiRouter);

const listeningListener = () => {
    console.log(`Server is running. Port: ${ServerPort}`);
};

//  Функция, которая запустит сервер и БД.
const start = async () => {
    try
    {
        app.listen(ServerPort, listeningListener);
    }catch (error)
    {
        console.error(error);
    }
};

start();