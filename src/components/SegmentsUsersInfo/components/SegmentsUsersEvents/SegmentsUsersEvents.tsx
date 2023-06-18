import React, { FC } from 'react';
import styles from './SegmentsUsersEvents.module.scss';
import TableSegmentsUsersEvents from '../../../TableSegmentsUsersEvents/TableSegmentsUsersEvents';
import Input from '../../../../ui/Input/Input';
import SelectMulti from '../../../../ui/SelectMulti/SelectMulti';

interface SegmentsUsersEventsProps { }

const SegmentsUsersEvents: FC<SegmentsUsersEventsProps> = () => (
  <div className={styles.SegmentsUsersEvents}>
    <div className={styles.SegmentsUsersEvents__top}>
      <Input
        placeholder='Поиск по наименованию'
      ></Input>
      <Input
        placeholder='Период'
      ></Input>
      <SelectMulti></SelectMulti>
    </div>
    <TableSegmentsUsersEvents></TableSegmentsUsersEvents>
  </div>
);

export default SegmentsUsersEvents;
