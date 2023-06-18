import React, { FC } from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  className?: string,
  children?: React.ReactNode
}

const Tag: FC<TagProps> = ({
  className,
  children
}) => {
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.Tag + styleClassName}>{children}</div>
  );
};

export default Tag;
