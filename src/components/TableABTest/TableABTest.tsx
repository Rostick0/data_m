import React, { FC } from 'react';
import styles from './TableABTest.module.scss';
import Table from '../Table/Table';
import { typeStatus } from '../../ui/Status/Status';
import TableAbTestItem from '../TableABTestItem/TableABTestItem';

interface TableAbTestProps { }

const TableAbTest: FC<TableAbTestProps> = () => {
  const titles = [
    'Наименование',
    'ID',
    'Тип',
    'Начало',
    'Статус',
    ''
  ];

  const data = [
    {
      id: 1,
      name: 'Наименование',
      type: 'Заголовок',
      date: '20.12.2022, 10:30:25',
      status: 'active' as typeStatus
    },
    {
      id: 2,
      name: 'Наименование',
      type: 'Заголовок 31',
      date: '20.12.2022, 10:30:25',
      status: 'working' as typeStatus
    },
    {
      id: 3,
      name: 'Наименование',
      type: 'Заголовок 2',
      date: '20.12.2022, 10:30:25',
      status: 'active' as typeStatus
    },
    {
      id: 4,
      name: 'Наименование',
      type: 'Заголовок новый',
      date: '20.12.2022, 10:30:25',
      status: 'draft' as typeStatus
    },
    {
      id: 5,
      name: 'Наименование',
      type: 'Заголовок',
      date: '20.12.2022, 10:30:25',
      status: 'active' as typeStatus
    },
    {
      id: 6,
      name: 'Наименование тест',
      type: 'Заголовок',
      date: '20.12.2022, 10:30:25',
      status: 'pause' as typeStatus
    },
    {
      id: 7,
      name: 'Наименование',
      type: 'Заголовок',
      date: '20.12.2022, 10:30:25',
      status: 'active' as typeStatus
    }
  ];

  return (
    <div className={styles.TableAbTest}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableAbTest__grid_template}
      >
        {data?.length && data?.map(item => (
          <TableAbTestItem
            key={item?.id}
            data={item}
            styleGridTemplate={styles.TableAbTest__grid_template}
          ></TableAbTestItem>
        ))}
      </Table>
    </div>
  );
};

export default TableAbTest;
