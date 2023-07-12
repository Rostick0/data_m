import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '../utils';

interface iList {
    id?: number
    name: string
    description: string
    listorder: number
    active: 0 | 1
}

export const listApi = createApi({
    reducerPath: 'listApi',
    tagTypes: ['Lists'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        listsGet: build.query({
            query: () => '&cmd=listsGet',
            providesTags: result => result
                ? [
                    ...result?.map(({ id }: { id: number }) => ({ type: 'Lists', id })),
                    { type: 'Lists', id: 'LIST' }
                ]
                : [{ type: 'Lists', id: 'LIST' }]
        }),
        listGet: build.query({
            query: (id: number) => '&cmd=listGet&id=' + id
        }),
        listAdd: build.mutation({
            query: (body: iList) => ({
                url: '&cmd=listAdd',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Lists', id: 'LIST' }]
        }),
        listUpdate: build.mutation({
            query: (body: iList) => ({
                url: '&cmd=listUpdate',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Lists', id: 'LIST' }]
        }),
        listDelete: build.mutation({
            query: (id: number) => ({
                url: '&cmd=listDelete',
                method: 'POST',
                body: {
                    id
                }
            }),
            invalidatesTags: [{ type: 'Lists', id: 'LIST' }]
        }),
    })
});

// Получить все сегменты - listsGet

// Получить сегмент - listGet

// Добавить сегмент - listAdd

// Обновить сегмент - listUpdate

// Удалить сегмент - listDelete

export const { useListsGetQuery, useListGetQuery, useListAddMutation, useListUpdateMutation, useListDeleteMutation } = listApi