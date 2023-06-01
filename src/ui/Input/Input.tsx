import React, { FC } from 'react';
import styles from './Input.module.scss';

interface InputProps {}

const Input: FC<InputProps> = () => (
  <div className={styles.Input}>
    Input Component
  </div>
);

export default Input;
