import React, { FC, MouseEventHandler } from 'react';
import styles from './ScenariosButtonAdd.module.scss';
import Button from '../../ui/Button/Button';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

interface ScenariosButtonAddProps {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const ScenariosButtonAdd: FC<ScenariosButtonAddProps> = ({
  onClick
}) => {
  const items = [
    {
      name: 'Начало сценария',
      is_line: true,
    },
    {
      name: 'Вызов'
    },
    {
      name: 'Условие',
    },
    {
      name: 'Сообщение',
      is_line: true
    },
    {
      name: 'Конечная точка сценария'
    },
  ];

  return (
    <div className={styles.ScenariosButtonAdd}
      onClick={onClick}
    >
      <Button className={styles.ScenariosButtonAdd__button}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.125 5.75H6.75V2.375C6.75 2.1875 6.5625 2 6.375 2H5.625C5.41406 2 5.25 2.1875 5.25 2.375V5.75H1.875C1.66406 5.75 1.5 5.9375 1.5 6.125V6.875C1.5 7.08594 1.66406 7.25 1.875 7.25H5.25V10.625C5.25 10.8359 5.41406 11 5.625 11H6.375C6.5625 11 6.75 10.8359 6.75 10.625V7.25H10.125C10.3125 7.25 10.5 7.08594 10.5 6.875V6.125C10.5 5.9375 10.3125 5.75 10.125 5.75Z" fill="white" />
        </svg>
      </Button>
      <DropdownMenu
        className={styles.ScenariosButtonAdd__dropdown}
        items={items}
      ></DropdownMenu>
    </div>
  );
};

export default ScenariosButtonAdd;
