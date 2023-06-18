import React, { FC, ReactNode } from 'react';
import styles from './TableInfoCard.module.scss';

interface TableInfoCardProps {
  title?: string,
  value?: React.ReactNode | string,
  children?: React.ReactNode,
  styleColor?: 'blue' | 'grey'
}

const TableInfoCard: FC<TableInfoCardProps> = ({
  title,
  value,
  children,
  styleColor
}) => {
  const styleClass = styles['TableInfoCard_style_' + styleColor];
  const styleCard = styleClass ? ' ' + styleClass : ' ' + styles['TableInfoCard_style_grey'];

  return (
    <div className={styles.TableInfoCard + styleCard}>
      <div className={styles.TableInfoCard__left}>
        <div className={styles.TableInfoCard__title}>{title}</div>
        <div className={styles.TableInfoCard__value}>{value}</div>
      </div>
      {children && (
        <div className={styles.TableInfoCard__right}>{children}</div>
      )}
    </div>
  );
};

export default TableInfoCard;
