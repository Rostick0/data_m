import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BACKEND } from '../utils';

export const listCampaignApi = createApi({
    reducerPath: 'listCampaignApi',
    tagTypes: ['listCampaign'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        listCampaignAdd: build.mutation({
            query: ({ listId, campaignId }: { listId: number, campaignId: number }) => ({
                url: '&cmd=listCampaignAdd',
                method: 'POST',
                body: {
                    list_id: listId,
                    campaign_id: campaignId
                }
            }),
            invalidatesTags: [{ type: 'listCampaign', id: 'LIST' }]
        }),
        listCampaignDelete: build.mutation({
            query: ({ listId, campaignId }: { listId: number, campaignId: number }) => ({
                url: '&cmd=listCampaignDelete',
                method: 'POST',
                body: {
                    list_id: listId,
                    campaign_id: campaignId
                }
            }),
            invalidatesTags: [{ type: 'listCampaign', id: 'LIST' }]
        })
    })
});

export const { useListCampaignAddMutation, useListCampaignDeleteMutation } = listCampaignApi

// Добавить сегмент к рассылке - listCampaignAdd

// Удалить сегмент из рассылки - listCampaignDelete