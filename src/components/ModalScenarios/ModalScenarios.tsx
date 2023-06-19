import React, { FC } from 'react';
import styles from './ModalScenarios.module.scss';
import FieldItemUi from '../FieldItem/FieldItem';
import InputBox from '../../ui/InputBox/InputBox';
import Button from '../../ui/Button/Button';
import Modal, { ModalProps } from '../../ui/Modal/Modal';
import FieldUi from '../Field/Field';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';

interface ModalScenariosProps extends ModalProps { }

const ModalScenarios: FC<ModalScenariosProps> = ({
  close
}) => (
  <Modal
    title='Добавление узла'
    close={close}
  >
    <div className={styles.ModalScenarios}>
      <FieldUi>
        <FieldUi>
          <FieldItemUi
            title="Наименование"
          >
            <Input
              className='input_width_default'
              defaultValue="Name"
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Тип"
          >
            <Select
              className='input_width_default'
              defaultValue='Условие'
            ></Select>
          </FieldItemUi>
          <FieldItemUi
            title="Описание условия"
          >
            <Select
              className='input_width_default'
              placeholder='Выберите'
            ></Select>
          </FieldItemUi>
        </FieldUi>
      </FieldUi>
      <div className={styles.ModalScenarios__buttons}>
        <Button
          className='button_with_icon'
          styleColor='grey'
          onClick={close}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.375 17H14.125C14.3125 17 14.5 16.8438 14.5 16.625V9.875C14.5 9.6875 14.3125 9.5 14.125 9.5H13.375C13.1562 9.5 13 9.6875 13 9.875V16.625C13 16.8438 13.1562 17 13.375 17ZM18.5 6.5H15.9062L14.8438 4.75C14.5938 4.34375 14.0312 4 13.5625 4H10.4062C9.9375 4 9.375 4.34375 9.125 4.75L8.0625 6.5H5.5C5.21875 6.5 5 6.75 5 7V7.5C5 7.78125 5.21875 8 5.5 8H6V18.5C6 19.3438 6.65625 20 7.5 20H16.5C17.3125 20 18 19.3438 18 18.5V8H18.5C18.75 8 19 7.78125 19 7.5V7C19 6.75 18.75 6.5 18.5 6.5ZM10.3438 5.59375C10.375 5.5625 10.4688 5.5 10.5 5.5H10.5312H13.4688C13.5 5.5 13.5938 5.5625 13.625 5.59375L14.1562 6.5H9.8125L10.3438 5.59375ZM16.5 18.5H7.5V8H16.5V18.5ZM9.875 17H10.625C10.8125 17 11 16.8438 11 16.625V9.875C11 9.6875 10.8125 9.5 10.625 9.5H9.875C9.65625 9.5 9.5 9.6875 9.5 9.875V16.625C9.5 16.8438 9.65625 17 9.875 17Z" fill="#142333" fillOpacity="0.33" />
          </svg>
          <span>Удалить узел</span>
        </Button>
        <Button>Сохранить</Button>
      </div>
    </div>
  </Modal>
);

export default ModalScenarios;
