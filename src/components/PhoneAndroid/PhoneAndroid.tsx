import React, { FC } from 'react';
import styles from './PhoneAndroid.module.scss';

interface PhoneAndroidProps {
  children?: React.ReactNode | undefined
}

const PhoneAndroid: FC<PhoneAndroidProps> = ({
  children
}) => (
  <div className={styles.PhoneAndroid}
  >
    <div className={styles.PhoneAndroid__content}>
      {/* <div style={{ background: 'red', width: '100%', height: '100%' }}></div> */}
      {children}
    </div>
  </div>
);

export default PhoneAndroid;
