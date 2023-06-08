import React, { FC } from 'react';
import styles from './TableTemplate.module.scss';
import Table from '../Table/Table';
import TableItem from '../Table/components/TableItem/TableItem';
import TableTemplateItem from '../TableTemplateItem/TableTemplateItem';

interface TableTemplateProps { }

const TableTemplate: FC<TableTemplateProps> = () => {
  const titles = [
    'Наименование',
    'Заголовок',
    'Тип',
    'Теги',
    'Папка',
    ''
  ];

  const data = [
    {
      data: {
        name: 'Наименование',
        title: 'Наименование',
        type: 'E-mail',
        is_active: false
      },
      info: {
        id: 'Наименование',
        type: "Пуш",
        keys: undefined,
        date_start: "20.12.2022, 10:30:25",
        date_end: "20.12.2022, 10:30:25",
        type_recipient: "Зарегистрированный",
        segments: ['eng_registred', 'eng_unregistred'],
        type_push: "Readonly",
        title: "Musescore",
        text: "Welcome to the world's largest community of Sheet music lovers!",
        link: 'https://',
        preview: [
          {
            name: 'iOS',
            image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
          },
          {
            name: 'Android',
            image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
          }
        ],
        message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
      },
      statistic: {
        successfully: 2000,
        total: 3000
      },
      statistic_2: {
        shipped: 3120,
        read: 4350,
        received: 3150
      }
    },
    {
      data: {
        name: 'New_user_no_order',
        title: 'Имя',
        type: 'E-mail',
        is_active: false
      },
      info: {
        id: '2',
        type: "Пуш",
        keys: undefined,
        date_start: "20.12.2022, 10:30:25",
        date_end: "20.12.2022, 10:30:25",
        type_recipient: "Зарегистрированный",
        segments: ['eng_registred', 'eng_unregistred'],
        type_push: "Readonly",
        title: "Musescore",
        text: "Welcome to the world's largest community of Sheet music lovers!",
        link: 'https://',
        preview: [
          {
            name: 'iOS',
            image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
          },
          {
            name: 'Android',
            image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
          }
        ],
        message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
      },
      statistic: {
        successfully: 2000,
        total: 3000
      },
      statistic_2: {
        shipped: 3120,
        read: 4350,
        received: 3150
      }
    },
    {
      data: {
        name: 'New_user_no_order 12w',
        title: 'Заголовок',
        type: 'E-mail',
        tags: ['default'],
        is_active: true
      },
      info: {
        id: 'Наименование',
        type: "Пуш",
        keys: undefined,
        date_start: "20.12.2022, 10:30:25",
        date_end: "20.12.2022, 10:30:27",
        type_recipient: "Зарегистрированный",
        segments: ['eng_unregistred'],
        type_push: "Readonly",
        title: "Musescore",
        text: "Текст рыба",
        link: 'https://',
        preview: [
          {
            name: 'iOS',
            image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
          },
          {
            name: 'Android',
            image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
          }
        ],
        message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
      },
      statistic: {
        successfully: 2050,
        total: 3010
      },
      statistic_2: {
        shipped: 3120,
        read: 4350,
        received: 3150
      }
    },
    {
      data: {
        name: 'Unregistred_week',
        title: 'Заголовок 2',
        type: 'E-mail',
        tags: ['default'],
        is_active: false
      },
      info: {
        id: 'Наименование',
        type: "Пуш",
        keys: undefined,
        date_start: "20.12.2022, 10:30:25",
        date_end: "20.12.2022, 10:30:25",
        type_recipient: "Зарегистрированный",
        segments: ['eng_registred', 'eng_unregistred'],
        type_push: "Readonly",
        title: "Musescore",
        text: "Welcome to the world's largest community of Sheet music lovers!",
        link: 'https://',
        preview: [
          {
            name: 'iOS',
            image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
          },
          {
            name: 'Android',
            image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
          }
        ],
        message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
      },
      statistic: {
        successfully: 2000,
        total: 3000
      },
      statistic_2: {
        shipped: 3120,
        read: 4350,
        received: 3150
      }
    },
    {
      data: {
        name: 'Balance_reps',
        title: 'Заголовок 3',
        type: 'E-mail',
        tags: ['default'],
        is_active: false
      },
      info: {
        id: 'Наименование',
        type: "Пуш",
        keys: undefined,
        date_start: "20.12.2022, 10:30:25",
        date_end: "20.12.2022, 10:30:25",
        type_recipient: "Зарегистрированный",
        segments: ['eng_registred', 'eng_unregistred'],
        type_push: "Readonly",
        title: "Musescore",
        text: "Welcome to the world's largest community of Sheet music lovers!",
        link: 'https://',
        preview: [
          {
            name: 'iOS',
            image: 'https://i.ibb.co/bR3T11Q/preview-ios.png',
          },
          {
            name: 'Android',
            image: 'https://i.ibb.co/1vXXyqh/preview-andorid.png',
          }
        ],
        message: "Browse through our diverse collection of Sheet music. Learn, print and play back your favorite scores. Follow your favorite Sheet music creators to find out about their newest scores as soon as they're posted"
      },
      statistic: {
        successfully: 2000,
        total: 3000
      },
      statistic_2: {
        shipped: 3120,
        read: 4350,
        received: 3150
      }
    },
  ];

  return (
    <div className={styles.TableTemplate}>
      <Table
        titles={titles}
        styleGridTemplate={styles.TableTemplate__grid_template}
      >
        {data?.length && data.map(item => (
          <TableItem
            key={item.data.name}
          >
            <TableTemplateItem
              data={item?.data}
              info={item?.info}
              statistic={item?.statistic}
              statistic_2={item?.statistic_2}
              styleGridTemplate={styles.TableTemplate__grid_template}
            ></TableTemplateItem>
          </TableItem>
        ))}
      </Table>
    </div>
  );
};

export default TableTemplate;
