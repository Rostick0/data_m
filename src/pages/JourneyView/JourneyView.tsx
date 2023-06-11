import React, { FC } from 'react';
import styles from './JourneyView.module.scss';

interface JourneyViewProps {}

const JourneyView: FC<JourneyViewProps> = () => (
  <div className={styles.JourneyView}>
    JourneyView Component
  </div>
);

export default JourneyView;
