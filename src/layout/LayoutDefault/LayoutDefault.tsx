import React, { FC } from 'react';
import styles from './LayoutDefault.module.scss';
import Aside from '../../components/Aside/Aside';

interface LayoutDefaultProps {
  children?: React.ReactNode
}

const LayoutDefault: FC<LayoutDefaultProps> = ({
  children
}) => (
  <div className={styles.LayoutDefault}>
    <Aside></Aside>
    <div className={styles.LayoutDefault__content}>{children}</div>
  </div>
);

export default LayoutDefault;
