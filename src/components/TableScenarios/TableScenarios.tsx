import React, { FC } from 'react';
import styles from './TableScenarios.module.scss';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import TableScenariosItem from '../TableScenariosItem/TableScenariosItem';

interface TableScenariosProps { }

const TableScenarios: FC<TableScenariosProps> = () => {
  const titles = [
    'Наименование',
    'Тип',
    'Статистика',
    'Статус',
    ''
  ];

  return (
    <div className={styles.TableScenarios}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableScenarios__grid_template}
      >
        <TableItem>
          <TableScenariosItem
            styleGridTemplate={styles.TableScenarios__grid_template}
          ></TableScenariosItem>
        </TableItem>
      </Table>
    </div>
  );
};

export default TableScenarios;
