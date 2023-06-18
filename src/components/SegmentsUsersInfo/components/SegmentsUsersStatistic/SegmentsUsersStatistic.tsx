import React, { FC } from 'react';
import styles from './SegmentsUsersStatistic.module.scss';
import TableInfoCard from '../../../TableInfoCard/TableInfoCard';
import TableSegmentsUsersStatistic from '../../../TableSegmentsUsersStatistic/TableSegmentsUsersStatistic';

interface SegmentsUsersStatisticProps { }

const SegmentsUsersStatistic: FC<SegmentsUsersStatisticProps> = () => (
  <div className={styles.SegmentsUsersStatistic}>
    <div className={styles.SegmentsUsersStatistic__top}>
      <div className="table_info_statistics">
        <TableInfoCard
          title="Время в приложении"
          value={(<>
            34 ч 18 мин
          </>)}
        ></TableInfoCard>
        <TableInfoCard
          title="Сессии"
          value={(<>
            336
          </>)}
        >
        </TableInfoCard>
        <TableInfoCard
          styleColor='blue'
          title="События"
          value={(<>
            4 567
          </>)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L16 12M16 12L12 8M16 12L8 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </TableInfoCard>
        <TableInfoCard
          styleColor='blue'
          title="A/B-тесты"
          value={(
            <>
              45
            </>
          )}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L16 12M16 12L12 8M16 12L8 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </TableInfoCard>
      </div>
      <div className={styles.SegmentsUsersStatistic__title}>Устройства</div>
    </div>
    <TableSegmentsUsersStatistic></TableSegmentsUsersStatistic>
  </div>
);

export default SegmentsUsersStatistic;
