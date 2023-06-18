import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface PromoProps { }

const Promo: FC<PromoProps> = () => (
  <LayoutDefault>
    <Suspense>
      <Outlet></Outlet>
    </Suspense>
  </LayoutDefault>
);

export default Promo;
