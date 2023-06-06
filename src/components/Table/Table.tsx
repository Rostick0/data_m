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
  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  return (
    <>
      {titles?.length && (
        <div className={styles.Table__titles + classGridTemplate}>
          {titles.map(title => (<div key={title} className={styles.Table__title}>{title}</div>))}
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



