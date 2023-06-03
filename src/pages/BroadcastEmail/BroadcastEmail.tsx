import React, { FC } from 'react';
import styles from './BroadcastEmail.module.scss';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';

interface BroadcastEmailProps { }

const BroadcastEmail: FC<BroadcastEmailProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastEmail}>
      BroadcastEmail Component
    </div>
  </LayoutBroadcost>
);

export default BroadcastEmail;
