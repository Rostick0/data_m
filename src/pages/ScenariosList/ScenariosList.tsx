import React, { FC } from 'react';
import styles from './ScenariosList.module.scss';
import Title from '../../ui/Title/Title';
import Select from '../../ui/Select/Select';
import TableScenarios from '../../components/TableScenarios/TableScenarios';
import Input from '../../ui/Input/Input';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';

interface ScenariosListProps { }

const ScenariosList: FC<ScenariosListProps> = () => (
  <div className={styles.ScenariosList}>
    <div className={styles.ScenariosList__top}>
      <Title>Сценарии</Title>
      <div className={styles.ScenariosList__filter}>
        <Input
          placeholder='Поиск по наименованию'
        ></Input>
        <Select
          items={[
            {
              value: 1,
              name: '312'
            }
          ]}
          placeholder='Статус'
        ></Select>
        <SelectMulti
          items={[
            {
              value: 1,
              name: 'Статистика за день'
            }
          ]}
          placeholder='Статистика'
        ></SelectMulti>
      </div>
    </div >
    <TableScenarios></TableScenarios>
  </div >
);

export default ScenariosList;
