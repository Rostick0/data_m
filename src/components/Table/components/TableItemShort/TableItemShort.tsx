import React, { FC } from 'react';
import styles from './TableItemShort.module.scss';

interface TableItemShortProps {
  styleGridTemplate?: string,
  children?: React.ReactNode
}

const TableItemShort: FC<TableItemShortProps> = ({
  styleGridTemplate,
  children
}) => {
  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';
  return (
    <div className={styles.TableItemShort + classGridTemplate}>
      {children}
    </div>
  );
};
export default TableItemShort;
