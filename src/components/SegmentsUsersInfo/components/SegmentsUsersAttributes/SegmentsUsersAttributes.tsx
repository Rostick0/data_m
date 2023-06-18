import React, { FC } from 'react';
import styles from './SegmentsUsersAttributes.module.scss';
import TableSegmentsUsersAttributes from '../../../TableSegmentsUsersAttributes/TableSegmentsUsersAttributes';

interface SegmentsUsersAttributesProps {}

const SegmentsUsersAttributes: FC<SegmentsUsersAttributesProps> = () => (
  <div className={styles.SegmentsUsersAttributes}>
    <TableSegmentsUsersAttributes></TableSegmentsUsersAttributes>
  </div>
);

export default SegmentsUsersAttributes;
