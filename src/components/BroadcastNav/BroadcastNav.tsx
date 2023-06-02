import React, { FC } from 'react';
import styles from './BroadcastNav.module.scss';

interface BroadcastNavProps {}

const BroadcastNav: FC<BroadcastNavProps> = () => (
  <div className={styles.BroadcastNav}>
    BroadcastNav Component
  </div>
);

export default BroadcastNav;
