import React, { FC, useState } from 'react';
import styles from './JourneySegmentsList.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import TableJourneySegments from '../../components/TableJourneySegments/TableJourneySegments';
import ModalJourney from '../../components/ModalJourney/ModalJourney';

interface JourneySegmentsListProps { }

const JourneySegmentsList: FC<JourneySegmentsListProps> = () => {
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
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/journey/segments',
      name: 'Сегменты'
    },
  ];

  const [isActiveCreate, setIsActiveCreate] = useState(false);

  return (
    <>
      <TopNav links={links}></TopNav>
      <div className={styles.JourneySegmentsList}>
        <div className={styles.JourneySegmentsList__top}>
          <Title>
            <div className={styles.JourneySegmentsList__title}>
              <div>Сегменты</div>
              <Button
                className='button_with_icon'
                onClick={() => setIsActiveCreate(true)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white" />
                </svg>
                <span>Добавить</span>
              </Button>
            </div>
          </Title>
          <div className={styles.JourneySegmentsList__filter}>
            <Input placeholder="Поиск по наименованию"></Input>
          </div>
        </div>
        <TableJourneySegments></TableJourneySegments>
      </div>
      {isActiveCreate
        &&
        (<ModalJourney
          title="Добавление сегмента"
          close={() => setIsActiveCreate(false)}
        ></ModalJourney>)}
    </>
  );
};

export default JourneySegmentsList;
