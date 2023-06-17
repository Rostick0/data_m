import React, { FC } from 'react';
import styles from './Promo.module.scss';

interface PromoProps {}

const Promo: FC<PromoProps> = () => (
  <div className={styles.Promo}>
    Promo Component
  </div>
);

export default Promo;
