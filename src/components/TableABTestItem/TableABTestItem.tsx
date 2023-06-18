import React, { FC } from 'react';
import styles from './TableABTestItem.module.scss';

interface TableAbTestItemProps {}

const TableAbTestItem: FC<TableAbTestItemProps> = () => (
  <div className={styles.TableAbTestItem}>
    TableAbTestItem Component
  </div>
);

export default TableAbTestItem;
