import React, { FC, useState } from 'react';
import styles from './TableBroadcastItem.module.scss';
import Tag from '../../ui/Tag/Tag';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Status, { typeStatus } from '../../ui/Status/Status';
import Select from '../../ui/Select/Select';

interface Statistic {
  successfully?: number | undefined,
  total?: number | undefined
}

interface Statistic_2 {
  shipped?: number | undefined,
  read?: number | undefined,
  received?: number | undefined
}

interface PreviewItem {
  name?: string | undefined,
  image?: string | undefined,
}
interface TableBroadcastItemProps {
  data?: {
    name?: string | undefined,
    type?: string | undefined,
    current_users?: number | undefined,
    max_users?: number | undefined,
    tags?: string[] | undefined,
    date?: string | undefined,
    status?: typeStatus | null | undefined,
    folder?: string | undefined,
  },
  info?: {
    id?: string | number | undefined,
    type?: string | number | undefined,
    keys?: string[] | undefined,
    date_start?: string | undefined,
    date_end?: string | undefined,
    type_recipient?: string | undefined,
    segments?: string[] | undefined,
    type_push?: string | undefined,
    title?: string | undefined,
    text?: string | undefined,
    link?: string | undefined,
    preview?: Array<PreviewItem>,
    message?: string | undefined,
  },
  statistic?: Statistic | undefined,
  statistic_2?: Statistic_2 | undefined,
}

