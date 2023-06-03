import React, { FC } from 'react';
import styles from './BroadcastSms.module.scss';

interface BroadcastSmsProps { }

const BroadcastSms: FC<BroadcastSmsProps> = () => (
  <div className={styles.BroadcastSms}>
    BroadcastSms Component
  </div>
);

export default BroadcastSms;
