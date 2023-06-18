import React, { FC } from 'react';
import styles from './TablePagination.module.scss';
import Select from '../../../../ui/Select/Select';

interface TablePaginationProps {
  count?: number
}

const TablePagination: FC<TablePaginationProps> = ({
  count
}) => {
  const countView = [
    {
      name: 10,
      value: 10
    },
    {
      name: 50,
      value: 50
    }
  ];

  return (
    <div className={styles.TablePagination}>
      <div className={styles.TablePagination__count}>Найдено: {count}</div>
      <ul className={styles.TablePagination__list}>
        <li className={styles.TablePagination__item}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 12.9062C7.875 13.0625 8.125 13.0625 8.25 12.9062L8.5 12.6875C8.625 12.5312 8.625 12.3125 8.5 12.1562L4.875 8.53125H14.625C14.8125 8.53125 15 8.375 15 8.15625V7.84375C15 7.65625 14.8125 7.46875 14.625 7.46875H4.875L8.5 3.875C8.625 3.71875 8.625 3.5 8.5 3.34375L8.28125 3.125C8.125 2.96875 7.875 2.96875 7.75 3.125L3.09375 7.75C2.9375 7.90625 2.9375 8.125 3.09375 8.28125L7.75 12.9062ZM1.375 14H1.625C1.8125 14 2 13.8438 2 13.625V2.375C2 2.1875 1.8125 2 1.625 2H1.375C1.15625 2 1 2.1875 1 2.375V13.625C1 13.8438 1.15625 14 1.375 14Z" fill="#8D959C" />
          </svg>
        </li>
        <li className={styles.TablePagination__item}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 11.9062L5.5 11.6875C5.625 11.5312 5.625 11.3125 5.5 11.1562L2.875 8.53125H14.625C14.8125 8.53125 15 8.375 15 8.15625V7.84375C15 7.65625 14.8125 7.46875 14.625 7.46875H2.875L5.5 4.875C5.625 4.71875 5.625 4.5 5.5 4.34375L5.25 4.125C5.125 3.96875 4.875 3.96875 4.75 4.125L1.09375 7.75C0.9375 7.90625 0.9375 8.125 1.09375 8.28125L4.75 11.9062C4.875 12.0625 5.125 12.0625 5.25 11.9062Z" fill="#8D959C" />
          </svg>
        </li>
        <li className={styles.TablePagination__item}>1</li>
        <li className={styles.TablePagination__item}>2</li>
        <li className={styles.TablePagination__item}>3</li>
        <li className={styles.TablePagination__item}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7188 4.125L10.4688 4.34375C10.3438 4.5 10.3438 4.71875 10.4688 4.875L13.0938 7.46875H1.375C1.15625 7.46875 1 7.65625 1 7.84375V8.15625C1 8.375 1.15625 8.53125 1.375 8.53125H13.0938L10.4688 11.1562C10.3438 11.3125 10.3438 11.5312 10.4688 11.6875L10.7188 11.9062C10.8438 12.0625 11.0938 12.0625 11.25 11.9062L14.875 8.28125C15.0312 8.125 15.0312 7.90625 14.875 7.75L11.25 4.125C11.0938 3.96875 10.8438 3.96875 10.7188 4.125Z" fill="#8D959C" />
          </svg>
        </li>
        <li className={styles.TablePagination__item}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.71875 3.125L7.46875 3.34375C7.34375 3.5 7.34375 3.71875 7.46875 3.875L11.0938 7.46875H1.375C1.15625 7.46875 1 7.65625 1 7.84375V8.15625C1 8.375 1.15625 8.53125 1.375 8.53125H11.0938L7.5 12.1562C7.34375 12.3125 7.34375 12.5312 7.5 12.6875L7.71875 12.9062C7.84375 13.0625 8.09375 13.0625 8.25 12.9062L12.875 8.28125C13.0312 8.125 13.0312 7.90625 12.875 7.75L8.25 3.125C8.09375 2.96875 7.84375 2.96875 7.71875 3.125ZM15 2.375C15 2.1875 14.8125 2 14.625 2H14.375C14.1562 2 14 2.1875 14 2.375V13.625C14 13.8438 14.1562 14 14.375 14H14.625C14.8125 14 15 13.8438 15 13.625V2.375Z" fill="#8D959C" />
          </svg>
        </li>
      </ul>
      <div className={styles.TablePagination__counter_show}>
        <div>Показывать по</div>
        <Select
          styleColor='grey'
          defaultValue={50}
          inputClassName={styles.TablePagination__select}
          items={countView}
        ></Select>
      </div>
    </div>
  );
};

export default TablePagination;
