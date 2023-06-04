import React, { FC } from 'react';
import styles from './BroadcastChat.module.scss';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import InputMulti from '../../ui/InputMulti/InputMulti';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';

interface BroadcastChatProps { }

const BroadcastChat: FC<BroadcastChatProps> = () => (
  <div className={styles.BroadcastChat}>
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
        title="Брать из"
      >
        <Select
          className='input_width_default'
          placeholder="Выберите"
        ></Select>
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
      title="Сообщение в чате"
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
      <FieldItemUi>
        <Input
          className='input_width_default'
          placeholder="Введите сообщение"
        ></Input>
      </FieldItemUi>
      <FieldItemUi
        title="Сообщение"
      >
        <InputRadio
          name='message'
          items={[
            {
              value: 'text',
              name: 'Текст'
            },
            {
              value: 'media',
              name: 'Медиа'
            },
            {
              value: 'seller',
              name: 'Продавец'
            },
            {
              value: 'product',
              name: 'Продукт'
            },
            {
              value: 'category',
              name: 'Категория'
            }
          ]}
        ></InputRadio>
      </FieldItemUi>
      <FieldItemUi>
        <Button>Прикрепить</Button>
      </FieldItemUi>
    </FieldUi>
    <FieldUi
      title={<InputSwitch
        alignItems="center"
      >Пуш-уведомление</InputSwitch>}
    >
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
        <InputSwitch>Добавить к промо</InputSwitch>
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
        <InputSwitch>Пауза после привлечения пользователей</InputSwitch>
      </FieldItemUi>
    </FieldUi>
  </div>
);

export default BroadcastChat;
