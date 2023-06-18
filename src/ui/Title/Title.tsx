import React, { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  className?: string,
  children?: React.ReactNode
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
