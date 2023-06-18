import React, { FC } from 'react';
import TableItemIcons from '../TableItemIcons/TableItemIcons';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';

interface TableJourneySegmentsItemProps {
  data?: {
    id: number | undefined,
    name?: string | undefined,
    event?: string | undefined
  },
  styleGridTemplate?: string | undefined
}

const TableJourneySegmentsItem: FC<TableJourneySegmentsItemProps> = ({
  data,
  styleGridTemplate
}) => {

  return (
    <TableItemShort
      styleGridTemplate={styleGridTemplate}
    >
      <div>{data?.name}</div>
      <div>{data?.event}</div>
      <TableItemIcons>
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4062 1.78125L15.2188 0.59375C14.8438 0.21875 14.3125 0 13.8125 0C13.3125 0 12.7812 0.21875 12.4062 0.59375L10.0625 2.9375L9 4L1.375 11.625L1 15.1875C0.9375 15.625 1.28125 16 1.71875 16C1.75 16 1.78125 16 1.8125 16L5.375 15.625L13 8L14.0625 6.9375L16.4062 4.59375C17.1875 3.8125 17.1875 2.5625 16.4062 1.78125ZM4.6875 14.1875L2.59375 14.4062L2.8125 12.3125L10.0312 5.0625L11 4.09375L12.9062 6L11.9375 6.96875L4.6875 14.1875ZM15.3438 3.53125L13.9688 4.9375L12.0625 3.03125L13.4688 1.65625C13.5938 1.53125 13.75 1.5 13.8125 1.5C13.875 1.5 14.0312 1.53125 14.1562 1.65625L15.3438 2.84375C15.5312 3.03125 15.5312 3.34375 15.3438 3.53125Z" fill="#142333" fillOpacity="0.33" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.375 13H10.125C10.3125 13 10.5 12.8438 10.5 12.625V5.875C10.5 5.6875 10.3125 5.5 10.125 5.5H9.375C9.15625 5.5 9 5.6875 9 5.875V12.625C9 12.8438 9.15625 13 9.375 13ZM14.5 2.5H11.9062L10.8438 0.75C10.5938 0.34375 10.0312 0 9.5625 0H6.40625C5.9375 0 5.375 0.34375 5.125 0.75L4.0625 2.5H1.5C1.21875 2.5 1 2.75 1 3V3.5C1 3.78125 1.21875 4 1.5 4H2V14.5C2 15.3438 2.65625 16 3.5 16H12.5C13.3125 16 14 15.3438 14 14.5V4H14.5C14.75 4 15 3.78125 15 3.5V3C15 2.75 14.75 2.5 14.5 2.5ZM6.34375 1.59375C6.375 1.5625 6.46875 1.5 6.5 1.5H6.53125H9.46875C9.5 1.5 9.59375 1.5625 9.625 1.59375L10.1562 2.5H5.8125L6.34375 1.59375ZM12.5 14.5H3.5V4H12.5V14.5ZM5.875 13H6.625C6.8125 13 7 12.8438 7 12.625V5.875C7 5.6875 6.8125 5.5 6.625 5.5H5.875C5.65625 5.5 5.5 5.6875 5.5 5.875V12.625C5.5 12.8438 5.65625 13 5.875 13Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </TableItemIcons>
    </TableItemShort>
  );
}

export default TableJourneySegmentsItem;
