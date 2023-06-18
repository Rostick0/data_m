import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";

interface SegmentsUsersProps { }

const SegmentsUsers: FC<SegmentsUsersProps> = () => (
  <Suspense>
    <Outlet></Outlet>
  </Suspense>
);

export default SegmentsUsers;
