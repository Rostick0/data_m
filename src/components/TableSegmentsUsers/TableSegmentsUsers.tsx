import React, { FC } from 'react';
import styles from './TableSegmentsUsers.module.scss';
import Table from '../Table/Table';
import TableSegmentsUsersItem from '../TableSegmentsUsersItem/TableSegmentsUsersItem';

interface TableSegmentsUsersProps { }

const TableSegmentsUsers: FC<TableSegmentsUsersProps> = () => {
  const titles = [
    'Пользователь',
    'Расположение',
    'Сессии',
    'События',
    '',
  ];

  const data = [
    {
      id: 1,
      email: 'email@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 842,
      event_count: 4
    },
    {
      id: 2,
      email: 'my@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 1,
      event_count: 43
    },
    {
      id: 3,
      email: 'email@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 842,
      event_count: 4
    },
    {
      id: 4,
      email: 'newsdg@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 3,
      event_count: 32
    },
    {
      id: 5,
      email: 'email@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 842,
      event_count: 4
    },
    {
      id: 6,
      email: 'email@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 842,
      event_count: 4
    },
    {
      id: 7,
      email: 'email@email.ru',
      location: 'Сан-Франциско, Калифорния, США',
      session_count: 842,
      event_count: 4
    },
    {
      id: 8,
      email: 'email@email.ru',
      location: 'Москва, Россия',
      session_count: 842,
      event_count: 4
    }
  ];

  return (
    <div className={styles.TableSegmentsUsers}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableSegmentsUsers__grid_template}
      >
        {data?.length && data?.map(item => (
          <TableSegmentsUsersItem
            key={item?.id}
            data={item}
            styleGridTemplate={styles.TableSegmentsUsers__grid_template}
          ></TableSegmentsUsersItem>
        ))}
      </Table>
    </div>
  );
}

export default TableSegmentsUsers;
