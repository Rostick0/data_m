import React, { FC, lazy } from 'react';
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
import KeysAdd from '../../components/KeysAdd/KeysAdd';
import InputDateTime from '../../ui/InputDateTime/InputDateTime';
import { useForm } from 'react-hook-form';
import { iCreateSmsMessage, useCreateSmsMessageMutation } from '../../app/store/modules/message';
import Button from '../../ui/Button/Button';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface BroadcastSmsProps { }

const BroadcastSms: FC<BroadcastSmsProps> = () => {
  const { register, handleSubmit, reset } = useForm<iCreateSmsMessage>();
  const [createSmsMessage] = useCreateSmsMessageMutation()

  const onSubmit = (values: iCreateSmsMessage) => {
    createSmsMessage(values);
  }

  return (
    <div className={styles.BroadcastSms}>
      <form onSubmit={handleSubmit(onSubmit)} className='form-flex-item'>
        <FieldUi>
          <FieldItemUi
            title="Имя отправителя"
          >
            <Input
              className='input_width_default'
              register={register('sender')}
            ></Input>
          </FieldItemUi>
        </FieldUi>
        <FieldUi
          title="Получатели"
        >
          <FieldItemUi
            title="Код списка"
          >
            <Input
              className='input_width_default'
              register={register('list_id')}
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
              register={register('body')}
            ></Input>
          </FieldItemUi>
        </FieldUi>
        <FieldUi
          title="Настройки"
        >
          <FieldItemUi
            title="Теги"
          >
            <Input
              className='input_width_default'
              placeholder="Введите"
              register={register('tag')}
            ></Input>
          </FieldItemUi>
        </FieldUi>
        <FieldButtons>
          <Button styleColor='grey'
            onClick={() => reset()}
          >Очистить</Button>
          <Button className='button_with_icon'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8.49997L10.5 16.9999L5 11.4999L6.41 10.0899L10.5 14.1699L17.59 7.08997L19 8.49997Z" fill="white" />
            </svg>
            <span>Сохранить</span>
          </Button>
        </FieldButtons>
      </form>
      <div>
        <PhoneSwitch
          className={styles.BroadcastChat__first_phone}
          androidChildren={<PhoneAndroidChat></PhoneAndroidChat>}
          iphoneChildren={<PhoneIphoneChat></PhoneIphoneChat>}
        ></PhoneSwitch>
      </div>
    </div>
  );
};

export default BroadcastSms;
