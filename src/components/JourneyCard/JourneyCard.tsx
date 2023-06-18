import React, { FC } from 'react';
import styles from './JourneyCard.module.scss';

export type typeJourneyIcon = 'wait' | 'arrow' | 'group';

interface JourneyCardItem {
  name?: string,
  count?: number,
  is_title?: boolean,
  icon?: typeJourneyIcon
}

interface JourneyCardProps {
  data?: {
    id?: number,
    title?: string,
    subtitle?: string,
    subtitle_count?: number,
    positionX?: string | number,
    positionY?: string | number,
    items?: Array<JourneyCardItem>
  }
}

const getSvg: FC<typeJourneyIcon> = (type) => {
  if (type === 'arrow') return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7C3 6.44772 3.44772 6 4 6H8V4.06752C8 3.6436 8.49443 3.41202 8.82009 3.68341L13.0781 7.23178C13.5579 7.63157 13.5579 8.36843 13.0781 8.76822L8.82009 12.3166C8.49443 12.588 8 12.3564 8 11.9325V10H4C3.44772 10 3 9.55228 3 9V7Z" fill="#142333" fill-opacity="0.33" />
    </svg>
  );

  if (type === 'group') return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="5" r="2" fill="#142333" fill-opacity="0.33" />
      <circle cx="5" cy="10" r="2" fill="#142333" fill-opacity="0.33" />
      <circle cx="11" cy="10" r="2" fill="#142333" fill-opacity="0.33" />
    </svg>
  );

  if (type === 'wait') return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 5.24 5.235 3 7.995 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 7.995 13C5.235 13 3 10.76 3 8ZM7.29289 9.20711L8.79289 10.7071L10.2071 9.29289L9 8.08579V5H7V8.5V8.91421L7.29289 9.20711Z" fill="#142333" fill-opacity="0.33" />
    </svg>
  );

  return <></>
}

const JourneyCard: FC<JourneyCardProps> = ({
  data
}) => {
  const stylePosition = {
    transform: `translate(${data?.positionX ?? 0}px, ${data?.positionY ?? 0}px)`
  };

  return (
    <div className={styles.JourneyCard}
      style={stylePosition}
    // style={{ transform: translateX(data?.positionX) }}
    >
      <div className={styles.JourneyCard__top}>
        <div className={styles.JourneyCard__title}>{data?.title}</div>
        <div className={styles.JourneyCard__top_circle}></div>
      </div>
      <div className={styles.JourneyCard__subtitle}>
        <div className={styles.JourneyCard__name}>{data?.subtitle}</div>
        <div className={styles.JourneyCard__value}>{data?.subtitle_count}</div>
      </div>
      {data?.items?.length && (
        <ul className={styles.JourneyCard__list}>
          {data?.items.map(item => (
            <li className={`${styles.JourneyCard__item} ${item?.is_title ? styles.JourneyCard__item_title : ''}`}>
              <div className={styles.JourneyCard__icon}>
                {item?.icon && getSvg(item?.icon)}
              </div>
              <div className={styles.JourneyCard__name}>{item?.name}</div>
              <div className={styles.JourneyCard__value}>{item?.count}</div>
            </li>
          ))}
          {/* <li className={`${styles.JourneyCard__item} ${styles.JourneyCard__item_title}`}>
            <div className={styles.JourneyCard__icon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7C3 6.44772 3.44772 6 4 6H8V4.06752C8 3.6436 8.49443 3.41202 8.82009 3.68341L13.0781 7.23178C13.5579 7.63157 13.5579 8.36843 13.0781 8.76822L8.82009 12.3166C8.49443 12.588 8 12.3564 8 11.9325V10H4C3.44772 10 3 9.55228 3 9V7Z" fill="#142333" fill-opacity="0.33" />
              </svg>
            </div>
            <div className={styles.JourneyCard__name}>Moved forward</div>
            <div className={styles.JourneyCard__value}>2 688</div>
          </li>
          <li className={`${styles.JourneyCard__item}`}>
            <div className={styles.JourneyCard__icon}></div>
            <div className={styles.JourneyCard__name}>Failed</div>
            <div className={styles.JourneyCard__value}>561</div>
          </li>
          <li className={`${styles.JourneyCard__item} ${styles.JourneyCard__item_title}`}>
            <div className={styles.JourneyCard__icon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 5.24 5.235 3 7.995 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 7.995 13C5.235 13 3 10.76 3 8ZM7.29289 9.20711L8.79289 10.7071L10.2071 9.29289L9 8.08579V5H7V8.5V8.91421L7.29289 9.20711Z" fill="#142333" fill-opacity="0.33" />
              </svg>
            </div>
            <div className={styles.JourneyCard__name}>Waiting users</div>
            <div className={styles.JourneyCard__value}>1</div>
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default JourneyCard;
