import React, { FC } from 'react';
import styles from './TableSegmentsUsersAttributes.module.scss';
import Table from '../Table/Table';
import TableSegmentsUsersAttributesItem from '../TableSegmentsUsersAttributesItem/TableSegmentsUsersAttributesItem';

interface TableSegmentsUsersAttributesProps { }

const TableSegmentsUsersAttributes: FC<TableSegmentsUsersAttributesProps> = () => {
  const data = [
    {
      id: 1,
      name: 'Название атрибута',
      value: 'Значение атрибута'
    },
    {
      id: 2,
      name: 'Название атрибута',
      value: 'Значение атрибута'
    },
    {
      id: 3,
      name: 'Название атрибута',
      value: 'Значение атрибута'
    },
    {
      id: 4,
      name: 'Название атрибута',
      value: 'Значение атрибута'
    },
    {
      id: 5,
      name: 'Название атрибута',
      value: 'Значение атрибута'
    }
  ];

  return (
    <div className={styles.TableSegmentsUsersAttributes}>
      <Table
        styleGridTemplate={styles.TableSegmentsUsersAttributes__grid_template}
      >
        {data?.length && data.map(item => (
          <TableSegmentsUsersAttributesItem
            key={item?.id}
            data={item}
            styleGridTemplate={styles.TableSegmentsUsersAttributes__grid_template}
          ></TableSegmentsUsersAttributesItem>
        ))}
      </Table>
    </div>
  );
}

export default TableSegmentsUsersAttributes;
