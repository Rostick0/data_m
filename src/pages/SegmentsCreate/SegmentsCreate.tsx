import React, { FC } from 'react';
import styles from './SegmentsCreate.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import Button from '../../ui/Button/Button';
import FieldItemUi from '../../components/FieldItem/FieldItem';
import Input from '../../ui/Input/Input';
import SegmentItemInputs from '../../components/SegmentItemInputs/SegmentItemInputs';
import Select from '../../ui/Select/Select';
import InputMulti from '../../ui/InputMulti/InputMulti';
import { Link } from 'react-router-dom';

interface SegmentsCreateProps { }

const SegmentsCreate: FC<SegmentsCreateProps> = () => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/segments/list',
      name: 'Список маршрутов'
    },
    {
      id: 2,
      icon: `/`,
      name: 'Новый сегмент'
    },
  ];

  return (
    <div className={styles.SegmentsCreate}>
      <TopNav links={links}>
        <Link to="/segments/auditorium">
          <Button className='button_with_icon'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8.49985L10.5 16.9998L5 11.4998L6.41 10.0898L10.5 14.1698L17.59 7.08985L19 8.49985Z" fill="white" />
            </svg>
            <span>Сохранить</span>
          </Button>
        </Link>
      </TopNav>
      <div className={styles.SegmentsCreate__content}>
        <form className={styles.SegmentsCreate__form}>
          <div className={styles.SegmentsCreate__form_top}>
            <FieldItemUi
              title="Наименование"
            >
              <Input
                defaultValue='unregistered user'
              ></Input>
            </FieldItemUi>
            <FieldItemUi
              title="Размер сегмента"
            >
              <Input
                type='number'
                defaultValue='5000'
              ></Input>
            </FieldItemUi>
          </div>
          <div className={styles.SegmentsCreate__form_bottom}>
            <SegmentItemInputs
              hiddenFirstIcon
            >
              <Select
                className={styles.SegmentsCreate__select_first}
                placeholder='Покупатель'
              ></Select>
              <Button
                className='button_with_icon'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fillOpacity="0.66" />
                </svg>
                <span>Группу</span>
              </Button>
            </SegmentItemInputs>
            <SegmentItemInputs
              hasIconApplication
            >
              <Select placeholder='Покупатель'></Select>
              <Button
                className='button_with_icon'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fillOpacity="0.66" />
                </svg>
                <span>Фильтр</span>
              </Button>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <Input className={styles.SegmentsCreate__input_long}></Input>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
              hasIconApplication
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <InputMulti className={styles.SegmentsCreate__input_long}></InputMulti>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
              hasIconApplication
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <InputMulti className={styles.SegmentsCreate__input_long}></InputMulti>
            </SegmentItemInputs>
            <SegmentItemInputs
              hasIconApplication
            >
              <Select placeholder='Покупатель'></Select>
              <Button
                className='button_with_icon'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fillOpacity="0.66" />
                </svg>
                <span>Группу</span>
              </Button>
            </SegmentItemInputs>
            <SegmentItemInputs
              hasIconApplication
            >
              <Select placeholder='Покупатель'></Select>
              <Button
                className='button_with_icon'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fillOpacity="0.66" />
                </svg>
                <span>Фильтр</span>
              </Button>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <Input></Input>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
              hasIconApplication
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <InputMulti className={styles.SegmentsCreate__input_long}></InputMulti>
            </SegmentItemInputs>
            <SegmentItemInputs
              hasIconApplication
            >
              <Select placeholder='Покупатель'></Select>
              <Button
                className='button_with_icon'
                styleColor='grey'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="#121B26" fillOpacity="0.66" />
                </svg>
                <span>Фильтр</span>
              </Button>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <Input></Input>
            </SegmentItemInputs>
            <SegmentItemInputs
              className='bg-basic-hover'
              hasIconApplication
            >
              <Select className={styles.SegmentsCreate__select_long}></Select>
              <Select></Select>
              <Input className={styles.SegmentsCreate__input_long}></Input>
            </SegmentItemInputs>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SegmentsCreate;
