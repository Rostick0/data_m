import React from 'react';
import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

const Broadcast = lazy(() => import('../pages/Broadcast/Broadcast'));
const BroadcastList = lazy(() => import('../pages/BroadcastList/BroadcastList'));
const BroadcastPush = lazy(() => import('../pages/BroadcastPush/BroadcastPush'));
const BroadcastChat = lazy(() => import('../pages/BroadcastChat/BroadcastChat'));
const BroadcastSms = lazy(() => import('../pages/BroadcastSms/BroadcastSms'));
const BroadcastEmail = lazy(() => import('../pages/BroadcastEmail/BroadcastEmail'));

interface AppRouterprops {
}

const AppRouter: React.FC<AppRouterprops> = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Broadcast />}
                ></Route>
                <Route path="/broadcast" element={<Broadcast />}
                >
                    <Route index path="list" element={<BroadcastList />} />
                    <Route path="push" element={<BroadcastPush />} />
                    <Route path="chat" element={<BroadcastChat />} />
                    <Route path="sms" element={<BroadcastSms />} />
                    <Route path="email" element={<BroadcastEmail />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;