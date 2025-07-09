import * as express from 'express';

import imageController from '../../controllers/images/index.js';

const imageRouter = new express.Router();

//  Маршрутизатор отвечающий за обработку запросов связанных с авторизацией.
imageRouter.get('/doggos', imageController.img);
imageRouter.get('/apidoggos', imageController.apifiles);
imageRouter.get('/image/:filename', imageController.apiimgs);

export default imageRouter;