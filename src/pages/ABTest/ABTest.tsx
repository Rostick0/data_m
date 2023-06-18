import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface ABTestProps { }

const ABTest: FC<ABTestProps> = () => (
  <LayoutDefault>
    <Suspense>
      <Outlet></Outlet>
    </Suspense>
  </LayoutDefault>
);

export default ABTest;
