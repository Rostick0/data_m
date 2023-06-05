import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
// import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
// import TopNav from '../../components/TopNav/TopNav';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import Status from '../../ui/Status/Status';
import InputBox from '../../ui/InputBox/InputBox';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import InputRadio from '../../ui/InputRadio/InputRadio';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import InputTag from '../../ui/InputTag/InputTag';
import TableBroadcast from '../../components/TableBroadcast/TableBroadcast';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => (
  <div className={styles.BroadcastList}>
    <div className={styles.BroadcastList__top}>
      <Title>Рассылка</Title>
      <div className={styles.BroadcastList_filter}>
        <Select
          styleColor="grey"
          items={[
            {
              value: 1,
              name: '312'
            }
          ]}
          placeholder='Папки'
        ></Select>
        <Input placeholder="Поиск по наименованию"></Input>
        <Select
          items={[
            {
              value: 1,
              name: '312'
            }
          ]}
          placeholder='Тип'
        ></Select>
        <SelectMulti></SelectMulti>
      </div>
    </div>
    <TableBroadcast></TableBroadcast>
  </div>
);

export default BroadcastList;
