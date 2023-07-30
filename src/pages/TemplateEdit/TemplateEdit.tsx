import React, { FC, lazy, useEffect } from 'react';
import styles from './TemplateEdit.module.scss';
import Title from '../../ui/Title/Title';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import FieldUi from '../../components/Field/Field';
import Button from '../../ui/Button/Button';
import InputRadio from '../../ui/InputRadio/InputRadio';
import PhoneSwitch from '../../components/PhoneSwitch/PhoneSwitch';
import PhoneAndroidAlert from '../../components/PhoneAndroid/components/PhoneAndroidAlert/PhoneAndroidAlert';
import PhoneIphoneAlert from '../../components/PhoneIphone/components/PhoneIphoneAlert/PhoneIphoneAlert';
import { useForm } from 'react-hook-form';
import { langsSelectItems } from '../../app/utils/lang';
import { iUpdateTemplate, useTemplateAddMutation, useTemplateGetQuery } from '../../app/store/modules/template';
import { useParams } from 'react-router';
const FieldButtons = lazy(() => import('../../components/FieldButtons/FieldButtons'));

interface TemplateTemplateEditProps { }

const TemplateEdit: FC<TemplateTemplateEditProps> = () => {
  const { id } = useParams();
  const [updateTemplate, result] = useTemplateAddMutation();
  const { data } = useTemplateGetQuery(id)
  const { register, handleSubmit, reset, setValue, resetField, formState: { errors, defaultValues }, } = useForm<iUpdateTemplate>(
    { defaultValues: data?.result },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmit = (values: iUpdateTemplate) => {
    // updateTemplate(values);
    console.log(values);
  };

  return (
    <div className={styles.TemplateEdit}>
      <form className='form-flex-item' onSubmit={handleSubmit(onSubmit)}>
        <Title className={styles.TemplateEdit__title}>Создать шаблон</Title>
        <FieldUi>
          <FieldItemUi
            title="Наименование"
          >
            <Input
              className='input_width_default'
              placeholder='Введите'
              defaultValue={data?.result?.title}
              register={register("title")}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Тема"
          >
            <Input
              className='input_width_default'
              placeholder='Введите'
              defaultValue={data?.result?.title}
              register={register("subject")}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Текст"
          >
            <Input
              className='input_width_default'
              placeholder='Текст шаблона письма в формате HTML'
              defaultValue={data?.result?.body}
              register={register("body")}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Описание"
          >
            <Input
              className='input_width_default'
              placeholder='Введите'
              defaultValue={data?.result?.description}
              register={register("description")}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Текст"
          >
            <Input
              className='input_width_default'
              placeholder='Текстовый вариант шаблона'
              defaultValue={data?.result?.text_body}
              register={register("text_body")}
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Язык"
          >
            <Select
              className='input_width_default'
              placeholder='Выберите'
              items={langsSelectItems}
              defaultValue={data?.result?.lang_code}
              onChange={(data: any) => setValue('lang', data?.value)}
            ></Select>
          </FieldItemUi>
        </FieldUi>
        {/* <FieldUi
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
        </FieldUi> */}
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
      <div className={styles.TemplateEdit__phone}>
        <PhoneSwitch
          androidChildren={<PhoneAndroidAlert></PhoneAndroidAlert>}
          iphoneChildren={<PhoneIphoneAlert></PhoneIphoneAlert>}
        ></PhoneSwitch>
      </div>
    </div>
  );
}

export default TemplateEdit;
