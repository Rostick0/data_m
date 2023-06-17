import React, { FC } from 'react';
import styles from './PromoList.module.scss';

interface PromoListProps {}

const PromoList: FC<PromoListProps> = () => (
  <div className={styles.PromoList}>
    PromoList Component
  </div>
);

export default PromoList;
