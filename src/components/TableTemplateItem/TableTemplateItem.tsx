
import React, { FC, useState } from 'react';
import styles from './TableTemplateItem.module.scss';
import Tag from '../../ui/Tag/Tag';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Statistic, Statistic_2 } from '../../app/utils/chart/interface';
import { chartData } from '../../app/utils/chart/helpers';
import { PreviewItem } from '../../app/utils/preview/interface';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import Select from '../../ui/Select/Select';
import { iGetTemplate, useTemplateDeleteMutation } from '../../app/store/modules/template';

// interface TableTemplateItemProps {
//   data?: {
//     name?: string | undefined,
//     title?: string | undefined,
//     type?: string | undefined,
//     tags?: string[] | undefined,
//     folder?: string | undefined,
//     is_active: boolean | undefined
//   },
//   info?: {
//     id?: string | number | undefined,
//     type?: string | number | undefined,
//     keys?: string[] | undefined,
//     date_start?: string | undefined,
//     date_end?: string | undefined,
//     type_recipient?: string | undefined,
//     segments?: string[] | undefined,
//     type_push?: string | undefined,
//     title?: string | undefined,
//     text?: string | undefined,
//     link?: string | undefined,
//     preview?: Array<PreviewItem>,
//     message?: string | undefined,
//   },
//   statistic?: Statistic | undefined,
//   statistic_2?: Statistic_2 | undefined,
//   styleGridTemplate?: string | undefined
// }

interface TableTemplateItemProps {
  data: iGetTemplate,
  styleGridTemplate?: string
}

