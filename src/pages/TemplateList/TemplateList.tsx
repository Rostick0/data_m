import React, { FC } from 'react';
import styles from './TemplateList.module.scss';

interface TemplateListProps {}

const TemplateList: FC<TemplateListProps> = () => (
  <div className={styles.TemplateList}>
    TemplateList Component
  </div>
);

export default TemplateList;
