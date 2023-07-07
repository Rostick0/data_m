import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '..';

interface iTemplate {
    id?: number
    title: string
    template: string
}

export const templatesApi = createApi({
    reducerPath: 'templatesApi',
    tagTypes: ['templates'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        templatesGet: build.query({
            query: () => '&cmd=templatesGet',
            providesTags: result => result
                ? [
                    ...result?.map(({ id }: { id: number }) => ({ type: 'templatesGet', id })),
                    { type: 'templatesGet', id: 'LIST' }
                ]
                : [{ type: 'templatesGet', id: 'LIST' }]
        }),
        templateGet: build.query({
            query: (id: number) => '&cmd=templateGet&id=' + id
        }),
        templateAdd: build.mutation({
            query: (body: iTemplate) => ({
                url: '&cmd=templateAdd',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'templates', id: 'LIST' }]
        }),
        templateUpdate: build.mutation({
            query: (body: iTemplate) => ({
                url: '&cmd=templateUpdate',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'templates', id: 'LIST' }]
        }),
        templateDelete: build.mutation({
            query: (body: iTemplate) => ({
                url: '&cmd=templateDelete',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'templates', id: 'LIST' }]
        }),
    })
});

export const { useTemplateGetQuery, useTemplatesGetQuery, useTemplateAddMutation, useTemplateUpdateMutation, useTemplateDeleteMutation } = templatesApi;

// Список шаблонов (Email) - templatesGet

// Добавить шаблон (Email) - templateAdd

// Изменить шаблон (Email) - templateUpdate

// Удалить шаблон (Email) - templateDelete

// Посмотреть шаблон - templateGet