import React, { MouseEventHandler, FC } from 'react';
import styles from './ModalJourney.module.scss';
import Modal, { ModalProps } from '../../ui/Modal/Modal';
import FieldUi from '../Field/Field';
import Input from '../../ui/Input/Input';
import FieldItemUi from '../FieldItem/FieldItem';
import InputBox from '../../ui/InputBox/InputBox';
import Button from '../../ui/Button/Button';

interface ModalJourneyProps extends ModalProps {}

const ModalJourney: FC<ModalJourneyProps> = ({
  title,
  close
}) => {
  return (
    <Modal
      title={title}
      close={close}
    >
      <div className={styles.ModalJourney}>
        <FieldUi>
          <FieldItemUi
            title="Наименование"
          >
            <Input
              className='input_width_default'
            ></Input>
          </FieldItemUi>
          <FieldItemUi
            title="Тип"
          >
            <Input
              className='input_width_default'
            ></Input>
          </FieldItemUi>
          <FieldItemUi>
            <InputBox>
              Выбирать пользователей, которые приняли данное
              событие впервые
            </InputBox>
          </FieldItemUi>
          <FieldItemUi>
            <InputBox>
              Фильтровать по поведению пользователей в прошлом и
              общим свойствам
            </InputBox>
          </FieldItemUi>
        </FieldUi>
        <div className={styles.ModalJourney__buttons}>
          <Button styleColor='grey'
            onClick={close}
          >Отменить</Button>
          <Button>Сохранить</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalJourney;
