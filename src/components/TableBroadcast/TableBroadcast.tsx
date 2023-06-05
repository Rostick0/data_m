import React, { FC } from 'react';
import styles from './TableBroadcast.module.scss';
import Table from '../Table/Table';
import TableBroadcastItem from '../TableBroadcastItem/TableBroadcastItem';
import TableItem from '../Table/components/TableItem/TableItem';

interface TableBroadcastProps { }

const TableBroadcast: FC<TableBroadcastProps> = () => {
  const titles = [
    'Наименование',
    'Тип',
    'Польз. в проц./всего',
    'Теги',
    'Дата и время',
    'Статус',
    'Папка',
    ''
  ];

  return (
    <div className={styles.TableBroadcast}>
      <Table
        styleGridTemplate={styles.TableBroadcast__grid_template}
        titles={titles}
      >
        <TableItem>
          <TableBroadcastItem></TableBroadcastItem>
        </TableItem>
      </Table>
    </div>
  );
}

export default TableBroadcast;
