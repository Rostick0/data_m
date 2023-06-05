import React, { FC, useState } from 'react';
import styles from './Select.module.scss';
import Input from '../Input/Input';

export interface Items {
  value: string | number | undefined,
  name: string | number | undefined
}
export interface SelectProps {
  className?: string | undefined,
  inputClassName?: string | undefined,
  defaultValue?: string | number | undefined,
  placeholder?: string | undefined,
  onChange?: Function | undefined
  items?: Array<Items>
}

const Select: FC<SelectProps> = ({
  className,
  inputClassName,
  defaultValue,
  placeholder,
  onChange,
  items
}) => {
  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         alert("You clicked outside of me!");
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const styleClassName = className ? ' ' + className : '';
  const styleInputClassName = inputClassName ? ' ' + inputClassName : '';

  return (
    <div className={styles.Select + styleClassName} >
      <div className={styles.Select__switch + styleClassName}
        onClick={() => setActive(prev => !prev)}
      >
        <Input
          className={styles.Select__input + styleInputClassName}
          placeholder={placeholder}
          value={value}
          readOnly
        ></Input>
        <svg className={styles.Select__icon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.376 20.8208C18.1769 21.0481 17.8231 21.0481 17.6239 20.8208L14.1268 16.8295C13.8436 16.5063 14.0731 16 14.5028 16L21.4971 16C21.9268 16 22.1564 16.5063 21.8732 16.8295L18.376 20.8208Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </div>
      {active && <ul className={styles.Select__list}>
        {items?.map(item => (
          <li
            key={item.value}
            className={styles.Select__item}
            onClick={() => {
              setValue(`${item?.name}`)
              setActive(prev => false)
              typeof onChange === 'function' && onChange({
                value: item.value,
                name: item.name
              });
            }}
          >{item.name}</li>
        )) ?? (<li className={styles.Select__item}>Нет данных</li>)}
      </ul>}
    </div>
  );
};

export default Select;
