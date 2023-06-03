import React, { FC } from 'react';
import styles from './Status.module.scss';

interface StatusProps {
  type: 'working' | 'complete' | 'active' | 'draft' | 'pause' | 'cancel'
}

const Status: FC<StatusProps> = ({
  type
}) => {
  let statusStyle = '';
  let statusText = '';

  switch (type) {
    case 'working':
      statusStyle = ' ' + styles['Status__style_blue'];
      statusText = 'В процессе';
      break;
    case 'complete':
      statusStyle = ' ' + styles['Status__style_green'];
      statusText = 'Завершено';
      break;
    case 'active':
      statusStyle = ' ' + styles['Status__style_green'];
      statusText = 'Активно';
      break;
    case 'draft':
      statusStyle = ' ' + styles['Status__style_grey'];
      statusText = 'Черновик';
      break;
    case 'pause':
      statusStyle = ' ' + styles['Status__style_grey'];
      statusText = 'На паузе';
      break;
    case 'cancel':
      statusStyle = ' ' + styles['Status__style_orange'];
      statusText = 'Отменено';
      break;
  }

  return (
    <div className={styles.Status + statusStyle}>{statusText}</div>
  );
}

export default Status;
