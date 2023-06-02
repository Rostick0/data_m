import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
// import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
// import TopNav from '../../components/TopNav/TopNav';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastList}>
      <div className={styles.BroadcastList__top}>
        <Title>Рассылка</Title>
        <div className={styles.BroadcastList_filter}>
          <Select items={[
            {
              value: 1,
              name: '312'
            },
            {
              value: 2,
              name: 2
            },
            {
              value: 3,
              name: 3
            }
          ]
          } 
          onChange={(result: object) => console.log(result)}
          ></Select>
          <Input placeholder="Поиск по наименованию"></Input>
          {/* <Select></Select> */}
        </div>
      </div>
    </div>
  </LayoutBroadcost >
);

export default BroadcastList;
