import React, { FC, lazy } from 'react';
import styles from './Table.module.scss';
import 'chart.js/auto';
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



