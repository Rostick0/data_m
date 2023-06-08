import React, { FC } from 'react';
import styles from './TableTemplate.module.scss';

interface TableTemplateProps {}

const TableTemplate: FC<TableTemplateProps> = () => (
  <div className={styles.TableTemplate}>
    TableTemplate Component
  </div>
);

export default TableTemplate;
