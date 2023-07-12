import { configureStore } from '@reduxjs/toolkit';
import { campaignApi } from './modules/campaign';
import { listApi } from './modules/list';
import { listCampaignApi } from './modules/listCampaign';
import { listSubscriberApi } from './modules/listSubscriber';
import { subscribersApi } from './modules/subscriber';
import { templatesApi } from './modules/template';
import { userApi } from './modules/user';

export const store = configureStore({
    reducer: {
        [campaignApi.reducerPath]: campaignApi.reducer,
        [listApi.reducerPath]: listApi.reducer,
        [listCampaignApi.reducerPath]: listCampaignApi.reducer,
        [listSubscriberApi.reducerPath]: listSubscriberApi.reducer,
        [subscribersApi.reducerPath]: subscribersApi.reducer,
        [templatesApi.reducerPath]: templatesApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware()
        .concat(
            campaignApi.middleware,
            listApi.middleware,
            listCampaignApi.middleware,
            listSubscriberApi.middleware,
            subscribersApi.middleware,
            templatesApi.middleware,
            userApi.middleware
        )
})