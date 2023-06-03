import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputMulti.module.scss';
import InputTag from '../InputTag/InputTag';

interface InputMultiProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputMulti: FC<InputMultiProps> = props => {
  const { className, ...rest } = props;
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.InputMulti + styleClassName}>
      <InputTag>1</InputTag>
      <input
        className={styles.InputMulti__input}
        type="text"
        {...rest}
      />
    </div>
  );
};

export default InputMulti;
