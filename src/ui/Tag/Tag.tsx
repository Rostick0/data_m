import React, { FC } from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  children?: React.ReactNode | undefined
}

const Tag: FC<TagProps> = ({
  children
}) => (
  <div className={styles.Tag}>{children}</div>
);

export default Tag;
