import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputRadio.module.scss';

interface Items {
  value: string | undefined,
  name: string | undefined,
  checked?: boolean | undefined
}

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  items: Array<Items>
}

const InputRadio: FC<InputRadioProps> = props => {
  const {
    className,
    items,
    value,
    type,
    ...rest
  } = props;

  return (
    <div className={styles.InputRadio}>
      {items.map(item => (
        <label
          className={styles.InputRadio__item}
          key={item.value}
        >
          <input

            className={styles.InputRadio__input}
            type="radio"
            value={item.value}
            {...rest}
            defaultChecked={item?.checked}
          />
          <span className={styles.InputRadio__content}>{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default InputRadio;
