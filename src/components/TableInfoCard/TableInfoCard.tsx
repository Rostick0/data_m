import React, { FC } from 'react';
import styles from './TableInfoCard.module.scss';

interface TableInfoCardProps {}

const TableInfoCard: FC<TableInfoCardProps> = () => (
  <div className={styles.TableInfoCard}>
    TableInfoCard Component
  </div>
);

export default TableInfoCard;
