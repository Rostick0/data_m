import React, { FC } from 'react';
import styles from './ABTest.module.scss';

interface ABTestProps {}

const ABTest: FC<ABTestProps> = () => (
  <div className={styles.ABTest}>
    ABTest Component
  </div>
);

export default ABTest;
