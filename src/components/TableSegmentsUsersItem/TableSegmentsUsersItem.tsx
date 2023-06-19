import React, { FC } from 'react';
import styles from './TableSegmentsUsersItem.module.scss';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';
import { Link } from 'react-router-dom';
import TableItemIcons from '../TableItemIcons/TableItemIcons';

interface TableSegmentsUsersItemProps {
  data?: {
    id?: number | undefined,
    email?: string | undefined,
    location?: string | undefined,
    session_count?: number | undefined,
    event_count?: number | undefined
  },
  styleGridTemplate?: string | undefined
}

const TableSegmentsUsersItem: FC<TableSegmentsUsersItemProps> = ({
  data,
  styleGridTemplate
}) => (
  <TableItemShort
    styleGridTemplate={styleGridTemplate}
  >
    <Link to={'/segments/users/' + data?.id} className={styles.TableSegmentsUsersItem__email}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0015 11.821C14.5733 11.821 16.6581 9.73615 16.6581 7.16439C16.6581 4.59264 14.5733 2.50781 12.0015 2.50781C9.42978 2.50781 7.34496 4.59264 7.34496 7.16439C7.34496 9.73615 9.42978 11.821 12.0015 11.821Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 21.1344C20 17.5303 16.4144 14.6152 12 14.6152C7.58557 14.6152 4 17.5303 4 21.1344" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{data?.email}</span>
    </Link>
    <div className="">{data?.location}</div>
    <div className="">{data?.session_count ?? 0}</div>
    <div className="">{data?.event_count ?? 0}</div>
    <TableItemIcons>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="1.5" fill="#142333" fillOpacity="0.33" />
        <circle cx="12" cy="18" r="1.5" fill="#142333" fillOpacity="0.33" />
        <circle cx="24" cy="18" r="1.5" fill="#142333" fillOpacity="0.33" />
      </svg>
    </TableItemIcons>
  </TableItemShort>
);

export default TableSegmentsUsersItem;
