import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface JourneyProps { }

const Journey: FC<JourneyProps> = () => (
  <LayoutDefault>
    <Suspense>
      <Outlet></Outlet>
    </Suspense>
  </LayoutDefault>
);

export default Journey;
