import React, { FC, lazy } from 'react';
import styles from './ABTestCreate.module.scss';
import Title from '../../ui/Title/Title';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';
import TopNav from '../../components/TopNav/TopNav';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface ABTestCreateProps { }

const ABTestCreate: FC<ABTestCreateProps> = () => {
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
      <div className={styles.ABTestCreate}>
        <div className={styles.ABTestCreate__inner}>
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
              title="Имя трекера"
            >
              <Input
                className='input_width_default'
                placeholder="Введите"
              ></Input>
            </FieldItemUi>
            <FieldItemUi
              title="Теги"
            >
              <Select
                className='input_width_default'
                placeholder="Введите"
              ></Select>
            </FieldItemUi>
            <FieldItemUi
              title="Срок"
            >
              <div className={styles.ABTestCreate__selects + ' input_width_default'}>
                <Select
                  className='input_width_default_half'
                  placeholder="1"
                ></Select>
                <Select
                  className='input_width_default_half'
                  placeholder="день"
                ></Select>
              </div>
            </FieldItemUi>
            <FieldItemUi
              title=""
            >
              <div className={styles.ABTestCreate__helper + ' input_width_default'}>
                <span>Тест завершиться ориентировочно</span>
                <Input className='input_width_default_half' value='15.02.2023, 10:30:25' disabled></Input>
              </div>
            </FieldItemUi>
            <FieldItemUi
              title="Доля аудитории"
            >
              <Select
                className='input_width_default_half'
                placeholder="Выберите"
              ></Select>
            </FieldItemUi>
          </FieldUi>
          <FieldUi
            title="A тест"
          >
            <FieldItemUi
              title="Имя шаблона"
            >
              <Select
                className='input_width_default'
                placeholder="Введите"
              ></Select>
            </FieldItemUi>
          </FieldUi>
          <FieldUi
            title="B тест"
          >
            <FieldItemUi
              title="Имя шаблона"
            >
              <Select
                className='input_width_default'
                placeholder="Введите"
              ></Select>
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

export default ABTestCreate;
