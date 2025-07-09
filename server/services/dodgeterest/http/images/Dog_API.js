import { $host } from '../index.js';
import {response} from "express";


export const getFiles = async () => {
    try
    {
        const { data } = await $host.get('/doggos');

        console.log(data);

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
        const { data } = await $host.get('/' + filename, { responseType: 'blob' });

        const imageBlob = new Blob([data]);
        const imageUrl = URL.createObjectURL(imageBlob);




        return imageUrl;
    }catch (error)
    {
        console.log(error)
    }

};