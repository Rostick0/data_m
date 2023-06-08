import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutCrons from '../../layout/LayoutCrons/LayoutCrons';

interface CronsProps { }

const Crons: FC<CronsProps> = () => (
  <LayoutCrons>
    <Suspense>
      <Outlet />
    </Suspense>
  </LayoutCrons>
);

export default Crons;
