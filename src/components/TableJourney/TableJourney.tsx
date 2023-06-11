import React, { FC } from 'react';
import styles from './TableJourney.module.scss';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import TableJourneyItem from '../TableJourneyItem/TableJourneyItem';
import { typeStatus } from '../../ui/Status/Status';

interface TableJourneyProps { }

const TableJourney: FC<TableJourneyProps> = () => {
  const titles = [
    'Наименование',
    'Отправлено / Игнор. / Не выполнено',
    'Статус',
    ''
  ];

  const data = [
    {
      id: 1,
      name: 'Наименование',
      sent: 456,
      ignored: 45,
      failed: 5,
      status: 'active' as typeStatus,
      is_active: true,
    },
    {
      id: 2,
      name: 'Наименование',
      sent: 12,
      ignored: 0,
      failed: 0,
      status: 'working' as typeStatus,
      is_active: false,
    },
    {
      id: 3,
      name: 'Наименование',
      sent: 456,
      ignored: 45,
      failed: 5,
      status: 'active' as typeStatus,
      is_active: true,
    },
    {
      id: 4,
      name: 'Наименование',
      sent: 4312,
      ignored: 15,
      failed: 55,
      status: 'draft' as typeStatus,
      is_active: true,
    },
    {
      id: 5,
      name: 'Наименование',
      sent: 252,
      ignored: 15,
      failed: 3,
      status: 'active' as typeStatus,
      is_active: false,
    },
    {
      id: 6,
      name: 'Наименование тест',
      sent: 456,
      ignored: 45,
      failed: 5,
      status: 'pause' as typeStatus,
      is_active: true,
    },
    {
      id: 7,
      name: 'Наименование',
      sent: 45,
      ignored: 4,
      failed: 1,
      status: 'active' as typeStatus,
      is_active: true,
    }
  ];

  return (
    <div className={styles.TableJourney}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableJourney__grid_template}
      >
        {data?.length && data.map(item => (
          <TableItem
            key={item.id}
          >
            <TableJourneyItem
              data={item}
              styleGridTemplate={styles.TableJourney__grid_template}
            ></TableJourneyItem>
          </TableItem>
        ))}
      </Table>
    </div>
  );
};
export default TableJourney;
