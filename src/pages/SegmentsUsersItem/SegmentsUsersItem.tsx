import React, { FC } from 'react';
import styles from './SegmentsUsersItem.module.scss';
import SegmentsUsersInfo from '../../components/SegmentsUsersInfo/SegmentsUsersInfo';
import TopNav from '../../components/TopNav/TopNav';

interface SegmentsUsersItemProps { }

const SegmentsUsersItem: FC<SegmentsUsersItemProps> = () => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/segments/list',
      name: 'Список сегментов'
    },
    {
      id: 2,
      icon: `/`,
      link: '/segments/users/list',
      name: 'Наименование сегмента'
    },
    {
      id: 3,
      icon: `/`,
      name: 'Пользователь'
    },
  ];

  return (
    <div className={styles.SegmentsUsersItem}>
      <TopNav
        links={links}
      ></TopNav>
      <SegmentsUsersInfo></SegmentsUsersInfo>
    </div>
  );
};

export default SegmentsUsersItem;
