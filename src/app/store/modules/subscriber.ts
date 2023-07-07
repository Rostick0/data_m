import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '..';

interface iSubscriber {
    id?: number
    email: string
    confirmed: 0 | 1
    htmlemail: 0 | 1
    rssfrequency: number
    password: string
    disabled: 0 | 1
}

export const subscribersApi = createApi({
    reducerPath: 'subscribersApi',
    tagTypes: ['subscribers'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        subscribersGet: build.query({
            query: () => '&cmd=subscribersGet',
            providesTags: result => result
                ? [
                    ...result?.map(({ id }: { id: number }) => ({ type: 'subscribersGet', id })),
                    { type: 'subscribersGet', id: 'LIST' }
                ]
                : [{ type: 'subscribersGet', id: 'LIST' }]
        }),
        subscribersCount: build.query({
            query: () => '&cmd=subscribersCount'
        }),
        subscriberGet: build.query({
            query: (id: number) => '&cmd=subscriberGet&id=' + id
        }),
        subscriberAdd: build.mutation({
            query: (body: iSubscriber) => ({
                url: '&cmd=subscriberAdd',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'subscribers', id: 'LIST' }]
        }),
        subscriberUpdate: build.mutation({
            query: (body: iSubscriber) => ({
                url: '&cmd=subscriberUpdate',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'subscribers', id: 'LIST' }]
        }),
        subscriberDelete: build.mutation({
            query: (id: number) => ({
                url: '&cmd=subscriberDelete',
                method: 'POST',
                body: {
                    id
                }
            }),
            invalidatesTags: [{ type: 'subscribers', id: 'LIST' }]
        }),
    })
});

export const { useSubscribersGetQuery, useSubscribersCountQuery, useSubscriberGetQuery, useSubscriberAddMutation, useSubscriberUpdateMutation, useSubscriberDeleteMutation } = subscribersApi;

// Все подписчики - subscribersGet

// Получить кол-во подписчиков - subscribersCount

// Получить данные по одному подписчику - subscriberGet

// Добавить подписчика - subscriberAdd

// Изменить подписчика - subscriberUpdate

// Удалить подписчика - subscriberDelete