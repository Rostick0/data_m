import React, { FC } from 'react';
import styles from './JourneyView.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import Button from '../../ui/Button/Button';
import JourneyAddButton from '../../components/JourneyAddButton/JourneyAddButton';
import JourneyCard, { typeJourneyIcon } from '../../components/JourneyCard/JourneyCard';

interface JourneyViewProps { }

const JourneyView: FC<JourneyViewProps> = () => {
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
      name: 'Наименование маршрута'
    },
  ];

  const jorneyList = {
    id: 1,
    title: 'Message upon subscription',
    subtitle: 'Entered node',
    subtitle_count: 2707,
    items: [
      {
        name: 'Moved forward',
        count: 2688,
        is_title: true,
        icon: 'arrow' as typeJourneyIcon
      },
      {
        name: 'Failed',
        count: 561,
      },
      {
        name: 'Sent',
        count: 2127,
      },
      {
        name: 'Ignored',
        count: 0,
      },
      {
        name: 'Waiting users',
        count: 1,
        is_title: true,
        icon: 'wait' as typeJourneyIcon
      },
      {
        name: 'Delay',
        count: 0,
      },
      {
        name: 'Waiting',
        count: 1,
      },
    ],
    positionX: 100,
    positionY: 100,
  }

  return (
    <div className={styles.JourneyView}>
      <TopNav links={links}>
        <Button className='button_with_icon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8.49985L10.5 16.9998L5 11.4998L6.41 10.0898L10.5 14.1698L17.59 7.08985L19 8.49985Z" fill="white" />
          </svg>
          <span>Сохранить</span>
        </Button>
      </TopNav>
      <div className={styles.JourneyView__content + ' background-points'}>
        <JourneyCard data={jorneyList}></JourneyCard>
        <JourneyAddButton></JourneyAddButton>
      </div>
    </div>
  );
};

export default JourneyView;
