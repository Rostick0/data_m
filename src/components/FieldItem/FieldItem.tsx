import React, { FC } from 'react';
import styles from './FieldItem.module.scss';
import { CSSProperties } from 'react';

interface FieldItemProps {
  title?: string | undefined,
  children?: React.ReactNode | undefined,
  // minWidthTitle?: CSSProperties | undefined
}

const FieldItem: FC<FieldItemProps> = ({
  title,
  children
}) => (
  <div className={styles.FieldItem}>
    <div
      className={styles.FieldItem__title}
    // style={{ minWidth: minWidthTitle }}
    >{title}</div>
    <div className={styles.FieldItem__content}>{children}</div>
  </div>
);

export default FieldItem;
