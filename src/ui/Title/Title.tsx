import React, { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  className?: string | undefined,
  children?: React.ReactNode | undefined
}

const Title: FC<TitleProps> = ({
  className,
  children
}) => {
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.Title + styleClassName}>{children}</div>
  );
};

export default Title;
