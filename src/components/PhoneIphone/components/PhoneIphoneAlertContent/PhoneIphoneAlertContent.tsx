import React, { FC } from 'react';
import styles from './PhoneIphoneAlertContent.module.scss';

export interface PhoneIphoneAlertContentProps {
  title?: string | undefined,
  text?: string | undefined
}

const PhoneIphoneAlertContent: FC<PhoneIphoneAlertContentProps> = ({
  title,
  text
}) => (
  <div className={styles.PhoneIphoneAlertContent}>
    <svg className={styles.PhoneIphoneAlertContent__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18.5C12.4167 18.5 12.7707 18.354 13.062 18.062C13.354 17.7707 13.5 17.4167 13.5 17H10.5C10.5 17.4167 10.646 17.7707 10.938 18.062C11.2293 18.354 11.5833 18.5 12 18.5ZM7 16H17V14H16V11.4C16 10.3833 15.7377 9.454 15.213 8.612C14.6877 7.77067 13.95 7.23333 13 7V5.5H11V7C10.05 7.23333 9.31267 7.77067 8.788 8.612C8.26267 9.454 8 10.3833 8 11.4V14H7V16ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z" fill="#1965BF" />
    </svg>
    <div className={styles.PhoneIphoneAlertContent__content}>
      <div className={styles.PhoneIphoneAlertContent__content_top}>
        <div className={styles.PhoneIphoneAlertContent__title}>{title ?? 'Title'}</div>
        <div className={styles.PhoneIphoneAlertContent__date}>Now</div>
      </div>
      <div className={styles.PhoneIphoneAlertContent__text}>{text ?? 'Notification'}</div>
    </div>
  </div>
);

export default PhoneIphoneAlertContent;
