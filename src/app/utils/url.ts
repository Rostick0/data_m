import { FORMAT_API_KEY } from "../store/utils";
import { removeEmpty, isObject } from "./obj";

export const setQueryUrl = (data: any) => {
    let dataValue = data;

    if (isObject(data)) dataValue = removeEmpty(data);

    return new URLSearchParams(dataValue).toString()
};

export const setFetchQueryUrl = (method: string, data: any = '') => {
    // console.log(method + FORMAT_API_KEY + setQueryUrl(data))
    return method + FORMAT_API_KEY + setQueryUrl(data);
};  