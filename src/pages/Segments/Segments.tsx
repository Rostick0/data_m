import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface SegmentsProps { }

const Segments: FC<SegmentsProps> = () => (
  <LayoutDefault>
    <Suspense>
      <Outlet></Outlet>
    </Suspense>
  </LayoutDefault>
);

export default Segments;
