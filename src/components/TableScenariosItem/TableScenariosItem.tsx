import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Status, { typeStatus } from '../../ui/Status/Status';
import TableItemIcons from '../TableItemIcons/TableItemIcons';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';

interface TableScenariosItemProps {
  data?: {
    id?: number | undefined,
    name?: string | undefined,
    type?: string | undefined
    statistic?: string | undefined,
    status?: typeStatus | undefined,
  }
  styleGridTemplate?: string | undefined
}

const TableScenariosItem: FC<TableScenariosItemProps> = ({
  data,
  styleGridTemplate
}) => {
  return (
    <TableItemShort
    styleGridTemplate={styleGridTemplate}
    >
      <Link to={'/scenarios/view'}>{data?.name}</Link>
      <div>{data?.type}</div>
      <div>{data?.status}</div>
      <div>
        <Status type={data?.status ?? 'draft'}></Status>
      </div>
      <TableItemIcons>
        {data?.status === 'active' ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.53125 14.25 1.75 11.4688 1.75 8C1.75 4.5625 4.53125 1.75 8 1.75C11.4375 1.75 14.25 4.5625 14.25 8C14.25 11.4688 11.4375 14.25 8 14.25ZM11 5.5C11 5.25 10.75 5 10.5 5H9C8.71875 5 8.5 5.25 8.5 5.5V10.5C8.5 10.7812 8.71875 11 9 11H10.5C10.75 11 11 10.7812 11 10.5V5.5ZM7.5 5.5C7.5 5.25 7.25 5 7 5H5.5C5.21875 5 5 5.25 5 5.5V10.5C5 10.7812 5.21875 11 5.5 11H7C7.25 11 7.5 10.7812 7.5 10.5V5.5Z" fill="#142333" fillOpacity="0.33" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0781 7.08398L4.14062 1.80273C3.4043 1.37109 2.3125 1.80273 2.3125 2.84375V13.4062C2.3125 14.3711 3.32812 14.9551 4.14062 14.4727L13.0781 9.19141C13.8652 8.70898 13.8652 7.56641 13.0781 7.08398Z" fill="#142333" fillOpacity="0.33" />
          </svg>
        )}
        <svg width="16" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4062 1.78125L15.2188 0.59375C14.8438 0.21875 14.3125 0 13.8125 0C13.3125 0 12.7812 0.21875 12.4062 0.59375L10.0625 2.9375L9 4L1.375 11.625L1 15.1875C0.9375 15.625 1.28125 16 1.71875 16C1.75 16 1.78125 16 1.8125 16L5.375 15.625L13 8L14.0625 6.9375L16.4062 4.59375C17.1875 3.8125 17.1875 2.5625 16.4062 1.78125ZM4.6875 14.1875L2.59375 14.4062L2.8125 12.3125L10.0312 5.0625L11 4.09375L12.9062 6L11.9375 6.96875L4.6875 14.1875ZM15.3438 3.53125L13.9688 4.9375L12.0625 3.03125L13.4688 1.65625C13.5938 1.53125 13.75 1.5 13.8125 1.5C13.875 1.5 14.0312 1.53125 14.1562 1.65625L15.3438 2.84375C15.5312 3.03125 15.5312 3.34375 15.3438 3.53125Z" fill="#142333" fillOpacity="0.33" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.375 13H10.125C10.3125 13 10.5 12.8438 10.5 12.625V5.875C10.5 5.6875 10.3125 5.5 10.125 5.5H9.375C9.15625 5.5 9 5.6875 9 5.875V12.625C9 12.8438 9.15625 13 9.375 13ZM14.5 2.5H11.9062L10.8438 0.75C10.5938 0.34375 10.0312 0 9.5625 0H6.40625C5.9375 0 5.375 0.34375 5.125 0.75L4.0625 2.5H1.5C1.21875 2.5 1 2.75 1 3V3.5C1 3.78125 1.21875 4 1.5 4H2V14.5C2 15.3438 2.65625 16 3.5 16H12.5C13.3125 16 14 15.3438 14 14.5V4H14.5C14.75 4 15 3.78125 15 3.5V3C15 2.75 14.75 2.5 14.5 2.5ZM6.34375 1.59375C6.375 1.5625 6.46875 1.5 6.5 1.5H6.53125H9.46875C9.5 1.5 9.59375 1.5625 9.625 1.59375L10.1562 2.5H5.8125L6.34375 1.59375ZM12.5 14.5H3.5V4H12.5V14.5ZM5.875 13H6.625C6.8125 13 7 12.8438 7 12.625V5.875C7 5.6875 6.8125 5.5 6.625 5.5H5.875C5.65625 5.5 5.5 5.6875 5.5 5.875V12.625C5.5 12.8438 5.65625 13 5.875 13Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </TableItemIcons>
    </TableItemShort>
  );
};

export default TableScenariosItem;
