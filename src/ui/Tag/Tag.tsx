import React, { FC } from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  className?: string | undefined,
  children?: React.ReactNode | undefined
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
