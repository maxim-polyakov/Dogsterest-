import { $host } from '../index';

export const getImageListApi = async () => {
    try
    {
        const { data } = await $host.get('/images/api/imgs/apidoggos');


        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const getImageApi = async (filename) => {
    try
    {
        const { data } = await $host.get('/images/api/imgs/image/' + filename);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const getImageList = async () => {
    try
    {
        const { data } = await $host.get('/images/api/imgs/doggos');


        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};