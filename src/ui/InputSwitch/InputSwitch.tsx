import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputSwitch.module.scss';

interface InputSwitchProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputSwitch: FC<InputSwitchProps> = props => {
  const {
    className,
    type = "checkbox",
    hidden = true,
    children,
    ...rest
  } = props;

  return (
    <label className={styles.InputSwitch}>
      <input
        className={styles.InputSwitch__input}
        type={type}
        hidden={hidden}
        {...rest}
      />
      <span className={styles.InputSwitch__switch}>
        <span className={styles.InputSwitch__icon}></span>
      </span>
      <span className={styles.InputSwitch__children}>{children}</span>
    </label>
  );
};

export default InputSwitch;