const TableTemplateItem: FC<TableTemplateItemProps> = ({
  data,
  // info,
  // statistic,
  // statistic_2,
  styleGridTemplate
}) => {
  const [isShow, setIsShow] = useState(false);
  const [deleteTemplate] = useTemplateDeleteMutation();

  const classActive = isShow ? ' ' + styles.TableTemplateItem_active : '';

  const classGridTemplate = styleGridTemplate ? ' ' + styleGridTemplate : '';

  // const data1 = chartData({
  //   data: [statistic?.successfully, (statistic?.total ?? statistic?.successfully ?? 0) - (statistic?.successfully ?? 0)],
  //   type: 'short'
  // })

  // const data2 = chartData({
  //   data: [statistic_2?.shipped ?? 0, statistic_2?.read ?? 0, statistic_2?.received ?? 0],
  // });

  return (
    <div className={styles.TableTemplateItem + classActive}>
      <div className={styles.TableTemplateItem__short + classGridTemplate}>
        <div className={styles.TableTemplateItem__name}
          onClick={() => setIsShow(prev => !prev)}
        >
          <svg className={styles.TableTemplateItem__arrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.03125C0 9.59375 0.65625 9.875 1.0625 9.46875L5.0625 5.46875C5.3125 5.21875 5.3125 4.8125 5.0625 4.5625L1.0625 0.5625C0.65625 0.15625 0 0.4375 0 1V9.03125Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <div>{data?.title}</div>
        </div>
        <div className="">{data?.subject}</div>
        <div className="">{data?.type}</div>
        {/* <div className={styles.TableTemplateItem__tags}>
          {data?.tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div> */}
        <div className="">
          {data?.message_format}
        </div>
        <div className="">
          {data?.lang_code}
          {/* <Select
            styleColor='grey'
            placeholder='Выберите папку'
          ></Select> */}
        </div>
        <div className={styles.TableTemplateItem__icons}>
          <InputSwitch defaultChecked={true}></InputSwitch>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4062 1.78125L15.2188 0.59375C14.8438 0.21875 14.3125 0 13.8125 0C13.3125 0 12.7812 0.21875 12.4062 0.59375L10.0625 2.9375L9 4L1.375 11.625L1 15.1875C0.9375 15.625 1.28125 16 1.71875 16C1.75 16 1.78125 16 1.8125 16L5.375 15.625L13 8L14.0625 6.9375L16.4062 4.59375C17.1875 3.8125 17.1875 2.5625 16.4062 1.78125ZM4.6875 14.1875L2.59375 14.4062L2.8125 12.3125L10.0312 5.0625L11 4.09375L12.9062 6L11.9375 6.96875L4.6875 14.1875ZM15.3438 3.53125L13.9688 4.9375L12.0625 3.03125L13.4688 1.65625C13.5938 1.53125 13.75 1.5 13.8125 1.5C13.875 1.5 14.0312 1.53125 14.1562 1.65625L15.3438 2.84375C15.5312 3.03125 15.5312 3.34375 15.3438 3.53125Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <svg onClick={() => deleteTemplate(data?.id)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.375 13H10.125C10.3125 13 10.5 12.8438 10.5 12.625V5.875C10.5 5.6875 10.3125 5.5 10.125 5.5H9.375C9.15625 5.5 9 5.6875 9 5.875V12.625C9 12.8438 9.15625 13 9.375 13ZM14.5 2.5H11.9062L10.8438 0.75C10.5938 0.34375 10.0312 0 9.5625 0H6.40625C5.9375 0 5.375 0.34375 5.125 0.75L4.0625 2.5H1.5C1.21875 2.5 1 2.75 1 3V3.5C1 3.78125 1.21875 4 1.5 4H2V14.5C2 15.3438 2.65625 16 3.5 16H12.5C13.3125 16 14 15.3438 14 14.5V4H14.5C14.75 4 15 3.78125 15 3.5V3C15 2.75 14.75 2.5 14.5 2.5ZM6.34375 1.59375C6.375 1.5625 6.46875 1.5 6.5 1.5H6.53125H9.46875C9.5 1.5 9.59375 1.5625 9.625 1.59375L10.1562 2.5H5.8125L6.34375 1.59375ZM12.5 14.5H3.5V4H12.5V14.5ZM5.875 13H6.625C6.8125 13 7 12.8438 7 12.625V5.875C7 5.6875 6.8125 5.5 6.625 5.5H5.875C5.65625 5.5 5.5 5.6875 5.5 5.875V12.625C5.5 12.8438 5.65625 13 5.875 13Z" fill="#142333" fillOpacity="0.33" />
          </svg>
        </div>
      </div>
      {/* {
        isShow && (
          <div className={styles.TableTemplateItem__info}>
            <div className={styles.TableTemplateItem__info_left}>
              <div className={styles.TableTemplateItem__block}>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Id</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.id}</div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Тип</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.type}</div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Ключи</div>
                  <div className={styles.TableTemplateItem__block_value}>
                    {info?.keys?.map(key => (
                      <span key={key}>{key}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Начало отправки</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.date_start}</div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Окончание отправки</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.date_end}</div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Тип получателя</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.type_recipient}</div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Сегменты</div>
                  <div className={styles.TableTemplateItem__block_value}>
                    {info?.segments?.map(segment => (
                      <Tag key={segment} className={styles.TableTemplateItem__block_tag}>{segment}</Tag>
                    ))}
                  </div>
                </div>
                <div className={styles.TableTemplateItem__block_flex}>
                  <div className={styles.TableTemplateItem__block_name}>Тип пуш-уведомления</div>
                  <div className={styles.TableTemplateItem__block_value}>{info?.type_push}</div>
                </div>
              </div>
              <div className={styles.TableTemplateItem__statistic + ' ' + styles.TableTemplateItem__block}>
                <div className={styles.TableTemplateItem__block_name}>Статистика</div>
                <div className={styles.TableTemplateItem__charts}>
                  <div className={styles.TableTemplateItem__chart}>
                    <Doughnut
                      data={data1}
                      width="100%"
                    ></Doughnut>
                    <span className={styles.TableTemplateItem__chart_info}>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}
                          style={{ backgroundColor: '#F4BE37' }}
                        ></div>
                        <div className={styles.TableTemplateItem__chart_name}>Успешно</div>
                        <div>{statistic?.successfully}</div>
                      </div>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}></div>
                        <div className={styles.TableTemplateItem__chart_name}>Всего</div>
                        <div>{statistic?.total}</div>
                      </div>
                    </span>
                  </div>
                  <div className={styles.TableTemplateItem__chart}>
                    <Doughnut
                      data={data2}
                      width="50%"
                    ></Doughnut>
                    <div className={styles.TableTemplateItem__chart_info}>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}
                          style={{ backgroundColor: 'var(--brand_primary_2)' }}
                        ></div>
                        <div className={styles.TableTemplateItem__chart_name}>Отправлено</div>
                        <div>{statistic_2?.shipped}</div>
                      </div>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}
                          style={{ backgroundColor: '#35BB73' }}
                        ></div>
                        <div className={styles.TableTemplateItem__chart_name}>Прочитано</div>
                        <div>{statistic_2?.read}</div>
                      </div>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}
                          style={{ backgroundColor: '#F4BE37' }}
                        ></div>
                        <div className={styles.TableTemplateItem__chart_name}>Получено</div>
                        <div>{statistic_2?.received}</div>
                      </div>
                      <div className={styles.TableTemplateItem__chart_flex}>
                        <div className={styles.TableTemplateItem__chart_icon}></div>
                        <div className={styles.TableTemplateItem__chart_name}>Всего</div>
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
            <div className={styles.TableTemplateItem__block + ' ' + styles.TableTemplateItem__info_right}>
              <div className={styles.TableTemplateItem__block_flex_column}>
                <div className={styles.TableTemplateItem__block_name}>Заголовок</div>
                <div className={styles.TableTemplateItem__block_value}>{info?.title}</div>
              </div>
              <div className={styles.TableTemplateItem__block_flex_column}>
                <div className={styles.TableTemplateItem__block_name}>Текст</div>
                <div className={styles.TableTemplateItem__block_value}>{info?.text}</div>
              </div>
              <div className={styles.TableTemplateItem__block_flex_column}>
                <div className={styles.TableTemplateItem__block_name}>Внутренняя ссылка</div>
                <div className={styles.TableTemplateItem__block_value}>{info?.link}</div>
              </div>
              <div className={styles.TableTemplateItem__block_flex_column}>
                <div className={styles.TableTemplateItem__block_name}>Превью</div>
                <div className={styles.TableTemplateItem__block_value}>
                  <div className={styles.TableTemplateItem__block_images}>
                    {info?.preview?.map(previewItem => (
                      <div key={previewItem?.name} className={styles.TableTemplateItem__block_image}>
                        <img loading="lazy" src={previewItem?.image} alt={previewItem?.name} />
                        <span>{previewItem?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.TableTemplateItem__block_flex_column}>
                <div className={styles.TableTemplateItem__block_name}>Сообщение</div>
                <div className={styles.TableTemplateItem__block_value}>{info?.message}</div>
              </div>
            </div>
          </div>
        )
      } */}
    </div >
  );
};

export default TableTemplateItem;