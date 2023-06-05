import React, { FC, lazy } from 'react';
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
import KeysAdd from '../../components/KeysAdd/KeysAdd';
import PhoneSwitch from '../../components/PhoneSwitch/PhoneSwitch';
import PhoneAndroidAlert from '../../components/PhoneAndroid/components/PhoneAndroidAlert/PhoneAndroidAlert';
import PhoneIphoneAlert from '../../components/PhoneIphone/components/PhoneIphoneAlert/PhoneIphoneAlert';
import PhoneAndroidChat from '../../components/PhoneAndroid/components/PhoneAndroidChat/PhoneAndroidChat';
import PhoneIphoneChat from '../../components/PhoneIphone/components/PhoneIphoneChat/PhoneIphoneChat';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface BroadcastChatProps { }

const BroadcastChat: FC<BroadcastChatProps> = () => (
  <div className={styles.BroadcastChat}>
    <div>
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
                name: 'Текст',
                checked: true
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
          <Input
            className='input_width_default'
            placeholder='Введите сообщение'
          ></Input>
        </FieldItemUi>
        <FieldItemUi>
          <Button className="button_with_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white" />
            </svg>
            <span>Прикрепить</span>
          </Button>
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
          <KeysAdd></KeysAdd>
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
      {/* <FieldButtons>
        <Button>Очистить</Button>
        <Button className='button_with_icon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8.49997L10.5 16.9999L5 11.4999L6.41 10.0899L10.5 14.1699L17.59 7.08997L19 8.49997Z" fill="white" />
          </svg>
          <span>Сохранить</span>
        </Button>
      </FieldButtons> */}
    </div>
    <div>
      <PhoneSwitch
        className={styles.BroadcastChat__first_phone}
        androidChildren={<PhoneAndroidChat></PhoneAndroidChat>}
        iphoneChildren={<PhoneIphoneChat></PhoneIphoneChat>}
      ></PhoneSwitch>
      <PhoneSwitch
        androidChildren={<PhoneAndroidAlert></PhoneAndroidAlert>}
        iphoneChildren={<PhoneIphoneAlert></PhoneIphoneAlert>}
      ></PhoneSwitch>
    </div>
  </div>
);

export default BroadcastChat;
