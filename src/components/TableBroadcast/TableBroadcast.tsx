import React, { FC } from 'react';
import styles from './TableBroadcast.module.scss';
import Table from '../Table/Table';
import TableBroadcastItem from '../TableBroadcastItem/TableBroadcastItem';
import TableItem from '../Table/components/TableItem/TableItem';
import { typeStatus } from '../../ui/Status/Status';
import { iGetCampaign } from '../../app/store/modules/campaign';

interface TableBroadcastProps {
  data?: iGetCampaign[]
}

const TableBroadcast: FC<TableBroadcastProps> = ({ data }) => {
  const titles = [
    'Наименование',
    'Тип',
    'Польз. в проц./всего',
    'Теги',
    'Дата и время',
    'Статус',
    'Папка',
    ''
  ];

  // const data = [
  //   {
  //     data: {
  //       name: 'Наименование',
  //       type: 'E-mail',
  //       current_users: 88,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 10:30:25',
  //       status: "working" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:25",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2000,
  //       total: 3000
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'New_user_no_order',
  //       type: 'E-mail',
  //       current_users: 31,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 10:31:25',
  //       status: "working" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: '2',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:25",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2000,
  //       total: 3000
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Verification',
  //       type: 'E-mail',
  //       current_users: 88,
  //       max_users: 134,
  //       tags: ['Новый', 'Без заказов'],
  //       date: '20.12.2023, 10:30:25',
  //       status: "active" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:27",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Текст рыба",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2050,
  //       total: 3010
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Unregistred_week',
  //       type: 'E-mail',
  //       current_users: 12,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 03:30:25',
  //       status: "working" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:25",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2000,
  //       total: 3000
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Balance_reps',
  //       type: 'E-mail',
  //       current_users: 89,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 10:30:25',
  //       status: "working" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:25",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2000,
  //       total: 3000
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Имя',
  //       type: 'E-mail',
  //       current_users: 88,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 10:30:25',
  //       status: "working" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.12.2022, 10:30:25",
  //       date_end: "20.12.2022, 10:30:25",
  //       type_recipient: "Зарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Musescore",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 2000,
  //       total: 3000
  //     },
  //     statistic_2: {
  //       shipped: 3120,
  //       read: 4350,
  //       received: 3150
  //     }
  //   },
  //   {
  //     data: {
  //       name: 'Имя 2',
  //       type: 'E-mail',
  //       current_users: 88,
  //       max_users: 134,
  //       tags: ['default'],
  //       date: '20.12.2022, 10:30:25',
  //       status: "draft" as typeStatus,
  //       folder: '',
  //     },
  //     info: {
  //       id: 'Наименование',
  //       type: "Пуш",
  //       keys: undefined,
  //       date_start: "20.10.2022, 10:30:25",
  //       date_end: "20.10.2022, 10:30:25",
  //       type_recipient: "Незарегистрированный",
  //       segments: ['eng_registred', 'eng_unregistred'],
  //       type_push: "Readonly",
  //       title: "Заголовок",
  //       text: "Welcome to the world's largest community of Sheet music lovers!",
  //       link: 'https://',
  //       preview: [
  //         {
  //           name: 'iOS',
  //           image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
  //         },
  //         {
  //           name: 'Android',
  //           image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
  //         }
  //       ],
  //       message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
  //     },
  //     statistic: {
  //       successfully: 3145,
  //       total: 4000
  //     },
  //     statistic_2: {
  //       shipped: 321,
  //       read: 132,
  //       received: 124
  //     }
  //   }
  // ];


  return (
    <div className={styles.TableBroadcast}>
      <Table
        styleGridTemplate={styles.TableBroadcast__grid_template}
        titles={titles}
      >
        {!!data?.length && data?.map(item => (
          <TableItem
            key={item?.id}>
            <TableBroadcastItem
              data={item}
              // info={item?.info}
              // statistic={item?.statistic}
              // statistic_2={item?.statistic_2}
              styleGridTemplate={styles.TableBroadcast__grid_template}
            ></TableBroadcastItem>
          </TableItem>
        ))}
      </Table>
    </div>
  );
}

export default TableBroadcast;
