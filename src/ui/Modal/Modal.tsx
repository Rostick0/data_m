import React, { FC, MouseEvent, MouseEventHandler } from 'react';
import styles from './Modal.module.scss';
import Title from '../Title/Title';

export interface ModalProps {
  title?: string | undefined,
  children?: React.ReactNode | undefined,
  close?: MouseEventHandler<HTMLButtonElement | HTMLDivElement> | undefined
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  close
}) => {
  function clickBackground(e: MouseEvent<HTMLDivElement>): void {
    if (e.target !== e.currentTarget) return;

    typeof close === 'function' && close(e);
  }

  return (
    <div
      className={styles.Modal}
      onClick={clickBackground}
    >
      <div className={styles.Modal__inner}>
        <div className={styles.Modal__top}>
          <Title className={styles.Modal__title}>{title}</Title>
          <button onClick={close}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 9.29289C11.3166 8.90237 10.6834 8.90237 10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071L17.0858 17.5L10.2929 24.2929C9.90237 24.6834 9.90237 25.3166 10.2929 25.7071C10.6834 26.0976 11.3166 26.0976 11.7071 25.7071L18.5 18.9142L25.2929 25.7071C25.6834 26.0976 26.3166 26.0976 26.7071 25.7071C27.0976 25.3166 27.0976 24.6834 26.7071 24.2929L19.9142 17.5L26.7071 10.7071C27.0976 10.3166 27.0976 9.68342 26.7071 9.29289C26.3166 8.90237 25.6834 8.90237 25.2929 9.29289L18.5 16.0858L11.7071 9.29289Z" fill="#142333" fillOpacity="0.33" />
            </svg>
          </button>
        </div>
        <div className={styles.Modal__content}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
