import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FORMAT_API_KEY, URL_BACKEND } from '../utils';
import { setFetchQueryUrl } from '../../utils/url';

export interface iGetList {
    id: number,
    title: string
}

type Result = {
    result?: iGetList[],
};

interface iCreateList {
    id: number,
    title: string,
    before_subscribe_url?: string,
    after_subscribe_url?: string
}
// interface iList {
//     id?: number
//     name: string
//     description: string
//     listorder: number
//     active: 0 | 1
// }

export const listApi = createApi({
    reducerPath: 'listApi',
    tagTypes: ['Lists'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        listsGet: build.query<Result, void>({
            query: () => setFetchQueryUrl('getLists'),
            providesTags: result => {
                return result?.result?.length
                    ? [
                        ...result?.result?.map(({ id }: { id: number }) => ({ type: 'Lists' as const, id })),
                        { type: 'Lists', id: 'LIST' }
                    ]
                    : [{ type: 'Lists', id: 'LIST' }]
            }
        }),
        // listGet: build.query({
        //     query: (id: number) => '&cmd=listGet&id=' + id
        // }),
        createList: build.mutation({
            query: (body: iCreateList) => ({
                url: setFetchQueryUrl('createList', body),
            }),
            invalidatesTags: [{ type: 'Lists', id: 'LIST' }]
        }),

        listDelete: build.mutation({
            query: (listId: number) => ({
                url: setFetchQueryUrl('deleteList', { list_id: listId }),
                method: 'POST',
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

export const { useCreateListMutation, useListDeleteMutation, useListsGetQuery } = listApi