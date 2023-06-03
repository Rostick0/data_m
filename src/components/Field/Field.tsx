import React, { FC } from 'react';
import styles from './Field.module.scss';
import Title from '../../ui/Title/Title';

interface FieldProps {
  title?: React.ReactNode | undefined,
  children?: React.ReactNode | undefined
}

const Field: FC<FieldProps> = ({
  title,
  children
}) => (
  <div className={styles.Field}>
    <Title className={styles.Field__title}>{title}</Title>
    <div className={styles.Field__list}>{children}</div>
  </div>
);

export default Field;
