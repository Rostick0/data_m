import React, { FC } from 'react';
import styles from './JourneyItem.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import Title from '../../ui/Title/Title';
import Select from '../../ui/Select/Select';
import JourneyViewItem from '../../components/JourneyItem/JourneyItem';

interface JourneyItemProps { }

const JourneyItem: FC<JourneyItemProps> = () => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/journey/list',
      name: 'Список маршрутов'
    },
    {
      id: 2,
      icon: `/`,
      name: 'Маршрута'
    },
  ];

  return (
    <div className={styles.JourneyItem}>
      <TopNav links={links}></TopNav>
      <div className={styles.JourneyItem__container}>
        <div className={styles.JourneyItem__top}>
          <Title>Наименование маршрута</Title>
          <div className={styles.JourneyItem__total}>
            <span>Всего пользователей</span>
            <strong>12,4 тыс.</strong>
          </div>
        </div>
        <div className={styles.JourneyItem__filter}>
          <Select
            className={styles.JourneyItem__select}
            defaultValue='За последние 30 дней'
            items={[
              {
                name: 'За последние 30 дней',
                value: 30
              },
              {
                name: 'За последние 60 дней',
                value: 60
              },
              {
                name: 'За последние 90 дней',
                value: 90
              }
            ]}
          ></Select>
        </div>
      </div>
      <div className={styles.JourneyItem__content}>
        <JourneyViewItem></JourneyViewItem>
      </div>
    </div>
  );
};

export default JourneyItem;
