import React, { FC } from 'react';
import styles from './TableSegments.module.scss';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import InputBox from '../../ui/InputBox/InputBox';
import TableSegmentsItem from '../TableSegmentsItem/TableSegmentsItem';

interface TableSegmentsProps { }

const TableSegments: FC<TableSegmentsProps> = () => {
  const titles = [
    (<InputBox></InputBox>),
    'Сегменты',
    'Создано',
    'Компании',
    'Сообщения',
    'A/B-тесты',
    ''
  ];

  return (
    <div className={styles.TableSegments}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableSegments__grid_template}
      >
        <TableItem>
          <TableSegmentsItem
            styleGridTemplate={styles.TableSegments__grid_template}
          ></TableSegmentsItem>
        </TableItem>
      </Table>
    </div>
  );
};

export default TableSegments;
