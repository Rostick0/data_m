import React, { FC } from 'react';
import styles from './InputBox.module.scss';

interface InputBoxProps {}

const InputBox: FC<InputBoxProps> = () => (
  <div className={styles.InputBox}>
    InputBox Component
  </div>
);

export default InputBox;
