import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => (
  <LayoutDefault>
    <div className={styles.BroadcastList}>

    </div>
  </LayoutDefault>
);

export default BroadcastList;
