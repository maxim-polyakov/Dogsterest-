import fs from "fs";
import path from 'path';
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
}

export default new ImgController();