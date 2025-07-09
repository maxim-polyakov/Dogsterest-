import { $host } from '../index.js';


export const getFiles = async () => {
    try
    {
        const response = await fetch('https://random.dog/doggos');

        const data = await response.json()

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        console.log(error)

        return {
            error: error.message
        };
    }

};

export const getImg = async (filename) => {
    try
    {
        const response = await fetch(`https://random.dog/${filename}` );

        const data = await response.blob();
        const buffer = await data.arrayBuffer();



        const encoded = Buffer.from(buffer).toString('base64');




        return `data:${data.type};base64,${encoded}`;
    }catch (error)
    {
        console.log(error)
    }

};