import React, { FC } from 'react';
import styles from './TableScenarios.module.scss';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import TableScenariosItem from '../TableScenariosItem/TableScenariosItem';
import { typeStatus } from '../../ui/Status/Status';

interface TableScenariosProps { }

const TableScenarios: FC<TableScenariosProps> = () => {
  const titles = [
    'Наименование',
    'Тип',
    'Статистика',
    'Статус',
    ''
  ];

  const data = [
    {
      id: 1,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'active' as typeStatus,
    },
    {
      id: 2,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'working' as typeStatus,
    },
    {
      id: 3,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'active' as typeStatus,
    },
    {
      id: 4,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'draft' as typeStatus,
    },
    {
      id: 5,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'active' as typeStatus,
    },
    {
      id: 6,
      name: 'Наименование тест',
      type: 'Заголовок',
      statistic: '—',
      status: 'pause' as typeStatus,
    },
    {
      id: 7,
      name: 'Наименование',
      type: 'Заголовок',
      statistic: '—',
      status: 'active' as typeStatus,
    }
  ];

  return (
    <div className={styles.TableScenarios}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableScenarios__grid_template}
      >
        {data?.length && data.map(item => (<TableItem>
          <TableScenariosItem
            data={item}
            styleGridTemplate={styles.TableScenarios__grid_template}
          ></TableScenariosItem>
        </TableItem>))
        }
      </Table>
    </div>
  );
};

export default TableScenarios;
