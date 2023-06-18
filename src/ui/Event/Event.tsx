import React, { FC } from 'react';
import styles from './Event.module.scss';

export type typeEvent = 'premium' | 'push' | 'visit' | 'send';

interface EventProps {
  type: typeEvent
}

const Event: FC<EventProps> = ({
  type
}) => {
  let colors = {
    backgroundIcon: 'var(--basic_background)',
    textColor: 'var(--brand_primary_1)',
  };
  let icon = null;
  let message = null;

  switch (type) {
    case 'premium':
      colors = {
        backgroundIcon: 'var(--green)',
        textColor: 'var(--text_primary)',
      };
      icon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5549 4.29976L15.1387 7.49359C15.3547 7.93819 15.9306 8.36463 16.4166 8.4463L19.2872 8.92718C21.123 9.23568 21.555 10.5785 20.2321 11.9032L18.0004 14.1534C17.6224 14.5345 17.4155 15.2695 17.5324 15.7957L18.1714 18.5812C18.6753 20.7861 17.5144 21.639 15.5797 20.4867L12.889 18.8807C12.403 18.5903 11.6021 18.5903 11.1072 18.8807L8.41643 20.4867C6.49065 21.639 5.32078 20.777 5.82472 18.5812L6.46365 15.7957C6.58064 15.2695 6.37366 14.5345 5.9957 14.1534L3.76395 11.9032C2.4501 10.5785 2.87305 9.23568 4.70885 8.92718L7.57953 8.4463C8.05647 8.36463 8.63241 7.93819 8.84838 7.49359L10.4322 4.29976C11.2961 2.56675 12.7 2.56675 13.5549 4.29976Z" stroke="#35BB73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      );
      message = 'Premium app sale';
      break;
    case 'push':
      icon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.037 18.8605H17.1753C16.3852 18.8605 15.6346 19.1707 15.0815 19.7311L13.3926 21.4221C12.6222 22.1926 11.3679 22.1926 10.5975 21.4221L8.90864 19.7311C8.35556 19.1707 7.59506 18.8605 6.81481 18.8605H4.96296C3.32346 18.8605 2 17.5297 2 15.8887V4.97183C2 3.3308 3.32346 2 4.96296 2H19.037C20.6765 2 22 3.3308 22 4.97183V15.8887C22 17.5197 20.6765 18.8605 19.037 18.8605Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.3111 14.9625C12.1444 15.0125 11.8667 15.0125 11.6889 14.9625C10.2444 14.5123 7 12.6618 7 9.51079C7 8.12036 8.24444 7 9.77778 7C10.6889 7 11.4889 7.39012 12 8.00031C12.5111 7.39012 13.3111 7 14.2222 7C15.7556 7 17 8.12036 17 9.51079C16.9889 12.6618 13.7556 14.5123 12.3111 14.9625Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
      message = 'Push'
      break;
    case 'send':
      icon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.14818 9.99599L12 13L18.0072 9.99599M21 9.99599V15.004C21 18.0016 19.5 20 16 20H8C4.5 20 3 18.0016 3 15.004V9.99599C3 6.99839 4.5 5 8 5H16C19.5 5 21 6.99839 21 9.99599Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
      message = 'Отправлено письмо';
      break;
    case 'visit':
      colors = {
        backgroundIcon: 'var(--green)',
        textColor: 'var(--text_primary)',
      };
      icon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.833 2.25C9.93347 2.25 7.58296 4.60051 7.58296 7.5C7.58296 7.91421 7.91875 8.25 8.33296 8.25C8.74717 8.25 9.08296 7.91421 9.08296 7.5C9.08296 5.42893 10.7619 3.75 12.833 3.75H14.5552C16.5956 3.75 18.2496 5.40406 18.2496 7.44444V16.5556C18.2496 18.5959 16.5956 20.25 14.5552 20.25H12.2705C10.5101 20.25 9.08296 18.8229 9.08296 17.0625C9.08296 16.6483 8.74717 16.3125 8.33296 16.3125C7.91875 16.3125 7.58296 16.6483 7.58296 17.0625C7.58296 19.6513 9.68163 21.75 12.2705 21.75H14.5552C17.424 21.75 19.7496 19.4244 19.7496 16.5556V7.44444C19.7496 4.57563 17.424 2.25 14.5552 2.25H12.833ZM15.5831 12.5484L12.089 16.2812C11.8065 16.5729 11.3639 16.5729 11.0907 16.2812C10.9495 16.1302 10.8835 15.9391 10.8835 15.7479C10.8835 15.5567 10.9495 15.3656 11.0907 15.2147L13.3887 12.7596H3.70611C3.31997 12.7596 2.99976 12.4176 2.99976 12.005C2.99976 11.5925 3.31997 11.2504 3.70611 11.2504H13.3982L11.0907 8.78536C10.8176 8.49357 10.8176 8.01062 11.0907 7.71884C11.3639 7.42705 11.8159 7.42705 12.089 7.71884L15.5926 11.4718C15.7244 11.6126 15.7998 11.8038 15.7998 12.005C15.7998 12.0956 15.7809 12.1761 15.7527 12.2566C15.7432 12.2666 15.7432 12.2767 15.7432 12.2868C15.7056 12.3874 15.6491 12.4779 15.5831 12.5484Z" fill="#42BB7A" />
        </svg>
      );
      message = 'Посещение';
      break;
  }

  return (
    <div className={styles.Event}>
      <div
        className={styles.Event__icon}
        style={{ backgroundColor: colors?.backgroundIcon }}
      >{icon}</div>
      <div
        className={styles.Event__message}
        style={{ color: colors?.textColor }}
      >{message}</div>
    </div>
  );
}

export default Event;
