import React, { FC } from 'react';
import styles from './TableSegmentsItem.module.scss';
import TableItemIcons from '../TableItemIcons/TableItemIcons';
import InputBox from '../../ui/InputBox/InputBox';

interface TableSegmentsItemProps {
  data?: {
    id?: number | undefined,
    name?: string | undefined,
    date?: string | undefined,
    count_companies?: number | undefined,
    count_messages?: number | undefined,
    count_tests?: number | undefined
  },
  styleGridTemplate?: string | undefined
}

const TableSegmentsItem: FC<TableSegmentsItemProps> = ({
  data,
  styleGridTemplate
}) => {
  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  return (
    <div className={styles.TableSegmentsItem + classGridTemplate}>
      <div className={styles.TableSegmentsItem__checkbox}>
        <InputBox></InputBox>
      </div>
      <div className={styles.TableSegmentsItem__name}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.0255 0C4.4105 0 2.28457 2.13012 2.28457 4.75026C2.28457 7.3204 4.29073 9.40051 6.90573 9.49052C6.98558 9.48052 7.06543 9.48052 7.12531 9.49052H7.17521H7.19518C9.75029 9.40051 11.7565 7.3204 11.7664 4.75026C11.7664 2.13012 9.6405 0 7.0255 0Z" fill="#142333" fill-opacity="0.33" />
          <path d="M12.0968 12.15C9.31215 10.2899 4.77088 10.2899 1.96624 12.15C0.698664 13 0 14.1501 0 15.3801C0 16.6102 0.698664 17.7503 1.95626 18.5903C3.35359 19.5304 5.19007 20.0004 7.02656 20.0004C8.86301 20.0004 10.6995 19.5304 12.0968 18.5903C13.3544 17.7403 14.0531 16.6002 14.0531 15.3601C14.0431 14.1301 13.3544 12.99 12.0968 12.15Z" fill="#142333" fill-opacity="0.33" />
          <path d="M17.9943 5.33833C18.154 7.27843 16.7767 8.97848 14.8703 9.20849C14.8603 9.20849 14.8603 9.20849 14.8504 9.20849H14.8204C14.7605 9.20849 14.7006 9.20849 14.6507 9.22849C13.6826 9.27849 12.7943 8.96847 12.1256 8.39844C13.1536 7.47844 13.7425 6.09837 13.6227 4.59829C13.5528 3.78824 13.2734 3.0482 12.8542 2.41817C13.2334 2.22816 13.6726 2.10815 14.1217 2.06815C16.078 1.89814 17.8247 3.35822 17.9943 5.33833Z" fill="#142333" fill-opacity="0.33" />
          <path d="M19.9894 14.5916C19.9096 15.5617 19.2908 16.4017 18.2528 16.9717C17.2547 17.5218 15.9971 17.7818 14.7495 17.7518C15.4681 17.1017 15.8873 16.2917 15.9671 15.4316C16.0669 14.1916 15.4781 13.0015 14.3003 12.0515C13.6316 11.5214 12.8531 11.1014 12.0047 10.7914C14.2105 10.1514 16.9852 10.5814 18.6919 11.9615C19.6102 12.7015 20.0793 13.6315 19.9894 14.5916Z" fill="#142333" fill-opacity="0.33" />
        </svg>
        <span>{data?.name} 123</span>
      </div>
      <div>{data?.date}</div>
      <div>{data?.count_companies ?? 0}</div>
      <div>{data?.count_messages ?? 0}</div>
      <div>{data?.count_tests ?? 0}</div>
      <TableItemIcons>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="1.5" fill="#142333" fill-opacity="0.33" />
          <circle cx="12" cy="18" r="1.5" fill="#142333" fill-opacity="0.33" />
          <circle cx="24" cy="18" r="1.5" fill="#142333" fill-opacity="0.33" />
        </svg>
      </TableItemIcons>
    </div>
  );
};

export default TableSegmentsItem;
