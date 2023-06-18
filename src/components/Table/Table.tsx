import React, { FC, lazy } from 'react';
import styles from './Table.module.scss';
import 'chart.js/auto';
const TablePagination = lazy(() => import('./components/TablePagination/TablePagination'));

type TableTitle = React.ReactNode | string;

interface TableProps {
  styleGridTemplate?: string,
  titles?: Array<TableTitle>,
  children?: React.ReactNode
}

const Table: FC<TableProps> = ({
  styleGridTemplate,
  titles,
  children
}) => {
  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  return (
    <>
      {titles?.length && (
        <div className={styles.Table__titles + classGridTemplate}>
          {titles.map((title, index) => (<div key={index} className={styles.Table__title}>{title}</div>))}
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



