import React, { FC } from 'react';
import styles from './SegmentUsersList.module.scss';

interface SegmentUsersListProps {}

const SegmentUsersList: FC<SegmentUsersListProps> = () => (
  <div className={styles.SegmentUsersList}>
    SegmentUsersList Component
  </div>
);

export default SegmentUsersList;
