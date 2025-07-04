
import constants from '@server/_/constants';
import sendRes from '@server/_/functions/sendRes';
import getBody from '@server/_/functions/getBody';
import type { Route } from '@server/_/types';

export const GET :Route = async()=>{
    return sendRes({
            name: "other api",
            age: 18,
            method: "GET",
        }, constants.SUCCESS, {
        message: "我写的other api get请求目录",
    });
}

interface Testtype {
            name: string;
            age: number;
            method: "POST"
        }
export const POST :Route = async(request)=>{
    const body = await getBody<Testtype>(request);
    return sendRes({
            name: "other api",
            age: 18,
            method: "POST",
        }, constants.SUCCESS, {
        message: "我写的other api post请求目录",
    });
}