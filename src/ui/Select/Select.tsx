import React, { FC } from 'react';
import styles from './Select.module.scss';

interface SelectProps {}

const Select: FC<SelectProps> = () => (
  <div className={styles.Select}>
    Select Component
  </div>
);

export default Select;
