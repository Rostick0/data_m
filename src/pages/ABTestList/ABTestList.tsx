import React, { FC } from 'react';
import styles from './ABTestList.module.scss';
import Title from '../../ui/Title/Title';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import TableAbTest from '../../components/TableABTest/TableABTest';

interface AbTestListProps { }

const AbTestList: FC<AbTestListProps> = () => (
  <div className={styles.AbTestList}>
    <div className={styles.AbTestList__top}>
      <Title>Пользователи в сегменте</Title>
      <div className={styles.AbTestList__filter}>
        <Input placeholder="Поиск по email"></Input>
        <Select
          items={[
            {
              value: 1,
              name: '312'
            }
          ]}
          placeholder='Расположение'
        ></Select>
      </div>
    </div>
    <TableAbTest></TableAbTest>
  </div>
);

export default AbTestList;
