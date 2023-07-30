import { FORMAT_API_KEY } from "../store/utils";

export const setQueryUrl = (data: any) => {
    return new URLSearchParams(data).toString()
};

export const setFetchQueryUrl = (method: string, data: any = '') => {
    return method + FORMAT_API_KEY + setQueryUrl(data);
};  