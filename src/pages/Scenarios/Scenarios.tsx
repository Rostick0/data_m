import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface ScenariosProps { }

const Scenarios: FC<ScenariosProps> = () => (
  <LayoutDefault>
    <Suspense>
      <Outlet></Outlet>
    </Suspense>
  </LayoutDefault>
);

export default Scenarios;
