import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputBox.module.scss';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputBox: FC<InputBoxProps> = props => {
  const {
    className,
    type = "checkbox",
    hidden = true,
    children,
    ...rest
  } = props;

  return (
    <label className={styles.InputBox}>
      <input
        className={styles.InputBox__input}
        type={type}
        hidden={hidden}
        {...rest}
      />
      <span className={styles.InputBox__icon}>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.19922 3.27273L4.02275 6L9.19922 1" stroke="white" strokeWidth="2" />
        </svg>
      </span>
      <span className={styles.InputBox__children}>{children}</span>
    </label>
  );
};

export default InputBox;
