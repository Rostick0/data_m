import React, { FC } from 'react';
import styles from './TableSegmentsUsersEvents.module.scss';
import Table from '../Table/Table';
import TableSegmentsUsersEventsItem from '../TableSegmentsUsersEventsItem/TableSegmentsUsersEventsItem';
import { typeEvent } from '../../ui/Event/Event';

interface TableSegmentsUsersEventsProps { }

const TableSegmentsUsersEvents: FC<TableSegmentsUsersEventsProps> = () => {
  const titles = [
    'Событие',
    'Дата и время'
  ];

  const data = [
    {
      id: 1,
      event: 'push' as typeEvent,
      date: '12 апр 2023, 20:56:21'
    },
    {
      id: 2,
      event: 'premium' as typeEvent,
      date: '12 апр 2023, 20:56:21'
    },
    {
      id: 3,
      event: 'send' as typeEvent,
      date: '12 апр 2023, 20:56:21'
    },
    {
      id: 4,
      event: 'visit' as typeEvent,
      date: '12 апр 2023, 20:56:21'
    },
    {
      id: 5,
      event: 'send' as typeEvent,
      date: '12 апр 2023, 20:56:21'
    }
  ];

  return (
    <div className={styles.TableSegmentsUsersEvents}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableSegmentsUsersEvents__grid_template}
      >
        {data?.length && data.map(item => (
          <TableSegmentsUsersEventsItem
            key={item?.id}
            data={item}
            styleGridTemplate={styles.TableSegmentsUsersEvents__grid_template}
          ></TableSegmentsUsersEventsItem>
        ))}
      </Table>
    </div>
  );
};

export default TableSegmentsUsersEvents;
