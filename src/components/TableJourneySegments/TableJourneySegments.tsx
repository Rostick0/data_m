import React, { FC } from 'react';
import styles from './TableJourneySegments.module.scss';
import { typeStatus } from '../../ui/Status/Status';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import TableJourneySegmentsItem from '../TableJourneySegmentsItem/TableJourneySegmentsItem';

interface TableJourneySegmentsProps { }

const TableJourneySegments: FC<TableJourneySegmentsProps> = () => {
  const titles = [
    'Наименование',
    'Событие',
    ''
  ];

  const data = [
    {
      id: 1,
      name: 'Наименование',
      event: 'Заголовок'
    },
    {
      id: 2,
      name: 'Наименование',
      event: 'Заголовок'
    },
    {
      id: 3,
      name: 'Наименование',
      event: 'Заголовок'
    },
    {
      id: 4,
      name: 'Наименование',
      event: 'Заголовок'
    },
    {
      id: 5,
      name: 'Наименование',
      event: 'Заголовок'
    },
    {
      id: 6,
      name: 'Наименование тест',
      event: 'Заголовок'
    },
    {
      id: 7,
      name: 'Наименование',
      event: 'Заголовок'
    }
  ];

  return (
    <div className={styles.TableJourneySegments}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableJourneySegments__grid_template}
      >
        {data?.length && data.map(item => (
          <TableItem
            key={item.id}
          >
            <TableJourneySegmentsItem
              data={item}
              styleGridTemplate={styles.TableJourneySegments__grid_template}
            ></TableJourneySegmentsItem>
          </TableItem>
        ))}
      </Table>
    </div>
  )
};

export default TableJourneySegments;
