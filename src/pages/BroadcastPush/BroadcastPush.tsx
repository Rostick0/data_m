import React, { FC } from 'react';
import styles from './BroadcastPush.module.scss';

interface BroadcastPushProps { }

const BroadcastPush: FC<BroadcastPushProps> = () => (
  <div className={styles.BroadcastPush}>
    BroadcastPush Component
  </div>
);

export default BroadcastPush;
