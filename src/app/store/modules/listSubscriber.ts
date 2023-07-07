import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '..';

export const listSubscriberApi = createApi({
    reducerPath: 'listSubscriberApi',
    tagTypes: ['listsSubscriber'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        listsSubscriber: build.query({
            query: () => '&cmd=listsSubscriber',
            providesTags: result => result
                ? [
                    ...result?.map(({ id }: { id: number }) => ({ type: 'listsSubscriber', id })),
                    { type: 'listsSubscriber', id: 'LIST' }
                ]
                : [{ type: 'listsSubscriber', id: 'LIST' }]
        }),
        listSubscriberAdd: build.mutation({
            query: ({ listId, campaignId }: { listId: number, campaignId: number }) => ({
                url: '&cmd=listSubscriberAdd',
                method: 'POST',
                body: {
                    list_id: listId,
                    campaign_id: campaignId
                }
            }),
            invalidatesTags: [{ type: 'listsSubscriber', id: 'LIST' }]
        }),
        listSubscriberDelete: build.mutation({
            query: ({ listId, campaignId }: { listId: number, campaignId: number }) => ({
                url: '&cmd=listSubscriberDelete',
                method: 'POST',
                body: {
                    list_id: listId,
                    campaign_id: campaignId
                }
            }),
            invalidatesTags: [{ type: 'listsSubscriber', id: 'LIST' }]
        })
    })
});

export const { useListsSubscriberQuery, useListSubscriberAddMutation, useListSubscriberDeleteMutation } = listSubscriberApi;

// Посмотреть подписчиков в сегменте - listsSubscriber

// Добавить подписчика в сегмент - listSubscriberAdd

// Удалить подписчика из сегмента - listSubscriberDelete