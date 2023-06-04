import React, { FC } from 'react';
import styles from './PhoneIphone.module.scss';

interface PhoneIphoneProps {
  children?: React.ReactNode | undefined
}

const PhoneIphone: FC<PhoneIphoneProps> = ({
  children
}) => (
  <div className={styles.PhoneIphone}
  >
    <div className={styles.PhoneIphone__content}>
      {/* <div style={{ background: 'red', width: '100%', height: '100%' }}></div> */}
      {children}
    </div>
  </div>
);

export default PhoneIphone;
