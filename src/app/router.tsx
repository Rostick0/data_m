import React from 'react';
import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

const Broadcast = lazy(() => import('../pages/Broadcast/Broadcast'));
const BroadcastList = lazy(() => import('../pages/BroadcastList/BroadcastList'));
const BroadcastPush = lazy(() => import('../pages/BroadcastPush/BroadcastPush'));
const BroadcastChat = lazy(() => import('../pages/BroadcastChat/BroadcastChat'));
const BroadcastSms = lazy(() => import('../pages/BroadcastSms/BroadcastSms'));
const BroadcastEmail = lazy(() => import('../pages/BroadcastEmail/BroadcastEmail'));
const Crons = lazy(() => import('../pages/Crons/Crons'));
const CronsCreate = lazy(() => import('../pages/CronsCreate/CronsCreate'));
const CronsList = lazy(() => import('../pages/CronsList/CronsList'));
const Template = lazy(() => import('../pages/Template/Template'));
const TemplateCreate = lazy(() => import('../pages/TemplateCreate/TemplateCreate'));
const TemplateList = lazy(() => import('../pages/TemplateList/TemplateList'));
const Journey = lazy(() => import('../pages/Journey/Journey'));
const JourneyList = lazy(() => import('../pages/JourneyList/JourneyList'));
const JourneyItem = lazy(() => import('../pages/JourneyItem/JourneyItem'));
const JourneyView = lazy(() => import('../pages/JourneyView/JourneyView'));
const JourneySegmentsList = lazy(() => import('../pages/JourneySegmentsList/JourneySegmentsList'));

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
                <Route path="/crons" element={<Crons />}>
                    <Route path="list" element={<CronsList />}></Route>
                    <Route path="create" element={<CronsCreate />}></Route>
                </Route>
                <Route path="/template" element={<Template />}>
                    <Route path="list" element={<TemplateList />}></Route>
                    <Route path="create" element={<TemplateCreate />}></Route>
                </Route>
                <Route path="/journey" element={<Journey />}>
                    <Route path="list" element={<JourneyList />}></Route>
                    <Route path="item/:id" element={<JourneyItem />}></Route>
                    <Route path="view" element={<JourneyView />}></Route>
                    <Route path="view/:id" element={<JourneyView />}></Route>
                    <Route path="segments" element={<JourneySegmentsList />}></Route>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;