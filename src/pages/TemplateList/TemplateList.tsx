import React, { FC } from 'react';
import styles from './TemplateList.module.scss';
import Title from '../../ui/Title/Title';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import TableTemplate from '../../components/TableTemplate/TableTemplate';

interface TemplateListProps { }

const TemplateList: FC<TemplateListProps> = () => {
  return (
    <div className={styles.TemplateList}>
      <div className={styles.TemplateList__top}>
        <Title>Рассылка</Title>
        <div className={styles.TemplateList__filter}>
          <Select
            styleColor="grey"
            items={[
              {
                value: 1,
                name: '312'
              }
            ]}
            placeholder='Папки'
          ></Select>
          <Input placeholder="Поиск по наименованию"></Input>
          <Select
            items={[
              {
                value: 1,
                name: '312'
              }
            ]}
            placeholder='Тип'
          ></Select>
          <SelectMulti></SelectMulti>
        </div>
      </div>
      <TableTemplate></TableTemplate>
    </div>
  );
};

export default TemplateList;
