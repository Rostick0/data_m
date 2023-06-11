import React, { FC } from 'react';
import styles from './JourneyItem.module.scss';

interface JourneyItemProps {}

const JourneyItem: FC<JourneyItemProps> = () => (
  <div className={styles.JourneyItem}>
    JourneyItem Component
  </div>
);

export default JourneyItem;
