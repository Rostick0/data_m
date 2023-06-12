import React, { FC, useState } from 'react';
import styles from './JourneyAddButton.module.scss';
import Button from '../../ui/Button/Button';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

interface JourneyAddButtonProps {}

const JourneyAddButton: FC<JourneyAddButtonProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const items = [
    {
      name: 'Entry',
      is_line: true
    },
    {
      name: 'Action'
    },
    {
      name: 'Send Action',
      is_line: true
    },
    {
      name: 'Force Exit'
    },
    {
      name: 'Exit'
    },
  ];

  return (
    <>
      <Button className={styles.JourneyAddButton + ' button_with_icon'}>
        <span className={styles.JourneyAddButton__click}>
          <svg className={styles.JourneyAddButton__add} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white" />
          </svg>
          <span>Добавить узел</span>
        </span>
        <svg onClick={() => setIsActive(!isActive)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3762 20.8208C18.177 21.0481 17.8232 21.0481 17.624 20.8208L14.1269 16.8295C13.8437 16.5063 14.0732 16 14.503 16L21.4972 16C21.927 16 22.1565 16.5063 21.8733 16.8295L18.3762 20.8208Z" fill="#C9E2FF" />
        </svg>
      </Button>
      {isActive && (
        <DropdownMenu
          className={styles.JourneyAddButton__dropdown}
          items={items}
          tabIndex={1}
          onBlur={() => setIsActive(false)}
        ></DropdownMenu>
      )}
    </>
  );
};

export default JourneyAddButton;
