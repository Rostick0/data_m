import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
// import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
// import TopNav from '../../components/TopNav/TopNav';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastList}>
      
    </div>
  </LayoutBroadcost>
);

export default BroadcastList;
