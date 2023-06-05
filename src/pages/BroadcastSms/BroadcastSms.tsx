import React, { FC } from 'react';
import styles from './BroadcastSms.module.scss';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import InputMulti from '../../ui/InputMulti/InputMulti';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import PhoneSwitch from '../../components/PhoneSwitch/PhoneSwitch';
import PhoneAndroidChat from '../../components/PhoneAndroid/components/PhoneAndroidChat/PhoneAndroidChat';
import PhoneIphoneChat from '../../components/PhoneIphone/components/PhoneIphoneChat/PhoneIphoneChat';

interface BroadcastSmsProps { }

const BroadcastSms: FC<BroadcastSmsProps> = () => (
  <div className={styles.BroadcastSms}>
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
        title="SMS"
      >
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
    <div>
      <PhoneSwitch
        className={styles.BroadcastChat__first_phone}
        androidChildren={<PhoneAndroidChat></PhoneAndroidChat>}
        iphoneChildren={<PhoneIphoneChat></PhoneIphoneChat>}
      ></PhoneSwitch>
    </div>
  </div>
);

export default BroadcastSms;
