import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '../utils';

export interface iUser {
    login?: string
    password?: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['user'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        userLogin: build.mutation({
            query: (body: iUser) => ({
                url: '',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'user', id: 'LIST' }]
        }),
    })
});

export const { useUserLoginMutation } = userApi;

// Список шаблонов (Email) - templatesGet

// Добавить шаблон (Email) - templateAdd

// Изменить шаблон (Email) - templateUpdate

// Удалить шаблон (Email) - templateDelete

// Посмотреть шаблон - templateGet