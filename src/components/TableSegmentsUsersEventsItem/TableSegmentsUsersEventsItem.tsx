import React, { FC } from 'react';
import styles from './TableSegmentsUsersEventsItem.module.scss';
import Event, { typeEvent } from '../../ui/Event/Event';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';

interface TableSegmentsUsersEventsItemProps {
  data?: {
    id?: number,
    event?: typeEvent,
    date?: string
  },
  styleGridTemplate?: string
}

const TableSegmentsUsersEventsItem: FC<TableSegmentsUsersEventsItemProps> = ({
  data,
  styleGridTemplate
}) => (
  <TableItemShort
    styleGridTemplate={styleGridTemplate}
  >
    <div>
      <Event
        type={data?.event ?? 'send'}
      ></Event>
    </div>
    <div>{data?.date}</div>
  </TableItemShort>
);

export default TableSegmentsUsersEventsItem;
