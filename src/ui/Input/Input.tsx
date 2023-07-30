import React, { FC, InputHTMLAttributes, forwardRef, memo } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
}

const Input: FC<InputProps> = memo(props => {
  const { className, register, ...rest } = props
  const styleClassName = className ? ' ' + className : '';

  return (
    <input className={styles.Input + styleClassName} {...rest} {...register} />
  );
});

export default Input;
