import React, { FC } from 'react';
import styles from './BroadcastChat.module.scss';
import LayoutBroadcost from '../../layout/LayoutBroadcost/LayoutBroadcost';

interface BroadcastChatProps { }

const BroadcastChat: FC<BroadcastChatProps> = () => (
  <LayoutBroadcost>
    <div className={styles.BroadcastChat}>
      BroadcastChat Component
    </div>
  </LayoutBroadcost>
);

export default BroadcastChat;
