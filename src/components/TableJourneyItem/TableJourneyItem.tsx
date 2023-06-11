import React, { FC } from 'react';
import styles from './TableJourneyItem.module.scss';
import Status, { typeStatus } from '../../ui/Status/Status';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';



interface TableJourneyItemProps {
  data?: {
    id?: number | undefined,
    name?: string | undefined,
    sent?: number | undefined,
    ignored?: number | undefined,
    failed?: number | undefined,
    status?: typeStatus | undefined,
    is_active?: boolean | undefined,
  },
  styleGridTemplate?: string | undefined
}

const TableJourneyItem: FC<TableJourneyItemProps> = ({
  data,
  styleGridTemplate
}) => {
  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  return (
    <div className={styles.TableJourneyItem + classGridTemplate}>
      <div>{data?.name}</div>
      <div>
        <span className="text-greendark">{data?.sent ?? 0}</span>
        <span> / </span>
        <span className="text-warning">{data?.ignored ?? 0}</span>
        <span> / </span>
        <span className="textOrange">{data?.failed ?? 0}</span>
      </div>
      <div>
        <Status type={data?.status ?? 'draft'}></Status>
      </div>
      <div className={styles.TableJourneyItem__icons}>
        <InputSwitch defaultChecked={data?.is_active}></InputSwitch>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0781 7.08398L4.14062 1.80273C3.4043 1.37109 2.3125 1.80273 2.3125 2.84375V13.4062C2.3125 14.3711 3.32812 14.9551 4.14062 14.4727L13.0781 9.19141C13.8652 8.70898 13.8652 7.56641 13.0781 7.08398Z" fill="#142333" fillOpacity="0.33" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4062 9H8V1.59375C8 1.3125 7.75 1.09375 7.5 1.09375C7.46875 1.09375 7.4375 1.09375 7.4375 1.09375C3.71875 1.625 0.875 4.875 1 8.78125C1.125 12.6562 4.34375 15.875 8.21875 16C8.3125 16 8.40625 16 8.5 16C12.2812 16 15.375 13.2188 15.9062 9.5625C15.9375 9.28125 15.6875 9 15.4062 9ZM8.5 14.5C8.40625 14.5 8.34375 14.5 8.28125 14.5C5.1875 14.4062 2.59375 11.8125 2.5 8.71875C2.40625 6.0625 4.0625 3.71875 6.5 2.875V10.5H14.125C13.3125 12.875 11.0625 14.5 8.5 14.5ZM10 0.03125C10 0.03125 10 0 9.96875 0C9.71875 0 9.5 0.25 9.5 0.53125V7.5H16.4688C16.75 7.5 17 7.28125 16.9688 7C16.7188 3.25 13.75 0.28125 10 0.03125Z" fill="#142333" fillOpacity="0.33" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.375 13H10.125C10.3125 13 10.5 12.8438 10.5 12.625V5.875C10.5 5.6875 10.3125 5.5 10.125 5.5H9.375C9.15625 5.5 9 5.6875 9 5.875V12.625C9 12.8438 9.15625 13 9.375 13ZM14.5 2.5H11.9062L10.8438 0.75C10.5938 0.34375 10.0312 0 9.5625 0H6.40625C5.9375 0 5.375 0.34375 5.125 0.75L4.0625 2.5H1.5C1.21875 2.5 1 2.75 1 3V3.5C1 3.78125 1.21875 4 1.5 4H2V14.5C2 15.3438 2.65625 16 3.5 16H12.5C13.3125 16 14 15.3438 14 14.5V4H14.5C14.75 4 15 3.78125 15 3.5V3C15 2.75 14.75 2.5 14.5 2.5ZM6.34375 1.59375C6.375 1.5625 6.46875 1.5 6.5 1.5H6.53125H9.46875C9.5 1.5 9.59375 1.5625 9.625 1.59375L10.1562 2.5H5.8125L6.34375 1.59375ZM12.5 14.5H3.5V4H12.5V14.5ZM5.875 13H6.625C6.8125 13 7 12.8438 7 12.625V5.875C7 5.6875 6.8125 5.5 6.625 5.5H5.875C5.65625 5.5 5.5 5.6875 5.5 5.875V12.625C5.5 12.8438 5.65625 13 5.875 13Z" fill="#142333" fillOpacity="0.33" />
        </svg>
      </div>
    </div>
  );
};

export default TableJourneyItem;
