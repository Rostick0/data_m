import React, { FC } from 'react';
import styles from './BroadcastList.module.scss';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import TableBroadcast from '../../components/TableBroadcast/TableBroadcast';
import { resultListsGet, useListsGetQuery } from '../../app/store/modules/list';

interface BroadcastListProps { }

const BroadcastList: FC<BroadcastListProps> = () => {
  const { data } = useListsGetQuery();


  return (
    <div className={styles.BroadcastList}>
      <div className={styles.BroadcastList__top}>
        <Title>Рассылка</Title>
        <div className={styles.BroadcastList__filter}>
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
      <TableBroadcast
        data={data?.result}
      ></TableBroadcast>
    </div>
  );
};

export default BroadcastList;
