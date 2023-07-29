import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FORMAT_API_KEY, URL_BACKEND } from '../utils';
import { langType } from '../../utils/lang';
import { setFetchQueryUrl } from '../../utils/url';


export interface iGetTemplate {
    id: number,
    sub_user_login: string,
    title: string,
    description: string,
    lang_code: langType,
    subject: string,
    attachments: string,
    screenshot_url: string,
    fullsize_screenshot_url: string,
    created: string,
    updated: string,
    message_format: string,
    type: string,
    body: string,
}


export interface iMutationTemplate {
    template_id?: number
    title: string
    description: string,
    subject: string,
    body: string,
    text_body: string,
    lang: langType
}

type Result = {
    result: iGetTemplate[],
};

export const templatesApi = createApi({
    reducerPath: 'templatesApi',
    tagTypes: ['Templates'],
    baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
    endpoints: build => ({
        templatesGet: build.query<Result, string>({
            query: (queryParams?: string | undefined) => setFetchQueryUrl('getTemplates', queryParams),
            providesTags: result => {

                return result?.result?.length
                    ? [
                        ...result?.result?.map(({ id }) => ({ type: 'Templates' as const, id })),
                        { type: 'Templates', id: 'LIST' }
                    ]
                    : [{ type: 'Templates', id: 'LIST' }]
            }
        }),
        templateGet: build.query({
            query: (templateId: number) => setFetchQueryUrl('getTemplate', { template_id: templateId })
        }),
        templateAdd: build.mutation({
            query: (body: iMutationTemplate) => ({
                url: setFetchQueryUrl('createEmailTemplate', body),
            }),
            // invalidatesTags: [{ type: 'Templates', id: 'LIST' }]
        }),
        templateUpdate: build.mutation({
            query: (body: iMutationTemplate) => ({
                url: setFetchQueryUrl('updateEmailTemplate', body),
            }),
            // invalidatesTags: [{ type: 'Templates', id: 'LIST' }]
        }),
        templateDelete: build.mutation({
            query: (templateId: number) => ({
                url: setFetchQueryUrl('deleteTemplate', { template_id: templateId }),
            }),
            invalidatesTags: [{ type: 'Templates', id: 'LIST' }]
        }),
    })
});

export const { useTemplateGetQuery, useTemplatesGetQuery, useTemplateAddMutation, useTemplateUpdateMutation, useTemplateDeleteMutation } = templatesApi;

// Список шаблонов (Email) - templatesGet

// Добавить шаблон (Email) - templateAdd

// Изменить шаблон (Email) - templateUpdate

// Удалить шаблон (Email) - templateDelete

// Посмотреть шаблон - templateGet