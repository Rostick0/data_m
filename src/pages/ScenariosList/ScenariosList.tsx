import React, { FC } from 'react';
import styles from './ScenariosList.module.scss';
import Title from '../../ui/Title/Title';
import Select from '../../ui/Select/Select';
import TableScenarios from '../../components/TableScenarios/TableScenarios';
import Input from '../../ui/Input/Input';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import TableInfoCard from '../../components/TableInfoCard/TableInfoCard';
import TableInfoCardDonut from '../../components/TableInfoCardDonut/TableInfoCardDonut';

interface ScenariosListProps { }

const ScenariosList: FC<ScenariosListProps> = () => (
  <div className={styles.ScenariosList}>
    <div className={styles.ScenariosList__top}>
      <Title>Сценарии</Title>
      <div className={styles.ScenariosList__statistics}>
        <TableInfoCard
          title="Всего пользователей"
          value={(<>
            12,4 <span className="text-small">тыс</span>
          </>)}
        ></TableInfoCard>
        <TableInfoCard
          title="Электронная почта"
          value={(<>
            8,6 <span className="text-small">тыс</span>
          </>)}
        >
          <TableInfoCardDonut value={65}></TableInfoCardDonut>
        </TableInfoCard>
        <TableInfoCard
          title="Подтвердить подписку"
          value={(<>
            10,4 <span className="text-small">тыс</span>
          </>)}
        >
          <TableInfoCardDonut value={95}></TableInfoCardDonut>
        </TableInfoCard>
        <TableInfoCard
          title="7 дней активен"
          value={(<>
            3,4 <span className="text-small">тыс</span>
          </>)}
        >
          <TableInfoCardDonut value={10}></TableInfoCardDonut>
        </TableInfoCard>
      </div >
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
