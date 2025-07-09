import fs from "fs";
import path from 'path';
import { getImg, getFiles } from '../../http/images/Dog_API.js'
class ImgController {
    //  Проверка токена авторизации.
    async img(req, res, next) {
        try {
            let files;
            const folderpath = "./static"

            files = fs.readdirSync(folderpath);
            return res.json(files);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    async apifiles(req, res, next) {
        try {
            let files;
            const folderpath = "./static"

            files = await getFiles()
            return res.json(files);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async apiimgs(req, res, next) {
        try {
            const filename = req.params.filename;

            let file = await getImg(filename)

            return res.json(file);

        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new ImgController();