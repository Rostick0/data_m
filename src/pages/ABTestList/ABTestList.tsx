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
      <Title>
        <div className={styles.AbTestList__title}>
          <div>A/B тесты</div>
          <Link to="/a_b_test/create">
            <Button
              className='button_with_icon'
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white" />
              </svg>
              <span>Добавить</span>
            </Button>
          </Link>
        </div>
      </Title>
      <div className={styles.AbTestList__filter}>
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
    <TableAbTest></TableAbTest>
  </div>
);

export default AbTestList;
