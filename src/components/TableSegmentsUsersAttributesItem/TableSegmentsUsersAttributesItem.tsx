import React, { FC } from 'react';
import styles from './TableSegmentsUsersAttributesItem.module.scss';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';

interface TableSegmentsUsersAttributesItemProps {
  data?: {
    id?: number | undefined,
    name: string | undefined,
    value: string | undefined
  },
  styleGridTemplate?: string | undefined
}

const TableSegmentsUsersAttributesItem: FC<TableSegmentsUsersAttributesItemProps> = ({
  data,
  styleGridTemplate
}) => (
  <TableItemShort
    styleGridTemplate={styleGridTemplate}
  >
    <div className="">{data?.name}</div>
    <div className="">{data?.value}</div>
  </TableItemShort>
);

export default TableSegmentsUsersAttributesItem;
