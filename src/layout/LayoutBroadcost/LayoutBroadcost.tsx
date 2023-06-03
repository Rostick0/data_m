import React, { FC } from 'react';
// import styles from './LayoutBroadcost.module.scss';
import LayoutDefault from '../LayoutDefault/LayoutDefault';
import TopNav from '../../components/TopNav/TopNav';

interface LayoutBroadcostProps {
  children?: React.ReactNode
}

const LayoutBroadcost: FC<LayoutBroadcostProps> = ({
  children
}) => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/broadcast/list',
      name: 'Список рассылок'
    },
    {
      id: 2,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 7H9V2.5C9 2.25 8.75 2 8.5 2H7.5C7.21875 2 7 2.25 7 2.5V7H2.5C2.21875 7 2 7.25 2 7.5V8.5C2 8.78125 2.21875 9 2.5 9H7V13.5C7 13.7812 7.21875 14 7.5 14H8.5C8.75 14 9 13.7812 9 13.5V9H13.5C13.75 9 14 8.78125 14 8.5V7.5C14 7.25 13.75 7 13.5 7Z" fill="#142333" fill-opacity="0.33"/>
      </svg>`,
      link: '/broadcast/push',
      name: 'Пуш'
    },
    {
      id: 3,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 7H9V2.5C9 2.25 8.75 2 8.5 2H7.5C7.21875 2 7 2.25 7 2.5V7H2.5C2.21875 7 2 7.25 2 7.5V8.5C2 8.78125 2.21875 9 2.5 9H7V13.5C7 13.7812 7.21875 14 7.5 14H8.5C8.75 14 9 13.7812 9 13.5V9H13.5C13.75 9 14 8.78125 14 8.5V7.5C14 7.25 13.75 7 13.5 7Z" fill="#142333" fill-opacity="0.33"/>
      </svg>`,
      link: '/broadcast/chat',
      name: 'Чат'
    },
    {
      id: 4,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 7H9V2.5C9 2.25 8.75 2 8.5 2H7.5C7.21875 2 7 2.25 7 2.5V7H2.5C2.21875 7 2 7.25 2 7.5V8.5C2 8.78125 2.21875 9 2.5 9H7V13.5C7 13.7812 7.21875 14 7.5 14H8.5C8.75 14 9 13.7812 9 13.5V9H13.5C13.75 9 14 8.78125 14 8.5V7.5C14 7.25 13.75 7 13.5 7Z" fill="#142333" fill-opacity="0.33"/>
      </svg>`,
      link: '/broadcast/sms',
      name: 'SMS'
    },
    {
      id: 5,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 7H9V2.5C9 2.25 8.75 2 8.5 2H7.5C7.21875 2 7 2.25 7 2.5V7H2.5C2.21875 7 2 7.25 2 7.5V8.5C2 8.78125 2.21875 9 2.5 9H7V13.5C7 13.7812 7.21875 14 7.5 14H8.5C8.75 14 9 13.7812 9 13.5V9H13.5C13.75 9 14 8.78125 14 8.5V7.5C14 7.25 13.75 7 13.5 7Z" fill="#142333" fill-opacity="0.33"/>
      </svg>`,
      link: '/broadcast/email',
      name: 'E-mail'
    }
  ];

  return (
    <LayoutDefault>
      <TopNav links={links}></TopNav>
      {children}
    </LayoutDefault>
  );
};

export default LayoutBroadcost;
