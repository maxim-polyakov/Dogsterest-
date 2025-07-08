import express from 'express';

import imageRouter from './images/index.js';

import updateLastVisit from '../middleware/updateLastVisit.js';

const apiRouter = new express.Router();

//  Назначить обработчики маршрутизации.
apiRouter.use('/imgs', updateLastVisit, imageRouter);

export default apiRouter;