import React, { FC } from 'react';
import styles from './KeysAdd.module.scss';
import Button, { ButtonProps } from '../../ui/Button/Button';

interface KeysAddProps extends ButtonProps { }

const KeysAdd: FC<KeysAddProps> = ({
  onClick
}) => (
  <div
    className={styles.KeysAdd}
  >
    <Button
      className="button_with_icon"
      styleColor='grey'
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="rgba(18, 27, 38, 0.66)" />
      </svg>
      <span>Прикрепить</span>
    </Button>
  </div>
);

export default KeysAdd;
