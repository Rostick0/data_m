import React, { FC } from 'react';
import styles from './JourneyItem.module.scss';
import JourneyItemChart from '../JourneyItemChart/JourneyItemChart';
import JourneyItemChartTrends from '../JourneyItemChartTrends/JourneyItemChartTrends';

interface JourneyItemProps { }

const JourneyItem: FC<JourneyItemProps> = () => (
  <div className={styles.JourneyItem}>
    <div className={styles.JourneyItem__table}>
      <div className={styles.JourneyItem__table_item + ' ' + styles.JourneyItem__table_titles}>
        <div>Наименование группы</div>
        <div>Заходы</div>
        <div>Цели, всего</div>
        <div>Цель: Наименование цели</div>
        <div>Цель: Наименование цели</div>
        <div>Время вышло</div>
        <div>Вынужденный выход</div>
      </div>
      <div className={styles.JourneyItem__table_item}>
        <div>Целевая группа</div>
        <div>345 667</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>0</div>
      </div>
      <div className={styles.JourneyItem__table_item}>
        <div>Контрольная группа</div>
        <div>345 667</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>56 788</div>
        <div>0</div>
      </div>
      <div className={styles.JourneyItem__table_item + ' ' + styles.JourneyItem__table_item_total}>
        <strong>Всего</strong>
        <strong>345 667</strong>
        <strong>56 788</strong>
        <strong>56 788</strong>
        <strong>56 788</strong>
        <strong>56 788</strong>
        <strong>0</strong>
      </div>
    </div>
    <div className={styles.JourneyItem__stats}>
      <JourneyItemChart></JourneyItemChart>
      <JourneyItemChartTrends></JourneyItemChartTrends>
    </div>
  </div>
);

export default JourneyItem;
