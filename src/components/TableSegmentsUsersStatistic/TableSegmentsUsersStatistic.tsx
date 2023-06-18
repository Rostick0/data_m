import React, { FC } from 'react';
import styles from './TableSegmentsUsersStatistic.module.scss';
import Table from '../Table/Table';
import TableSegmentsUsersStatisticItem from '../TableSegmentsUsersStatisticItem/TableSegmentsUsersStatisticItem';

interface TableSegmentsUsersStatisticProps { }

const TableSegmentsUsersStatistic: FC<TableSegmentsUsersStatisticProps> = () => {
  const titles = [
    'Наименование',
    'Версия приложения',
    'Последнее посещение',
    'iOS push-токен'
  ];

  const data = [
    {
      id: 1,
      name: 'iPhone iOs 12.1',
      version: '1.10',
      last_visit: 'Последнее посещение',
      token: ''
    }
  ];

  return (
    <div className={styles.TableSegmentsUsersStatistic}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableSegmentsUsersStatistic__grid_template}
      >
        {data?.length && data.map(item => (
          <TableSegmentsUsersStatisticItem
            key={item?.id}
            data={item}
            styleGridTemplate={styles.TableSegmentsUsersStatistic__grid_template}
          ></TableSegmentsUsersStatisticItem>
        ))}
      </Table>
    </div>
  );
};

export default TableSegmentsUsersStatistic;
