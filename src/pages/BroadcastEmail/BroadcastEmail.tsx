import React, { FC, lazy } from 'react';
import styles from './BroadcastEmail.module.scss';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import InputSwitch from '../../ui/InputSwitch/InputSwitch';
import InputMulti from '../../ui/InputMulti/InputMulti';
import SelectMulti from '../../ui/SelectMulti/SelectMulti';
import KeysAdd from '../../components/KeysAdd/KeysAdd';
import InputDateTime from '../../ui/InputDateTime/InputDateTime';
import { iCreateEmailMessage, useCreateEmailMessageMutation } from '../../app/store/modules/message';
import { useForm } from 'react-hook-form';
import { langType, langsSelectItems } from '../../app/utils/lang';
import { wrapTypeSelectItems, wrap_type } from '../../app/utils/wrapType';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface BroadcastEmailProps { }

const BroadcastEmail: FC<BroadcastEmailProps> = () => {
  const [createEmailMessage] = useCreateEmailMessageMutation();

  const { register, handleSubmit, setValue, reset } = useForm<iCreateEmailMessage>();

  const onSubmit = (values: iCreateEmailMessage) => {
    console.log(values)
    createEmailMessage(values)
  };

  return (
    <div className={styles.BroadcastEmail}>
      <form onSubmit={handleSubmit(onSubmit)} className='form-flex-item'>
        <FieldUi>
          <FieldItemUi
            title="Имя отправителя"
          >
            <Input
              className='input_width_default'
              register={register('sender_name')}
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
          <FieldItemUi
            title="Id шаблона"
          >
            <Input
              className='input_width_default'
              register={register('template_id')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Id системного"
          >
            <Input
              className='input_width_default'
              register={register('system_template_id')}
            ></Input>
          </FieldItemUi>
        </FieldUi>
        <FieldUi
          title="E-mail"
        >
          <FieldItemUi
            title="Email отправителя"
          >
            <Input
              className='input_width_default'
              register={register('sender_email')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Тема письма"
          >
            <Input
              className='input_width_default'
              register={register('subject')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="HTML письма"
          >
            <Input
              className='input_width_default'
              register={register('body')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Текст письма"
          >
            <Input
              className='input_width_default'
              register={register('text_body')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi>
            <InputSwitch
              register={register('generate_text')}
            >HTML</InputSwitch>
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
          <FieldItemUi
            title="Язык"
          >
            <Select
              className='input_width_default'
              items={langsSelectItems}
              onChange={({ value }: { value: langType }) => setValue('lang', value)}
            ></Select>
          </FieldItemUi>
          <FieldItemUi
            title="Массив-вложений"
          >
            <Input
              className='input_width_default'
              placeholder="Ассоциативный массив файлов-вложений"
              register={register('attachments')}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Выравнивание"
          >
            <Select
              className='input_width_default'
              items={wrapTypeSelectItems}
              onChange={({ value }: { value: wrap_type }) => setValue('wrap_type', value)}
            ></Select>
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
    </div>
  );
}

export default BroadcastEmail;
