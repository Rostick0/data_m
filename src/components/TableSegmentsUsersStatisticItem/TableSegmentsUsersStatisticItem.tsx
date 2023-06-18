import React, { FC } from 'react';
import styles from './TableSegmentsUsersStatisticItem.module.scss';
import TableItemShort from '../Table/components/TableItemShort/TableItemShort';

interface TableSegmentsUsersStatisticItemProps {
  data?: {
    id?: number | undefined,
    name?: string | undefined,
    version?: string | undefined,
    last_visit?: string | undefined,
    token?: string | undefined
  },
  styleGridTemplate?: string | undefined
}

const TableSegmentsUsersStatisticItem: FC<TableSegmentsUsersStatisticItemProps> = ({
  data,
  styleGridTemplate
}) => (
  <TableItemShort
    styleGridTemplate={styleGridTemplate}
  >
    <div className={styles.TableSegmentsUsersStatisticItem__name}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.02548 2C6.41048 2 4.28455 4.13012 4.28455 6.75026C4.28455 9.3204 6.29071 11.4005 8.90571 11.4905C8.98555 11.4805 9.0654 11.4805 9.12529 11.4905H9.17519H9.19515C11.7503 11.4005 13.7564 9.3204 13.7664 6.75026C13.7664 4.13012 11.6405 2 9.02548 2Z" fill="#142333" fillOpacity="0.33" />
        <path d="M14.0968 14.15C11.3122 12.2899 6.77088 12.2899 3.96624 14.15C2.69866 15 2 16.1501 2 17.3801C2 18.6102 2.69866 19.7503 3.95626 20.5903C5.35359 21.5304 7.19007 22.0004 9.02656 22.0004C10.863 22.0004 12.6995 21.5304 14.0968 20.5903C15.3544 19.7403 16.0531 18.6002 16.0531 17.3601C16.0431 16.1301 15.3544 14.99 14.0968 14.15Z" fill="#142333" fillOpacity="0.33" />
        <path d="M19.9944 7.33833C20.1541 9.27843 18.7767 10.9785 16.8704 11.2085C16.8604 11.2085 16.8604 11.2085 16.8504 11.2085H16.8205C16.7606 11.2085 16.7007 11.2085 16.6508 11.2285C15.6826 11.2785 14.7943 10.9685 14.1256 10.3984C15.1536 9.47844 15.7425 8.09837 15.6227 6.59829C15.5529 5.78824 15.2734 5.0482 14.8542 4.41817C15.2335 4.22816 15.6727 4.10815 16.1218 4.06815C18.0781 3.89814 19.8247 5.35822 19.9944 7.33833Z" fill="#142333" fillOpacity="0.33" />
        <path d="M21.9895 16.5916C21.9096 17.5617 21.2908 18.4017 20.2528 18.9717C19.2547 19.5218 17.9971 19.7818 16.7495 19.7518C17.4681 19.1017 17.8873 18.2917 17.9672 17.4316C18.067 16.1916 17.4781 15.0015 16.3004 14.0515C15.6316 13.5214 14.8531 13.1014 14.0048 12.7914C16.2105 12.1514 18.9852 12.5814 20.692 13.9615C21.6102 14.7015 22.0793 15.6315 21.9895 16.5916Z" fill="#142333" fillOpacity="0.33" />
      </svg>
      <div>{data?.name ?? '—'}</div>
    </div>
    <div>{data?.version ?? '—'}</div>
    <div>{data?.last_visit ?? '—'}</div>
    <div>{data?.token ?? '—'}</div>
  </TableItemShort>
);

export default TableSegmentsUsersStatisticItem;
