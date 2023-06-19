import React, { FC, lazy } from 'react';
import styles from './CronsCreate.module.scss';
import Title from '../../ui/Title/Title';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';
import PhoneSwitch from '../../components/PhoneSwitch/PhoneSwitch';
import PhoneAndroidAlert from '../../components/PhoneAndroid/components/PhoneAndroidAlert/PhoneAndroidAlert';
import PhoneIphoneAlert from '../../components/PhoneIphone/components/PhoneIphoneAlert/PhoneIphoneAlert';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));
interface CronsCreateProps { }

const CronsCreate: FC<CronsCreateProps> = () => (
  <div className={styles.CronsCreate}>
    <div>
      <Title className={styles.CronsCreateh__title}>Создать крон</Title>
      <FieldUi>
        <FieldItemUi
          title="Наименование"
        >
          <Input
            className='input_width_default'
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
        title="Шаблон"
      >
        <FieldItemUi
          title="Наименование"
        >
          <Select
            className='input_width_default'
            placeholder="Выберите"
          ></Select>
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
          </div>
        </FieldItemUi>
        <FieldItemUi
          title="Начало"
        >
          <Input
            className='input_date'
            placeholder='01.01.2023'
          ></Input>
        </FieldItemUi>
        <FieldItemUi
          title="Период"
        >
          <div className="input_column">
            <Select
              className='input_date'
              defaultValue="1"
            ></Select>
            <Select
              className='input_date'
              defaultValue="День"
            ></Select>
          </div>
        </FieldItemUi>
        <FieldItemUi
          title="Окончание"
        >
          <Input
            className='input_date'
          ></Input>
        </FieldItemUi>
      </FieldUi>
      <FieldUi
        title="Настройки"
      >
        <FieldItemUi>
          <InputSwitch>Активный статус</InputSwitch>
        </FieldItemUi>
        <FieldItemUi
          title="Имя трекера"
        >
          <Input
            className='input_width_default'
            placeholder="Введите"
          ></Input>
        </FieldItemUi>
        <FieldItemUi>
          <InputSwitch>Показать в общей массе</InputSwitch>
        </FieldItemUi>
      </FieldUi>
      <FieldUi
        title="Роллбэк"
      >
        <FieldItemUi
          title='Расписание'
        >
          <Input
            className='input_date'
            placeholder='Выбрать дату'
          />
        </FieldItemUi>
      </FieldUi>
      <FieldButtons>
        <Button styleColor='grey'>Очистить</Button>
        <Button className='button_with_icon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8.49997L10.5 16.9999L5 11.4999L6.41 10.0899L10.5 14.1699L17.59 7.08997L19 8.49997Z" fill="white" />
          </svg>
          <span>Сохранить</span>
        </Button>
      </FieldButtons>
    </div>
    <div className={styles.CronsCreate__phone}>
      <PhoneSwitch
        androidChildren={<PhoneAndroidAlert></PhoneAndroidAlert>}
        iphoneChildren={<PhoneIphoneAlert></PhoneIphoneAlert>}
      ></PhoneSwitch>
    </div>
  </div>
);

export default CronsCreate;
