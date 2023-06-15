import React, { FC } from 'react';
import styles from './TableItemIcons.module.scss';

interface TableItemIconsProps {
  className?: string | undefined,
  children?: React.ReactNode | undefined
}

const TableItemIcons: FC<TableItemIconsProps> = ({
  className,
  children
}) => {
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.TableItemIcons + styleClassName}>
      {children}
    </div>
  );
};

export default TableItemIcons;
