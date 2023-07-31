import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputSwitch.module.scss';

interface InputSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  alignItems?: string | undefined,
  register?: any
}

const InputSwitch: FC<InputSwitchProps> = props => {
  const {
    className,
    alignItems,
    register,
    type = "checkbox",
    hidden = true,
    children,
    ...rest
  } = props;

  return (
    <label
      className={styles.InputSwitch}
      style={{ alignItems: alignItems ?? 'start' }}
    >
      <input
        className={styles.InputSwitch__input}
        type={type}
        hidden={hidden}
        {...register}
        {...rest}
      />
      <span className={styles.InputSwitch__switch}>
        <span className={styles.InputSwitch__icon}></span>
      </span>
      {children
        &&
        (<span className={styles.InputSwitch__children}>{children}</span>)}
    </label>
  );
};

export default InputSwitch;
