import React, { FC } from 'react';
import styles from './CronsList.module.scss';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import Button from '../../ui/Button/Button';
import TableCrons from '../../components/TableCrons/TableCrons';
import { Link } from 'react-router-dom';

interface CronsListProps { }

const CronsList: FC<CronsListProps> = () => (
  <div className={styles.CronsList}>
    <div className={styles.CronsList__top}>
      <Title>
        <div className={styles.CronsList__title}>
          <div>Кроны</div>
          <Link to="/crons/create">
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
      <div className={styles.CronsList__filter}>
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
    <TableCrons></TableCrons>
  </div>
);

export default CronsList;
