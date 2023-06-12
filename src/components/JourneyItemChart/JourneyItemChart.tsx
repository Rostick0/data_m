import React, { FC } from 'react';
import styles from './JourneyItemChart.module.scss';

interface JourneyItemChartProps { }

const JourneyItemChart: FC<JourneyItemChartProps> = () => (
  <div className={styles.JourneyItemChart}>
    <div className={styles.JourneyItemChart__top}>Достижение цели</div>
    <div className={styles.JourneyItemChart__center}>
      <div className={styles.JourneyItemChart__line} style={{ backgroundColor: '#3081DF', width: '100%' }}></div>
      <div className={styles.JourneyItemChart__line} style={{ backgroundColor: '#35BB73', width: '20%' }}></div>
      <ul className={styles.JourneyItemChart__progress}>
        <li className={styles.JourneyItemChart__progress_item}>0</li>
        <li className={styles.JourneyItemChart__progress_item}>10</li>
        <li className={styles.JourneyItemChart__progress_item}>20</li>
        <li className={styles.JourneyItemChart__progress_item}>30</li>
        <li className={styles.JourneyItemChart__progress_item}>40</li>
        <li className={styles.JourneyItemChart__progress_item}>50</li>
        <li className={styles.JourneyItemChart__progress_item}>60</li>
        <li className={styles.JourneyItemChart__progress_item}>70</li>
        <li className={styles.JourneyItemChart__progress_item}>80</li>
        <li className={styles.JourneyItemChart__progress_item}>90</li>
        <li className={styles.JourneyItemChart__progress_item}>100</li>
      </ul>
    </div>
    <div className={styles.JourneyItemChart__bottom}>
      <div className={styles.JourneyItemChart__item}>
        <svg width="7" height="7" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="7" height="7" rx="3.5" fill="#3081DF" />
        </svg>
        <span className={styles.JourneyItemChart__data}>
          <span className={styles.JourneyItemChart__name}>Целевая группа</span>
          <span className={styles.JourneyItemChart__weight}>
            <span>100%</span>
            <span> / </span>
            <span className="text-primary">12,423</span>
          </span>
        </span>
      </div>
      <div className={styles.JourneyItemChart__item}>
        <svg width="7" height="7" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="7" height="7" rx="3.5" fill="#35BB73" />
        </svg>
        <span className={styles.JourneyItemChart__data}>
          <span className={styles.JourneyItemChart__name}>Контрольная группа</span>
          <span className={styles.JourneyItemChart__weight}>
            <span>20%</span>
            <span> / </span>
            <span className="text-primary">12,423</span>
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default JourneyItemChart;
