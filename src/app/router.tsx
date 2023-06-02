import React from 'react';
import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

const BroadcastList = lazy(() => import('../pages/BroadcastList/BroadcastList'));
// const BroadcastPush = lazy(() => import('./BroadcastPush'));
// const BroadcastChat = lazy(() => import('./BroadcastChat'));
// const BroadcastSms = lazy(() => import('./BroadcastSms'));
// const BroadcastEmail = lazy(() => import('./BroadcastEmail'));

interface AppRouterprops {
}

const AppRouter: React.FC<AppRouterprops> = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/broadcast" children={
                    <Route path="list" element={<BroadcastList />}
                    />} />
                {/* <Route path="/broadcast/list" element={<BroadcastList />} /> */}
                {/* < Route path="/broadcast/list/details" element={< BroadcastDetails />} />
                < Route path="/broadcast/push" element={BroadcastPush} />
                <Route path="/broadcast/chat" element={BroadcastChat} />
                <Route path="/broadcast/sms" element={BroadcastSms} />
                <Route path="/broadcast/email" element={BroadcastEmail} /> */}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;