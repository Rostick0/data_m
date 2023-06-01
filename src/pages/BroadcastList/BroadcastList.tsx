import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';

interface BroadcastListProps {}

const BroadcastList: FC<BroadcastListProps> = () => (
  <div className={styles.BroadcastList}>
    BroadcastList Component
  </div>
);

export default BroadcastList;
