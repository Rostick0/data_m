import React, { FC, lazy } from 'react';
import styles from './Table.module.scss';
import Select from '../../ui/Select/Select';
import Tag from '../../ui/Tag/Tag';
import Status from '../../ui/Status/Status';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
const TablePagination = lazy(() => import('./components/TablePagination/TablePagination'));

// interface item {
//   name?: string,

// }

interface TableProps {
  styleGridTemplate?: string | undefined,
  items?: Array<any>,
  titles?: string[],
  children?: React.ReactNode | undefined
}

const Table: FC<TableProps> = ({
  styleGridTemplate,
  items,
  titles,
  children
}) => {
  const data1 = {
    labels: [],
    datasets: [{
      label: 'My First Dataset',
      data: [12.423, 7.932],
      backgroundColor: [
        '#F4BE37',
        '#F5F8FA'
      ]
    }],
  };

  const data2 = {
    labels: [],
    datasets: [{
      label: 'My First Dataset',
      data: [12.423, 7.932, 7.931],
      backgroundColor: [
        '#2471CC',
        '#35BB73',
        '#F4BE37'
      ]
    }],
    options: {
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  };

  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  return (
    <>
      {titles?.length && (
        <div className={styles.Table__titles + classGridTemplate}>
          {titles.map(title => (<div className={styles.Table__title}>{title}</div>))}
        </div>
      )}
      <div className={styles.Table__list}>
        {children}
      </div>
      <TablePagination
        count={53}
      ></TablePagination>
    </>
  );
}

export default Table;



