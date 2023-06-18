import React, { FC } from 'react';
import styles from './SegmentsList.module.scss';
import Title from '../../ui/Title/Title';
import Select from '../../ui/Select/Select';
import TableSegments from '../../components/TableSegments/TableSegments';
import Input from '../../ui/Input/Input';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import Button from '../../ui/Button/Button';
import TableInfoCard from '../../components/TableInfoCard/TableInfoCard';
import TableInfoCardDonut from '../../components/TableInfoCardDonut/TableInfoCardDonut';
import { Link } from 'react-router-dom';

interface SegmentsListProps { }

const SegmentsList: FC<SegmentsListProps> = () => (
  <div className={styles.SegmentsList}>
    <div className={styles.SegmentsList__top}>
      <Title className={styles.SegmentsList__title}>
        <div>Сегменты</div>
        <Link to="/segments/create">
          <Button className='button_with_icon'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white" />
            </svg>
            <span>Создать</span>
          </Button>
          </Link>
      </Title>
      <div className="table_info_statistics">
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
      </div>
      <div className={styles.SegmentsList__filter}>
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
          placeholder='Тип'
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
    </div>
    <TableSegments></TableSegments>
  </div>
);

export default SegmentsList;
