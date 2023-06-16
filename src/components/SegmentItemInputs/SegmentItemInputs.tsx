import React, { FC } from 'react';
import styles from './SegmentItemInputs.module.scss';

interface SegmentItemInputsProps {
  className?: string | undefined,
  children?: React.ReactNode | undefined,
  hiddenFirstIcon?: boolean | undefined,
  hasIconApplication?: boolean | undefined
}

const SegmentItemInputs: FC<SegmentItemInputsProps> = ({
  className,
  children,
  hiddenFirstIcon,
  hasIconApplication
}) => {
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.SegmentItemInputs + styleClassName}>
      {!hiddenFirstIcon && (<svg className={styles.SegmentItemInputs__frist_icon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2C9 2.55228 8.55228 3 8 3ZM8 7C7.44771 7 7 6.55228 7 6C7 5.44772 7.44771 5 8 5C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7ZM7 10C7 10.5523 7.44771 11 8 11C8.55228 11 9 10.5523 9 10C9 9.44771 8.55228 9 8 9C7.44771 9 7 9.44771 7 10ZM4 3C3.44772 3 3 2.55228 3 2C3 1.44771 3.44772 1 4 1C4.55228 1 5 1.44772 5 2C5 2.55228 4.55228 3 4 3ZM3 6C3 6.55228 3.44772 7 4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6ZM4 11C3.44771 11 3 10.5523 3 10C3 9.44771 3.44771 9 4 9C4.55228 9 5 9.44771 5 10C5 10.5523 4.55228 11 4 11Z" fill="#142333" fill-opacity="0.33" />
      </svg>)}
      {children}
      {hasIconApplication && (
        <div className={styles.SegmentItemInputs__application}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5312 12.0625L22.9375 10.4688C22.6875 10.2188 22.2188 10 21.875 10H16.5C15.6562 10 15 10.6875 15 11.5V13H12.5C11.6562 13 11 13.6875 11 14.5V24.5C11 25.3438 11.6562 26 12.5 26H19.5C20.3125 26 21 25.3438 21 24.5V23H23.5C24.3125 23 25 22.3438 25 21.5V13.125C25 12.7812 24.7812 12.3125 24.5312 12.0625ZM19.3125 24.5H12.6875C12.5625 24.5 12.5 24.4375 12.5 24.3125V14.6875C12.5 14.5938 12.5625 14.5 12.6875 14.5H15V21.5C15 22.3438 15.6562 23 16.5 23H19.5V24.3125C19.5 24.4375 19.4062 24.5 19.3125 24.5ZM23.3125 21.5H16.6875C16.5625 21.5 16.5 21.4375 16.5 21.3125V11.6875C16.5 11.5938 16.5625 11.5 16.6875 11.5H20V14.25C20 14.6875 20.3125 15 20.75 15H23.5V21.3125C23.5 21.4375 23.4062 21.5 23.3125 21.5ZM23.5 13.5H21.5V11.5H21.7812C21.8438 11.5 21.875 11.5312 21.9062 11.5625L23.4375 13.0938C23.4688 13.125 23.5 13.1562 23.5 13.2188V13.5Z" fill="#142333" fill-opacity="0.33" />
          </svg>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2222 12.4C24.4285 12.4 24.6263 12.4843 24.7722 12.6343C24.9181 12.7843 25 12.9878 25 13.2C25 13.4122 24.9181 13.6157 24.7722 13.7657C24.6263 13.9157 24.4285 14 24.2222 14H23.4444L23.4421 14.0568L22.7164 24.5136C22.6885 24.9173 22.5129 25.2951 22.225 25.5709C21.9371 25.8467 21.5582 26 21.1648 26H14.8344C14.441 26 14.0622 25.8467 13.7742 25.5709C13.4863 25.2951 13.3107 24.9173 13.2828 24.5136L12.5571 14.0576C12.5559 14.0384 12.5554 14.0192 12.5556 14H11.7778C11.5715 14 11.3737 13.9157 11.2278 13.7657C11.0819 13.6157 11 13.4122 11 13.2C11 12.9878 11.0819 12.7843 11.2278 12.6343C11.3737 12.4843 11.5715 12.4 11.7778 12.4H24.2222ZM21.8866 14H14.1134L14.8352 24.4H21.1648L21.8866 14ZM19.5556 10C19.7618 10 19.9597 10.0843 20.1055 10.2343C20.2514 10.3843 20.3333 10.5878 20.3333 10.8C20.3333 11.0122 20.2514 11.2157 20.1055 11.3657C19.9597 11.5157 19.7618 11.6 19.5556 11.6H16.4444C16.2382 11.6 16.0403 11.5157 15.8945 11.3657C15.7486 11.2157 15.6667 11.0122 15.6667 10.8C15.6667 10.5878 15.7486 10.3843 15.8945 10.2343C16.0403 10.0843 16.2382 10 16.4444 10H19.5556Z" fill="#142333" fill-opacity="0.33" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default SegmentItemInputs;
