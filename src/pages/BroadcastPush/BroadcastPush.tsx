import React, { FC } from 'react';
import styles from './BroadcastPush.module.scss';
import Title from '../../ui/Title/Title';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import InputMulti from '../../ui/InputMulti/InputMulti';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';
import InputBox from '../../ui/InputBox/InputBox';

interface BroadcastPushProps { }

const BroadcastPush: FC<BroadcastPushProps> = () => (
  <div className={styles.BroadcastPush}>
    <Title className={styles.BroadcastPush__title}>Создать пуш</Title>
    <FieldUi>
      <FieldItemUi
        title="Наименование"
      >
        <Input
          className='input_width_default'
          onClick={() => alert(5)}
        ></Input>
      </FieldItemUi>
      <FieldItemUi
        title="Папка"
      >
        <Select
          className='input_width_default'
        ></Select>
      </FieldItemUi>
    </FieldUi>
    <FieldUi
      title="Получатели"
    >
      <FieldItemUi
        title="Тип"
      >
        <SelectMulti
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
        ></SelectMulti>
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
      title="Пуш-уведомление"
    >
      <FieldItemUi
        title="Тип"
      >
        <Select
          className='input_width_default'
          placeholder="Выберите"
        ></Select>
      </FieldItemUi>
      <FieldItemUi
        title="Наименование"
      >
        <Input
          className='input_width_default'
          placeholder="Введите"
        ></Input>
      </FieldItemUi>
      <FieldItemUi
        title="Текст"
      >
        <Input
          className='input_width_default'
          placeholder="Введите"
        ></Input>
      </FieldItemUi>
      <FieldItemUi
        title="Внутренняя ссылка"
      >
        <Input
          className='input_width_default'
          placeholder="Введите"
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
      <FieldItemUi>
        <InputBox>Добавить к промо</InputBox>
      </FieldItemUi>
      <FieldItemUi
        title="Теги"
      >
        <InputMulti
          className='input_width_default'
          placeholder="Введите"
        ></InputMulti>
      </FieldItemUi>
      <FieldItemUi
        title="Ключи"
      >
        <Input
          className='input_width_default'
          placeholder="Введите"
        ></Input>
      </FieldItemUi>
      <FieldItemUi>
        <InputBox>Игнорировать частотный фильтр</InputBox>
      </FieldItemUi>
    </FieldUi>
    <FieldUi
      title="Время"
    >
      <FieldItemUi
        title="Рассылать в"
      >
        <div className='input_width_default field_time'>
          <InputSwitch>Реальном времени</InputSwitch>
          <Input placeholder='01.01.2023'></Input>
        </div>
      </FieldItemUi>
      <FieldItemUi>
        <InputBox>Делать паузу после привлечения пользователей</InputBox>
      </FieldItemUi>
    </FieldUi>
    <FieldUi
      title="Предпросмотр"
    >

    </FieldUi>
  </div>
);

export default BroadcastPush;
