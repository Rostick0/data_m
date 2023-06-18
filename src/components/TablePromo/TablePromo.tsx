import React, { FC } from 'react';
import styles from './TablePromo.module.scss';
import Status, { typeStatus } from '../../ui/Status/Status';
import Table from '../Table/Table';
import TablePromoItem from '../TablePromoItem/TablePromoItem';
import TableItem from '../Table/components/TableItem/TableItem';

interface TablePromoProps { }

const TablePromo: FC<TablePromoProps> = () => {
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
    <div className={styles.TablePromo}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TablePromo__grid_template}
      >
        {data?.length && data.map(item => (
          <TableItem
            key={item?.id}
          >
            <TablePromoItem
              styleGridTemplate={styles.TablePromo__grid_template}
              data={item}
            ></TablePromoItem>
          </TableItem>
        ))}
      </Table>
    </div>
  );
};

export default TablePromo;
