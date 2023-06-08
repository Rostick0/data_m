import React, { FC, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import LayoutTemplate from '../../layout/LayoutTemplate/LayoutTemplate';

interface TemplateProps { }

const Template: FC<TemplateProps> = () => (
  <LayoutTemplate>
    <Suspense>
      <Outlet />
    </Suspense>
  </LayoutTemplate>
);

export default Template;
