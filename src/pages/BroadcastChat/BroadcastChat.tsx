import React, { FC } from 'react';
import styles from './BroadcastChat.module.scss';

interface BroadcastChatProps { }

const BroadcastChat: FC<BroadcastChatProps> = () => (
  <div className={styles.BroadcastChat}>
    BroadcastChat Component
  </div>
);

export default BroadcastChat;
