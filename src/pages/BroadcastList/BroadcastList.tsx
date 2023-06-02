import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
import Aside from '../../components/Aside/Aside';
import Button from '../../ui/Button/Button';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => (
  <div className={styles.BroadcastList}>
    <Aside></Aside>
  </div>
);

export default BroadcastList;
