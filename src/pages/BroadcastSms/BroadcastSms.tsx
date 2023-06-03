import React, { FC } from 'react';
import styles from './BroadcastSms.module.scss';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';

interface BroadcastSmsProps { }

const BroadcastSms: FC<BroadcastSmsProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastSms}>
      BroadcastSms Component
    </div>
  </LayoutBroadcost>
);

export default BroadcastSms;
