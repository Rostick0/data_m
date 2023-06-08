import React, { FC } from 'react';
import styles from './TableTemplateItem.module.scss';

interface TableTemplateItemProps {}

const TableTemplateItem: FC<TableTemplateItemProps> = () => (
  <div className={styles.TableTemplateItem}>
    TableTemplateItem Component
  </div>
);

export default TableTemplateItem;
