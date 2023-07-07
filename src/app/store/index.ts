import { configureStore } from '@reduxjs/toolkit';
import { campaignApi } from './modules/campaign';
import { listApi } from './modules/list';
import { listCampaignApi } from './modules/listCampaign';
import { listSubscriberApi } from './modules/listSubscriber';
import { subscribersApi } from './modules/subscriber';
import { templatesApi } from './modules/template';
export const URL_BACKEND: string = "http://212.113.120.254:8000/lists/admin/?page=call&pi=restapi";
export const LOGIN_BACKEND = "test";
export const PASSWORD_BACKEND = "0ZB87atKpMd4HP2";

export const store = configureStore({
    reducer: {
        [campaignApi.reducerPath]: campaignApi.reducer,
        [listApi.reducerPath]: listApi.reducer,
        [listCampaignApi.reducerPath]: listCampaignApi.reducer,
        [listSubscriberApi.reducerPath]: listSubscriberApi.reducer,
        [subscribersApi.reducerPath]: subscribersApi.reducer,
        [templatesApi.reducerPath]: templatesApi.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware()
    // .concat(campaignApi.middleware, listApi.middleware)
})