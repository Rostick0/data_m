import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FORMAT_API_KEY, URL_BACKEND } from '../utils';
import { setFetchQueryUrl } from '../../utils/url';

export interface iGetCampaign {
    id: number,
    title?: string,
    start_time?: string,
    status?: string,
    message_id?: number,
    list_id?: number,
    subject?: string,
    sender_name?: string,
    sender_email?: string,
    stats_url?: string
}

interface iUrlGetCampaigns {
    from?: string, // Дата и время старта рассылки, начиная с которой нужно выводить рассылки, в формате «ГГГГ-ММ-ДД чч:мм:сс», часовой пояс UTC.
    to?: string,	// Дата и время старта рассылки, заканчивая которой нужно выводить рассылки, в формате «ГГГГ-ММ-ДД чч:мм:сс», часовой пояс UTC.
    limit?: number, // Количество записей в ответе на один запрос должно быть целым числом в диапазоне 1 — 10 000.
    offset?: number
}

type Result = {
    result: iGetCampaign[]
};

interface iMutationCampaing {
    message_id: number,
    start_time?: string,
    timezone?: string,
    track_read?: 1 | 0,
    track_links?: 1 | 0,
    contacts?: string,
    contacts_url?: string,
    track_ga?: 1 | 0,
    ga_medium?: 1 | 0,
    ga_source?: 1 | 0,
    ga_campaign?: 1 | 0,
    ga_content?: 1 | 0,
    ga_term?: 1 | 0,
    payment_limit?: number,
    payment_currency?: number,
}

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

// type orderByType = 'id' | 'subject' | 'fromfield' | 'replyto' | 'message' | 'textmessage' | 'footer' | 'status' | 'sendformat' | 'template' | 'embargo' | 'rsstemplate' | 'owner' | 'htmlformatted';

export const campaignApi = createApi({
    reducerPath: 'campaignApi',
    tagTypes: ['campaigns'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        campaignsGet: build.query<Result, void>({
            query: (body) => {
                console.log(body);
                return setFetchQueryUrl('getCampaigns', body)
            },
            providesTags: result => result?.result?.length
                ? [
                    ...result?.result?.map(({ id }: { id: number }) => ({ type: 'campaigns' as const, id })),
                    { type: 'campaigns', id: 'LIST' }
                ]
                : [{ type: 'campaigns', id: 'LIST' }]
        }),
        createCampaign: build.mutation({
            query: (body: iMutationCampaing) => ({
                url: setFetchQueryUrl('createCampaign', body),
            }),
            invalidatesTags: [{ type: 'campaigns', id: 'LIST' }]
        }),
        cancelCampaig: build.mutation({
            query: (campaignId: number) => ({
                url: setFetchQueryUrl('cancelCampaign', { campaign_id: campaignId }),
            })
        }),
        // campaignUpdate: build.mutation({
        //     query: (body: iCampaign) => ({
        //         url: '&cmd=campaignUpdate',
        //         method: 'POST',
        //         body
        //     }),
        //     invalidatesTags: [{ type: 'campaigns', id: 'LIST' }]
        // }),
    })
});

export const { useCampaignsGetQuery, useCancelCampaigMutation, useCreateCampaignMutation } = campaignApi;