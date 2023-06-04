import React, { FC } from 'react';
import styles from './PhoneAndroidChat.module.scss';

interface PhoneAndroidChatProps {}

const PhoneAndroidChat: FC<PhoneAndroidChatProps> = () => (
  <div className={styles.PhoneAndroidChat}>
    PhoneAndroidChat Component
  </div>
);

export default PhoneAndroidChat;
