import React, { Suspense, FC } from 'react';
import styles from './Broadcast.module.scss';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';
import { Outlet } from "react-router-dom";

interface BroadcastProps { }

const Broadcast: FC<BroadcastProps> = () => {

  return (
    <LayoutBroadcost>
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutBroadcost>
  );
};

export default Broadcast;
