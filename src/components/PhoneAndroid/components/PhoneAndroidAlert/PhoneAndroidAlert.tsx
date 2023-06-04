import React, { FC } from 'react';
import styles from './PhoneAndroidAlert.module.scss';
import PhoneAndroidAlertContent, { PhoneAndroidAlertContentProps } from '../PhoneAndroidAlertContent/PhoneAndroidAlertContent';

interface PhoneAndroidAlertProps extends PhoneAndroidAlertContentProps { }

const PhoneAndroidAlert: FC<PhoneAndroidAlertProps> = ({
  title,
  text
}) => (
  <div className={styles.PhoneAndroidAlert}>
    <div className={styles.PhoneAndroidAlert__top}>
      <span>9:41</span>
      <div className={styles.PhoneAndroidAlert__icon}>
        <svg width="13.6" height="9.6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M14.9322 0.406311H15.8512C16.4852 0.406311 16.9992 0.921311 16.9992 1.55531V9.82531C16.9992 10.4593 16.4852 10.9743 15.8512 10.9743H14.9322C14.2972 10.9743 13.7842 10.4593 13.7842 9.82531V1.55531C13.7842 0.921311 14.2972 0.406311 14.9322 0.406311Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.3375 2.70361H11.2565C11.8915 2.70361 12.4045 3.21761 12.4045 3.85261V9.82561C12.4045 10.4596 11.8915 10.9746 11.2565 10.9746H10.3375C9.70245 10.9746 9.18945 10.4596 9.18945 9.82561V3.85261C9.18945 3.21761 9.70245 2.70361 10.3375 2.70361Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.74273 5.00104H6.66173C7.29673 5.00104 7.80973 5.51504 7.80973 6.14904V9.82504C7.80973 10.459 7.29673 10.974 6.66173 10.974H5.74273C5.10773 10.974 4.59473 10.459 4.59473 9.82504V6.14904C4.59473 5.51504 5.10773 5.00104 5.74273 5.00104Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1.148 6.37939H2.067C2.702 6.37939 3.215 6.89339 3.215 7.52739V9.82539C3.215 10.4594 2.702 10.9744 2.067 10.9744H1.148C0.514 10.9744 0 10.4594 0 9.82539V7.52739C0 6.89339 0.514 6.37939 1.148 6.37939Z" fill="white" />
        </svg>
        <svg width="12.8" height="9.6" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.78408 7.00629C6.71708 7.00629 5.82708 7.73129 5.58008 8.70529L7.88808 10.9743L10.0241 8.87429C9.84408 7.81529 8.91308 7.00629 7.78408 7.00629Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.78395 3.79584C5.82895 3.79584 4.11395 4.79284 3.12695 6.29484L4.55095 7.69284C5.13795 6.51384 6.35795 5.69584 7.78395 5.69584C9.26395 5.69584 10.534 6.57284 11.092 7.82584L12.52 6.42184C11.548 4.84984 9.79295 3.79584 7.78395 3.79584Z" fill="white" />
          <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M7.7842 0.405762C4.8792 0.405762 2.3022 1.76576 0.658203 3.86776L2.0902 5.27476C3.3562 3.52476 5.4322 2.37876 7.7842 2.37876C10.1892 2.37876 12.3102 3.57376 13.5672 5.39176L15.0002 3.98476C13.3602 1.81676 10.7432 0.405762 7.7842 0.405762Z" fill="white" />
        </svg>
        <svg width="20.8" height="8.8" viewBox="0 0 26 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.972 9H4.029C3.185 9 2.5 8.316 2.5 7.472V3.528C2.5 2.685 3.185 2 4.029 2H12.972C13.816 2 14.5 2.685 14.5 3.528V7.472C14.5 8.316 13.816 9 12.972 9Z" fill="white" />
          <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M21.5 8.415C21.5 9.29 20.79 10 19.915 10H3.085C2.21 10 1.5 9.29 1.5 8.415V2.585C1.5 1.71 2.21 1 3.085 1H19.915C20.79 1 21.5 1.71 21.5 2.585V8.415ZM20.245 0H2.755C1.51 0 0.5 1.01 0.5 2.255V8.745C0.5 9.99 1.51 11 2.755 11H20.245C21.49 11 22.5 9.99 22.5 8.745V2.255C22.5 1.01 21.49 0 20.245 0Z" fill="white" />
          <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M23.25 7.5V3.5C24.078 3.5 24.75 4.172 24.75 5V6C24.75 6.829 24.078 7.5 23.25 7.5Z" fill="white" />
        </svg>
      </div>

    </div>
    <div className={styles.PhoneAndroidAlert__time}>
      09
      <br />
      41
    </div>
    <div className={styles.PhoneAndroidAlert__date}>TUE,  23 JUN</div>
    <PhoneAndroidAlertContent
      title={title}
      text={text}
    ></PhoneAndroidAlertContent>
  </div>
);

export default PhoneAndroidAlert;
