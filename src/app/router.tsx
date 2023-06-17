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
const Scenarios = lazy(() => import('../pages/Scenarios/Scenarios'));
const ScenariosList = lazy(() => import('../pages/ScenariosList/ScenariosList'));
const ScenariosView = lazy(() => import('../pages/ScenariosView/ScenariosView'));
const Segments = lazy(() => import('../pages/Segments/Segments'));
const SegmentsList = lazy(() => import('../pages/SegmentsList/SegmentsList'));
const SegmentsCreate = lazy(() => import('../pages/SegmentsCreate/SegmentsCreate'));
const SegmentsAuditorium = lazy(() => import('../pages/SegmentsAuditorium/SegmentsAuditorium'));
const SegmentsUsers = lazy(() => import('../pages/SegmentsUsers/SegmentsUsers'));
const SegmentsUsersList = lazy(() => import('../pages/SegmentsUsersList/SegmentsUsersList'));
const SegmentsUsersItem = lazy(() => import('../pages/SegmentsUsersItem/SegmentsUsersItem'));
const ABTest = lazy(() => import('../pages/ABTest/ABTest'));
const ABTestList = lazy(() => import('../pages/ABTestList/ABTestList'));
const ABTestCreate = lazy(() => import('../pages/ABTestCreate/ABTestCreate'));
const ABTestCreateSecond = lazy(() => import('../pages/ABTestCreateSecond/ABTestCreateSecond'));
const Promo = lazy(() => import('../pages/Promo/Promo'));
const PromoList = lazy(() => import('../pages/PromoList/PromoList'));

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
                <Route path="/scenarios" element={<Scenarios />}>
                    <Route path="list" element={<ScenariosList />}></Route>
                    <Route path="view" element={<ScenariosView />}></Route>
                </Route>
                <Route path="/segments" element={<Segments />}>
                    <Route path="list" element={<SegmentsList />}></Route>
                    <Route path="create" element={<SegmentsCreate />}></Route>
                    <Route path="auditorium" element={<SegmentsAuditorium />}></Route>
                    <Route path="users" element={<SegmentsUsers />}>
                        <Route path="list" element={<SegmentsUsersList />}></Route>
                        <Route path="info/:id" element={<SegmentsUsersItem />}></Route>
                    </Route>
                </Route>
                <Route path="/a_b_test" element={<ABTest />}>
                    <Route path="list" element={<ABTestList />}></Route>
                    <Route path="create" element={<ABTestCreate />}></Route>
                    <Route path="create_second" element={<ABTestCreateSecond />}></Route>
                </Route>
                <Route path="/promo" element={<Promo />}>
                    <Route path="list" element={<PromoList />}></Route>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;