import { $host } from '../index';



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