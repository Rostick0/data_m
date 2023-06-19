import React, { FC, useState } from 'react';
import styles from './SelectMulti.module.scss';
import { SelectProps } from '../Select/Select';
import InputTag from '../InputTag/InputTag';
import { Items } from '../Select/Select';

interface SelectMultiProps extends SelectProps { }

const SelectMulti: FC<SelectMultiProps> = ({
  className,
  placeholder,
  onChange,
  items
}) => {
  const [active, setActive] = useState(false);
  const [values, setValues] = useState<Array<Items>>([]);

  const styleClassName = className ? ' ' + className : '';

  const clearValue = (valueItem: string) => {
    const index = values.findIndex(value => value.value == valueItem);
    console.log(valueItem)
    const clearValue = [...values];
    clearValue.splice(index, 1)
    setValues(clearValue);
  }

  return (
    <div
      className={styles.SelectMulti + styleClassName}
      tabIndex={1}
      onBlur={() => setActive(false)}
    >
      <div className={styles.SelectMulti__switch + styleClassName}
        onClick={() => setActive(prev => !prev)}
      >
        {values?.map((value) => (
          <InputTag
            key={value.value}
            onClick={() => clearValue(`${value.value}`)}
          >{value.name}</InputTag>
        ))}
        {values?.length ? '' : (<input
          className={styles.SelectMulti__input}
          placeholder={placeholder}
          // value={value}
          value={values?.length ? ' ' : ''}
          readOnly
        ></input>)}
        <svg className={styles.SelectMulti__icon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.376 20.8208C18.1769 21.0481 17.8231 21.0481 17.6239 20.8208L14.1268 16.8295C13.8436 16.5063 14.0731 16 14.5028 16L21.4971 16C21.9268 16 22.1564 16.5063 21.8732 16.8295L18.376 20.8208Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </div>
      {active && <ul className={styles.SelectMulti__list}>
        {items?.map(item => (
          <li
            key={item.value}
            className={styles.SelectMulti__item}
            onClick={() => {
              typeof onChange === 'function' && onChange({
                value: item.value,
                name: item.name
              });

              if (values.findIndex(value => value.value == item.value) !== -1) return;

              setValues([...values, item]);
            }}
          >{item.name}</li>
        )) ?? (<li className={styles.SelectMulti__item}>Нет данных</li>)}
      </ul>}
    </div>
  );
}

export default SelectMulti;
