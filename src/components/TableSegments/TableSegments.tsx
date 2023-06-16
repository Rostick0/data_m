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

  const data = [
    {
      id: 1,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 456,
      count_messages: 45,
      count_tests: 5,
    },
    {
      id: 2,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 12,
      count_messages: 0,
      count_tests: 0,
    },
    {
      id: 3,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 456,
      count_messages: 45,
      count_tests: 5,
    },
    {
      id: 4,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 4312,
      count_messages: 15,
      count_tests: 55,
    },
    {
      id: 5,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 252,
      count_messages: 15,
      count_tests: 3,
    },
    {
      id: 6,
      name: 'Наименование тест',
      count_companies: 456,
      count_messages: 45,
      count_tests: 5,
    },
    {
      id: 7,
      name: 'Наименование',
      date: '12 апр 2023',
      count_companies: 45,
      count_messages: 4,
      count_tests: 1,
    }
  ];

  return (
    <div className={styles.TableSegments}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableSegments__grid_template}
      >
        {data?.length && data.map(item => (
          <TableItem
            key={item?.id}
          >
            <TableSegmentsItem
              data={item}
              styleGridTemplate={styles.TableSegments__grid_template}
            ></TableSegmentsItem>
          </TableItem>
        ))}
      </Table>
    </div>
  );
};

export default TableSegments;
