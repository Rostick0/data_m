import React, { FC } from 'react';
import styles from './BroadcastTable.module.scss';

interface BroadcastTableProps {}

const BroadcastTable: FC<BroadcastTableProps> = () => (
  <div className={styles.BroadcastTable}>
    BroadcastTable Component
  </div>
);

export default BroadcastTable;
