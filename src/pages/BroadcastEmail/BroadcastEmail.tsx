import React, { FC } from 'react';
import styles from './BroadcastEmail.module.scss';

interface BroadcastEmailProps { }

const BroadcastEmail: FC<BroadcastEmailProps> = () => (
  <div className={styles.BroadcastEmail}>
    BroadcastEmail Component
  </div>
);

export default BroadcastEmail;
