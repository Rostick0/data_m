import React, { FC } from 'react';
import styles from './BroadcastPush.module.scss';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';

interface BroadcastPushProps { }

const BroadcastPush: FC<BroadcastPushProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastPush}>
      BroadcastPush Component
    </div>
  </LayoutBroadcost>
);

export default BroadcastPush;
