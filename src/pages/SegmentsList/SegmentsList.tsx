import React, { FC } from 'react';
import styles from './SegmentsList.module.scss';
import Title from '../../ui/Title/Title';
import Select from '../../ui/Select/Select';
import TableSegments from '../../components/TableSegments/TableSegments';
import Input from '../../ui/Input/Input';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';

interface SegmentsListProps { }

const SegmentsList: FC<SegmentsListProps> = () => (
  <div className={styles.SegmentsList}>
    <div className={styles.SegmentsList__top}>
      <Title>
        <div className={styles.SegmentsList__title}>
          <div>Сценарии</div>
        </div>
      </Title>
      <div className={styles.SegmentsList__filter}>
        <Input
          placeholder='Поиск по наименованию'
        ></Input>
        <Select
          items={[
            {
              value: 1,
              name: '312'
            }
          ]}
          placeholder='Тип'
        ></Select>
        <SelectMulti
          items={[
            {
              value: 1,
              name: 'Статистика за день'
            }
          ]}
          placeholder='Статистика'
        ></SelectMulti>
      </div>
    </div>
    <TableSegments></TableSegments>
  </div>
);

export default SegmentsList;