const TableBroadcastItem: FC<TableBroadcastItemProps> = ({
  data,
  info,
  statistic,
  statistic_2
}) => {
  const [isShow, setIsShow] = useState(false);

  const classActive = isShow ? ' ' + styles.TableBroadcastItem_active : '';

  const data1 = {
    labels: [],
    datasets: [{
      label: '',
      data: [statistic?.successfully, (statistic?.total ?? statistic?.successfully ?? 0) - (statistic?.successfully ?? 0)],
      backgroundColor: [
        '#F4BE37',
        '#F5F8FA'
      ]
    }],
  };

  const data2 = {
    labels: [],
    datasets: [{
      label: '',
      data: [statistic_2?.shipped, statistic_2?.read, statistic_2?.received],
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

  return (
    <div className={styles.TableBroadcastItem + classActive}>
      <div className={styles.TableBroadcastItem__short}>
        <div className={styles.TableBroadcastItem__name}
          onClick={() => setIsShow(prev => !prev)}
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.03125C0 9.59375 0.65625 9.875 1.0625 9.46875L5.0625 5.46875C5.3125 5.21875 5.3125 4.8125 5.0625 4.5625L1.0625 0.5625C0.65625 0.15625 0 0.4375 0 1V9.03125Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <div>{data?.name}</div>
        </div>
        <div className="">{data?.type}</div>
        <div className="">{data?.current_users}/{data?.max_users}</div>
        <div className={styles.TableBroadcastItem__tags}>
          {data?.tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <div className="">{data?.date}</div>
        <div className="">
          <Status
            type={data?.status ?? 'draft'}
          ></Status>
        </div>
        <div className="">
          <Select
            defaultValue={data?.folder}
            styleColor='grey'
            placeholder="Выберите папку"
          ></Select>
        </div>
        <div className={styles.TableBroadcastItem__icons}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.53125 14.25 1.75 11.4688 1.75 8C1.75 4.5625 4.53125 1.75 8 1.75C11.4375 1.75 14.25 4.5625 14.25 8C14.25 11.4688 11.4375 14.25 8 14.25ZM9.90625 11C10.0938 11.125 10.3125 11.0938 10.4375 10.9062L11.0312 10.125C11.1562 9.9375 11.125 9.71875 10.9375 9.59375L8.875 8.0625V3.625C8.875 3.4375 8.6875 3.25 8.5 3.25H7.5C7.28125 3.25 7.125 3.4375 7.125 3.625V8.78125C7.125 8.875 7.15625 9 7.25 9.0625L9.90625 11Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.875 0.90625C0.625 0.65625 0.25 0.84375 0.25 1.15625V5.625C0.25 5.84375 0.40625 6 0.625 6H5.09375C5.40625 6 5.59375 5.625 5.34375 5.375L3.65625 3.6875C4.75 2.5625 6.28125 1.875 8 1.875C11.375 1.875 14.125 4.625 14.125 8C14.125 11.4062 11.375 14.125 8 14.125C6.40625 14.125 5 13.5625 3.90625 12.5938C3.75 12.4688 3.53125 12.4688 3.40625 12.5938L2.78125 13.2188C2.625 13.375 2.625 13.625 2.78125 13.7812C4.15625 15 6 15.75 8 15.75C12.25 15.75 15.7188 12.3125 15.75 8.03125C15.75 3.75 12.25 0.25 7.96875 0.25C5.84375 0.25 3.90625 1.125 2.5 2.53125L0.875 0.90625Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <div className={styles.TableBroadcastItem__application}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 8C9.5 7.1875 8.8125 6.5 8 6.5C7.15625 6.5 6.5 7.1875 6.5 8C6.5 8.84375 7.15625 9.5 8 9.5C8.8125 9.5 9.5 8.84375 9.5 8ZM13.25 6.5C12.4062 6.5 11.75 7.1875 11.75 8C11.75 8.84375 12.4062 9.5 13.25 9.5C14.0625 9.5 14.75 8.84375 14.75 8C14.75 7.1875 14.0625 6.5 13.25 6.5ZM2.75 6.5C1.90625 6.5 1.25 7.1875 1.25 8C1.25 8.84375 1.90625 9.5 2.75 9.5C3.5625 9.5 4.25 8.84375 4.25 8C4.25 7.1875 3.5625 6.5 2.75 6.5Z" fill="#142333" fillOpacity="0.33" />
            </svg>
            <ul className={styles.TableBroadcastItem__menu}>
              <li className={styles.TableBroadcastItem__menu_item}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 0H4.5C3.65625 0 3 0.6875 3 1.5V3H1.5C0.65625 3 0 3.6875 0 4.5V14.5C0 15.3438 0.65625 16 1.5 16H11.5C12.3125 16 13 15.3438 13 14.5V13H14.5C15.3125 13 16 12.3438 16 11.5V1.5C16 0.6875 15.3125 0 14.5 0ZM11.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V4.6875C1.5 4.59375 1.5625 4.5 1.6875 4.5H3V11.5C3 12.3438 3.65625 13 4.5 13H11.5V14.3125C11.5 14.4375 11.4062 14.5 11.3125 14.5ZM14.3125 11.5H4.6875C4.5625 11.5 4.5 11.4375 4.5 11.3125V1.6875C4.5 1.59375 4.5625 1.5 4.6875 1.5H14.3125C14.4062 1.5 14.5 1.59375 14.5 1.6875V11.3125C14.5 11.4375 14.4062 11.5 14.3125 11.5Z" fill="#142333" fillOpacity="0.33" />
                </svg>
                <div>Copy</div>
              </li>
              <li className={styles.TableBroadcastItem__menu_item}>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8438 14.8125L15.2812 12.25C15.6875 11.6875 15.9688 10.6875 15.9688 10C15.9688 7.8125 14.1875 6 11.9688 6C9.78125 6 7.96875 7.8125 7.96875 10C7.96875 12.2188 9.78125 14 11.9688 14C12.6562 14 13.6562 13.7188 14.2188 13.3125L16.7812 15.875C16.8438 15.9375 17.0312 16.0312 17.125 16.0312C17.25 16.0312 17.4062 15.9375 17.5 15.875L17.8438 15.5C17.9062 15.4375 17.9688 15.2812 17.9688 15.1562C17.9688 15.0625 17.9062 14.875 17.8438 14.8125ZM12 12.5C10.5938 12.5 9.5 11.4062 9.5 10C9.5 8.625 10.5938 7.5 12 7.5C13.375 7.5 14.5 8.625 14.5 10C14.4688 11.4062 13.375 12.5 12 12.5ZM1.5 14.5V1.53125H6.5V4.78125C6.5 5.1875 6.8125 5.53125 7.21875 5.53125H7.25H9.84375C10.5 5.21875 11.2188 5.03125 12 5.03125V4.125C11.9688 3.8125 11.7812 3.3125 11.5312 3.0625L8.9375 0.46875C8.6875 0.21875 8.21875 0.03125 7.875 0H1.5C0.65625 0.03125 0 0.6875 0 1.53125V14.5C0 15.3438 0.65625 16 1.5 16H10.5C11.0625 16 11.7188 15.5625 11.9062 15C11.3125 15 10.375 14.7812 9.84375 14.5H1.5ZM8 1.625L10.375 4.03125H8V1.625Z" fill="#142333" fillOpacity="0.33" />
                </svg>
                <div>Action</div>
              </li>
              <li className={styles.TableBroadcastItem__menu_item}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.375 13H10.125C10.3125 13 10.5 12.8438 10.5 12.625V5.875C10.5 5.6875 10.3125 5.5 10.125 5.5H9.375C9.15625 5.5 9 5.6875 9 5.875V12.625C9 12.8438 9.15625 13 9.375 13ZM14.5 2.5H11.9062L10.8438 0.75C10.5938 0.34375 10.0312 0 9.5625 0H6.40625C5.9375 0 5.375 0.34375 5.125 0.75L4.0625 2.5H1.5C1.21875 2.5 1 2.75 1 3V3.5C1 3.78125 1.21875 4 1.5 4H2V14.5C2 15.3438 2.65625 16 3.5 16H12.5C13.3125 16 14 15.3438 14 14.5V4H14.5C14.75 4 15 3.78125 15 3.5V3C15 2.75 14.75 2.5 14.5 2.5ZM6.34375 1.59375C6.375 1.5625 6.46875 1.5 6.5 1.5H6.53125H9.46875C9.5 1.5 9.59375 1.5625 9.625 1.59375L10.1562 2.5H5.8125L6.34375 1.59375ZM12.5 14.5H3.5V4H12.5V14.5ZM5.875 13H6.625C6.8125 13 7 12.8438 7 12.625V5.875C7 5.6875 6.8125 5.5 6.625 5.5H5.875C5.65625 5.5 5.5 5.6875 5.5 5.875V12.625C5.5 12.8438 5.65625 13 5.875 13Z" fill="#142333" fillOpacity="0.33" />
                </svg>
                <div>Delete</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        isShow && (
          <div className={styles.TableBroadcastItem__info}>
            <div className={styles.TableBroadcastItem__info_left}>
              <div className={styles.TableBroadcastItem__block}>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Id</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.id}</div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Тип</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.type}</div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Ключи</div>
                  <div className={styles.TableBroadcastItem__block_value}>
                    {info?.keys?.map(key => (
                      <span key={key}>{key}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Начало отправки</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.date_start}</div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Окончание отправки</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.date_end}</div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Тип получателя</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.type_recipient}</div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Сегменты</div>
                  <div className={styles.TableBroadcastItem__block_value}>
                    {info?.segments?.map(segment => (
                      <Tag key={segment} className={styles.TableBroadcastItem__block_tag}>{segment}</Tag>
                    ))}
                  </div>
                </div>
                <div className={styles.TableBroadcastItem__block_flex}>
                  <div className={styles.TableBroadcastItem__block_name}>Тип пуш-уведомления</div>
                  <div className={styles.TableBroadcastItem__block_value}>{info?.type_push}</div>
                </div>
              </div>
              <div className={styles.TableBroadcastItem__statistic + ' ' + styles.TableBroadcastItem__block}>
                <div className={styles.TableBroadcastItem__block_name}>Статистика</div>
                <div className={styles.TableBroadcastItem__charts}>
                  <div className={styles.TableBroadcastItem__chart}>
                    <Doughnut
                      data={data1}
                      width="100%"
                    ></Doughnut>
                    <span className={styles.TableBroadcastItem__chart_info}>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}
                          style={{ backgroundColor: '#F4BE37' }}
                        ></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Успешно</div>
                        <div>{statistic?.successfully}</div>
                      </div>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Всего</div>
                        <div>{statistic?.total}</div>
                      </div>
                    </span>
                  </div>
                  <div className={styles.TableBroadcastItem__chart}>
                    <Doughnut
                      data={data2}
                      width="50%"
                    ></Doughnut>
                    <div className={styles.TableBroadcastItem__chart_info}>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}
                          style={{ backgroundColor: 'var(--brand_primary_2)' }}
                        ></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Отправлено</div>
                        <div>{statistic_2?.shipped}</div>
                      </div>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}
                          style={{ backgroundColor: '#35BB73' }}
                        ></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Прочитано</div>
                        <div>{statistic_2?.read}</div>
                      </div>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}
                          style={{ backgroundColor: '#F4BE37' }}
                        ></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Получено</div>
                        <div>{statistic_2?.received}</div>
                      </div>
                      <div className={styles.TableBroadcastItem__chart_flex}>
                        <div className={styles.TableBroadcastItem__chart_icon}></div>
                        <div className={styles.TableBroadcastItem__chart_name}>Всего</div>
                        <div>{
                          (statistic_2?.shipped ?? 0)
                          +
                          (statistic_2?.read ?? 0)
                          +
                          (statistic_2?.received ?? 0)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TableBroadcastItem__block + ' ' + styles.TableBroadcastItem__info_right}>
              <div className={styles.TableBroadcastItem__block_flex_column}>
                <div className={styles.TableBroadcastItem__block_name}>Заголовок</div>
                <div className={styles.TableBroadcastItem__block_value}>{info?.title}</div>
              </div>
              <div className={styles.TableBroadcastItem__block_flex_column}>
                <div className={styles.TableBroadcastItem__block_name}>Текст</div>
                <div className={styles.TableBroadcastItem__block_value}>{info?.text}</div>
              </div>
              <div className={styles.TableBroadcastItem__block_flex_column}>
                <div className={styles.TableBroadcastItem__block_name}>Внутренняя ссылка</div>
                <div className={styles.TableBroadcastItem__block_value}>{info?.link}</div>
              </div>
              <div className={styles.TableBroadcastItem__block_flex_column}>
                <div className={styles.TableBroadcastItem__block_name}>Превью</div>
                <div className={styles.TableBroadcastItem__block_value}>
                  <div className={styles.TableBroadcastItem__block_images}>
                    {info?.preview?.map(previewItem => (
                      <div key={previewItem?.name} className={styles.TableBroadcastItem__block_image}>
                        <img loading="lazy" src={previewItem?.image} alt={previewItem?.name} />
                        <span>{previewItem?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.TableBroadcastItem__block_flex_column}>
                <div className={styles.TableBroadcastItem__block_name}>Сообщение</div>
                <div className={styles.TableBroadcastItem__block_value}>{info?.message}</div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default TableBroadcastItem;
