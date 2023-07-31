import React, { FC, useState } from 'react';
import styles from './InputDate.module.scss'
import './calendar.scss';
import Calendar from 'react-calendar';
import Input from '../Input/Input';

export interface InputDateProps {
  className?: string,
  placeholder?: string
}

const InputDate: FC<InputDateProps> = ({
  className,
  placeholder
}) => {
  const [date, setDate] = useState<Date | Date[] | any>(new Date());
  const [isActive, setIsActive] = useState<boolean>(false);

  const styleClassName = className ? ' ' + className : '';

  return (
    <div
      className={styles.InputDate + ' InputDate ' + styleClassName}
      tabIndex={-1}
      onBlur={() => setIsActive(false)}
    >
      <div className={styles.InputDate__field}
        onClick={() => setIsActive(prev => !prev)}
      >
        <Input
          onMouseDown={(e) => e.preventDefault()}
          placeholder={placeholder}
          value={date.toLocaleDateString()}
          readOnly
        ></Input>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 12H21.5V11.5C21.5 11.3674 21.4473 11.2402 21.3536 11.1464C21.2598 11.0527 21.1326 11 21 11C20.8674 11 20.7402 11.0527 20.6464 11.1464C20.5527 11.2402 20.5 11.3674 20.5 11.5V12H15.5V11.5C15.5 11.3674 15.4473 11.2402 15.3536 11.1464C15.2598 11.0527 15.1326 11 15 11C14.8674 11 14.7402 11.0527 14.6464 11.1464C14.5527 11.2402 14.5 11.3674 14.5 11.5V12H13C12.7348 12 12.4804 12.1054 12.2929 12.2929C12.1054 12.4804 12 12.7348 12 13V23C12 23.2652 12.1054 23.5196 12.2929 23.7071C12.4804 23.8946 12.7348 24 13 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V13C24 12.7348 23.8946 12.4804 23.7071 12.2929C23.5196 12.1054 23.2652 12 23 12ZM14.5 13V13.5C14.5 13.6326 14.5527 13.7598 14.6464 13.8536C14.7402 13.9473 14.8674 14 15 14C15.1326 14 15.2598 13.9473 15.3536 13.8536C15.4473 13.7598 15.5 13.6326 15.5 13.5V13H20.5V13.5C20.5 13.6326 20.5527 13.7598 20.6464 13.8536C20.7402 13.9473 20.8674 14 21 14C21.1326 14 21.2598 13.9473 21.3536 13.8536C21.4473 13.7598 21.5 13.6326 21.5 13.5V13H23V15H13V13H14.5ZM23 23H13V16H23V23Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </div>
      {isActive && <div
        onClick={e => e.preventDefault()}>
        <Calendar
          value={date}
          onChange={value => {
            setIsActive(false)
            setDate(value)
          }}
        />
      </div>}
    </div>
  );
}

export default InputDate;
