import React, { FC } from 'react';
import styles from './ABTestList.module.scss';

interface AbTestListProps {}

const AbTestList: FC<AbTestListProps> = () => (
  <div className={styles.AbTestList}>
    AbTestList Component
  </div>
);

export default AbTestList;
