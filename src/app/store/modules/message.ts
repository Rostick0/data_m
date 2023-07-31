import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FORMAT_API_KEY, URL_BACKEND } from '../utils';
import { langType } from '../../utils/lang';
import { setFetchQueryUrl } from '../../utils/url';
import { wrap_type } from '../../utils/wrapType';

export interface iCreateEmailMessage {
    sender_name: string,
    sender_email: string,
    subject: string,
    body: string,
    list_id: number,
    text_body?: string,
    generate_text?: 1 | 0,
    tag?: string,
    attachments?: string,
    lang?: langType,
    template_id?: number,
    system_template_id?: number,
    wrap_type?: wrap_type
}

interface iUpdateEmailMessage {
    id: number,
    sender_name?: string,
    sender_email?: string,
    subject?: string,
    body?: string,
    list_id?: number,
    text_body?: string,
    lang?: langType,
    categories?: string
}

export interface iCreateSmsMessage {
    sender: string,
    body: string,
    list_id: number,
    tag?: string,
}

interface iSendEmail {
    email: string,
    sender_name: string,
    sender_email: string,
    subject: string,
    body: string,
    list_id: number,
    attachments?: string,
    lang?: langType,
    track_read?: 1 | 0,
    track_links?: 1 | 0,
    cc?: string,
    headers?: string,
    images_as?: string,
    ref_key?: string,
    error_checking?: 1 | 0,
    metadata?: string
}

interface ISendTestEmail {
    email: string,
    id: number,
}

interface iSendSms {
    phone: number,
    sender: string,
    text: string,
}

export const messageApi = createApi({
    reducerPath: 'messageApi',
    tagTypes: ['Message'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        createEmailMessage: build.mutation({
            query: (body: iCreateEmailMessage) => ({
                url: setFetchQueryUrl('createEmailMessage', body),
            }),
            invalidatesTags: [{ type: 'Message', id: 'LIST' }]
        }),
        createSmsMessage: build.mutation({
            query: (body: iCreateSmsMessage) => ({
                url: setFetchQueryUrl('createSmsMessage', body),
            }),
            invalidatesTags: [{ type: 'Message', id: 'LIST' }]
        }),
        sendEmail: build.mutation({
            query: (body: iSendEmail) => ({
                url: setFetchQueryUrl('sendEmail', body),
            })
        }),
        sendTestEmail: build.mutation({
            query: (body: ISendTestEmail) => ({
                url: setFetchQueryUrl('sendTestEmail', body)
            })
        }),
        sendSms: build.mutation({
            query: (body: iSendSms) => ({
                url: setFetchQueryUrl('sendSms', body)
            })
        }),
        updateEmailMessage: build.mutation({
            query: (body: iUpdateEmailMessage) => ({
                url: setFetchQueryUrl('updateEmailMessage', body),
            })
        }),
    })
});

export const { useCreateEmailMessageMutation, useCreateSmsMessageMutation } = messageApi;

// Добавить сегмент к рассылке - listCampaignAdd

// Удалить сегмент из рассылки - listCampaignDelete