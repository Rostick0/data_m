import React, { FC, lazy } from 'react';
import styles from './ABTestCreateSecond.module.scss';
import Title from '../../ui/Title/Title';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';
import TopNav from '../../components/TopNav/TopNav';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface ABTestCreateSecondProps { }

const ABTestCreateSecond: FC<ABTestCreateSecondProps> = () => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/a_b_test/list',
      name: 'Список A/B тестов'
    },
    {
      id: 2,
      icon: `/`,
      name: 'Новый тест'
    },
  ];

  return (
    <>
      <TopNav links={links}></TopNav>
      <div className={styles.ABTestCreateSecond}>
        <div className={styles.ABTestCreateSecond__inner}>
          <Title>Создать A/B тест</Title>
          <FieldUi
            title="Получатели"
          >
            <FieldItemUi
              title="Тип"
            >
              <Select
                className='input_width_default'
                placeholder="Выберите"
                items={[
                  {
                    name: 132131231231312,
                    value: 1
                  },
                  {
                    name: 'dsadas3132131231231312',
                    value: 2
                  },
                  {
                    name: 'd44412h532gj5j4f35',
                    value: 3
                  },
                ]}
              ></Select>
            </FieldItemUi>
            <FieldItemUi
              title="Источник"
            >
              <InputRadio
                name="sources"
                items={[
                  {
                    value: 'segments',
                    name: 'Сегменты',
                    checked: true
                  },
                  {
                    value: 'local_csv',
                    name: 'Локальный CSV'
                  },
                  {
                    value: 's3_csv',
                    name: 'S3 CSV'
                  }
                ]}
              ></InputRadio>
            </FieldItemUi>
            <FieldItemUi
              title="BI компоненты"
            >
              <Select
                className='input_width_default'
                placeholder="Выберите"
              ></Select>
            </FieldItemUi>
            <FieldItemUi
              title="S3 компоненты"
            >
              <Input
                className='input_width_default'
                placeholder="Выберите"
              ></Input>
            </FieldItemUi>
          </FieldUi>
          <FieldUi
            title="Настройки"
          >
            <FieldItemUi
              title="Папка"
            >
              <Input
                className='input_width_default'
                placeholder="Введите"
              ></Input>
            </FieldItemUi>
            <FieldItemUi
              title="Соотношение"
            >
              <div className={styles.ABTestCreateSecond__helper + ' input_width_default'}>
                <Input className='input_width_default_half' value='50'></Input>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 11C26.2652 11 26.5196 11.1054 26.7071 11.2929C26.8946 11.4804 27 11.7348 27 12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13H25L24.997 13.071L24.064 26.142C24.0281 26.6466 23.8023 27.1188 23.4321 27.4636C23.0619 27.8083 22.5749 28 22.069 28H13.93C13.4241 28 12.9371 27.8083 12.5669 27.4636C12.1967 27.1188 11.9709 26.6466 11.935 26.142L11.002 13.072C11.0005 13.048 10.9998 13.024 11 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H26ZM22.997 13H13.003L13.931 26H22.069L22.997 13ZM20 8C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10H16C15.7348 10 15.4804 9.89464 15.2929 9.70711C15.1054 9.51957 15 9.26522 15 9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8H20Z" fill="#142333" fill-opacity="0.33" />
                </svg>
              </div>
            </FieldItemUi>
            <FieldItemUi
            >
              <div className={styles.ABTestCreateSecond__helper + ' input_width_default'}>
                <Input className='input_width_default_half' value='50'></Input>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 11C26.2652 11 26.5196 11.1054 26.7071 11.2929C26.8946 11.4804 27 11.7348 27 12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13H25L24.997 13.071L24.064 26.142C24.0281 26.6466 23.8023 27.1188 23.4321 27.4636C23.0619 27.8083 22.5749 28 22.069 28H13.93C13.4241 28 12.9371 27.8083 12.5669 27.4636C12.1967 27.1188 11.9709 26.6466 11.935 26.142L11.002 13.072C11.0005 13.048 10.9998 13.024 11 13H10C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11H26ZM22.997 13H13.003L13.931 26H22.069L22.997 13ZM20 8C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10H16C15.7348 10 15.4804 9.89464 15.2929 9.70711C15.1054 9.51957 15 9.26522 15 9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8H20Z" fill="#142333" fill-opacity="0.33" />
                </svg>
              </div>
            </FieldItemUi>
            <FieldItemUi
            >
              <Button
                className='button_with_icon input_width_default_half justify-content-center'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fill-opacity="0.66" />
                </svg>
                <span>Разделить</span>
              </Button>
            </FieldItemUi>
          </FieldUi>
          <FieldButtons>
            <Button styleColor='grey'>Очистить</Button>
            <Button className='button_with_icon'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 8.49997L10.5 16.9999L5 11.4999L6.41 10.0899L10.5 14.1699L17.59 7.08997L19 8.49997Z" fill="white" />
              </svg>
              <span>Запустить тест</span>
            </Button>
          </FieldButtons>
        </div>
      </div>
    </>
  );
};
export default ABTestCreateSecond;
