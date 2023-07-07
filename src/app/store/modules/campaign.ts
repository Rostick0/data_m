import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '..';

interface iCampaign {
    id?: number
    subject: string
    fromfield: string
    replyto: string
    message: string
    textmessage: string
    footer: string
    status: string
    sendformat: string
    template: string
    embargo: string
    rsstemplate: string
    owner: string
    htmlformatted: string
};
type orderByType = 'id' | 'subject' | 'fromfield' | 'replyto' | 'message' | 'textmessage' | 'footer' | 'status' | 'sendformat' | 'template' | 'embargo' | 'rsstemplate' | 'owner' | 'htmlformatted';

export const campaignApi = createApi({
    reducerPath: 'campaignApi',
    tagTypes: ['campaigns'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        campaignsGet: build.query({
            query: ({
                orderBy = 'id',
                order = 'asc',
                limit = 10,
                offset = 0
            }: {
                orderBy?: orderByType,
                order?: 'asc' | 'desc',
                limit?: number
                offset?: number
            }) => `&cmd=campaignsGet&order_by=${orderBy}&order=${order}&limit=${limit}&offset=${offset}`,
            providesTags: result => result
                ? [
                    ...result?.map(({ id }: { id: number }) => ({ type: 'Campaigns', id })),
                    { type: 'Campaigns', id: 'LIST' }
                ]
                : [{ type: 'Campaigns', id: 'LIST' }]
        }),
        campaignGet: build.query({
            query: (id: number) => '&cmd=campaignGet&id=' + id
        }),
        campaignAdd: build.mutation({
            query: (body: iCampaign) => ({
                url: '&cmd=campaignAdd',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'campaigns', id: 'LIST' }]
        }),
        campaignUpdate: build.mutation({
            query: (body: iCampaign) => ({
                url: '&cmd=campaignUpdate',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'campaigns', id: 'LIST' }]
        }),
    })
});

export const { useCampaignsGetQuery, useCampaignGetQuery, useCampaignAddMutation, useCampaignUpdateMutation } = campaignApi;

// Список рассылок - campaignsGet

// Добавить рассылку - campaignAdd

// Посмотреть рассылку - campaignGet

// Изменить рассылку - campaignUpdate

