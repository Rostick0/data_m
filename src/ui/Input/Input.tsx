import React, { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input: FC<InputProps> = props => {
  const { className, ...rest } = props
  const styleClassName = className ? ' ' + className : '';
  return (
    <input className={styles.Input + styleClassName} {...rest} />
  );
};

export default Input;
