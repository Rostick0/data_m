import React, { FC } from 'react';
import styles from './ABTest.module.scss';

interface AbTestProps {}

const AbTest: FC<AbTestProps> = () => (
  <div className={styles.AbTest}>
    AbTest Component
  </div>
);

export default AbTest;
