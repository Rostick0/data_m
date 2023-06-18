import React, { FC } from 'react';
import styles from './SegmentsUsersList.module.scss';
import TableSegmentsUsers from '../../components/TableSegmentsUsers/TableSegmentsUsers';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';

interface SegmentsUsersListProps { }

const SegmentsUsersList: FC<SegmentsUsersListProps> = () => (
  <div className={styles.SegmentsUsersList}>
    <div className={styles.SegmentsUsersList__top}>
      <Title>
        <div className={styles.SegmentsUsersList__title}>Пользователи в сегменте</div>
      </Title>
      <div className={styles.SegmentsUsersList__filter}>
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
      </div>
    </div>
    <TableSegmentsUsers></TableSegmentsUsers>
  </div>
);

export default SegmentsUsersList;
