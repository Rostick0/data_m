import React, { FC } from 'react';
import styles from './FieldButtons.module.scss';

interface FieldButtonsProps {
  children?: React.ReactNode
}

const FieldButtons: FC<FieldButtonsProps> = ({
  children
}) => (
  <div
    className={styles.FieldButtons}
  >{children}</div>
);

export default FieldButtons;
