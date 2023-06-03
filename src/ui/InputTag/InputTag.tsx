import React, { FC } from 'react';
import styles from './InputTag.module.scss';

interface InputTagProps {
  children?: React.ReactNode | undefined
}

const InputTag: FC<InputTagProps> = ({
  children
}) => (
  <div className={styles.InputTag}>
    <span>{children}</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85355 7.14645C7.65829 6.95118 7.34171 6.95118 7.14645 7.14645C6.95118 7.34171 6.95118 7.65829 7.14645 7.85355L11.2929 12L7.14645 16.1464C6.95118 16.3417 6.95118 16.6583 7.14645 16.8536C7.34171 17.0488 7.65829 17.0488 7.85355 16.8536L12 12.7071L16.1464 16.8536C16.3417 17.0488 16.6583 17.0488 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7071 12L16.8536 7.85355C17.0488 7.65829 17.0488 7.34171 16.8536 7.14645C16.6583 6.95118 16.3417 6.95118 16.1464 7.14645L12 11.2929L7.85355 7.14645Z" fill="#142333" fill-opacity="0.33" />
    </svg>
  </div>
);

export default InputTag;
