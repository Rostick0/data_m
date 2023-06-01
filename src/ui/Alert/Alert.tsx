import React, { FC } from 'react';
import styles from './Alert.module.scss';

interface AlertProps {}

const Alert: FC<AlertProps> = () => (
  <div className={styles.Alert}>
    Alert Component
  </div>
);

export default Alert;
