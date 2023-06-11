import React, { FC } from 'react';
import styles from './FieldItem.module.scss';

interface FieldItemProps {
  title?: string | undefined,
  children?: React.ReactNode | undefined,
}

const FieldItem: FC<FieldItemProps> = ({
  title,
  children
}) => (
  <div className={styles.FieldItem}>
    <div
      className={styles.FieldItem__title}
    >{title}</div>
    <div className={styles.FieldItem__content}>{children}</div>
  </div>
);

export default FieldItem;
