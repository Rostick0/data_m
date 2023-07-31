export const removeEmpty = (obj: object) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
}

export const isObject = (obj: any) => {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}