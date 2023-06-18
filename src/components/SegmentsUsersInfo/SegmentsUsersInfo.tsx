import React, { FC, useState } from 'react';
import styles from './SegmentsUsersInfo.module.scss';
import InputRadio from '../../ui/InputRadio/InputRadio';
import SegmentsUsersInfoSwitchView, { typeSwitch } from './components/SegmentsUsersInfoSwitchView/SegmentsUsersInfoSwitchView';

interface SegmentsUsersInfoProps { }

const SegmentsUsersInfo: FC<SegmentsUsersInfoProps> = () => {
  const switchItems = [
    {
      value: 'statistic' as typeSwitch,
      name: 'Статистика',
      checked: true
    },
    {
      value: 'attributes' as typeSwitch,
      name: 'Атрибуты'
    },
    {
      value: 'events' as typeSwitch,
      name: 'События'
    }
  ];

  const [switchType, setSwitchType] = useState<typeSwitch>(switchItems[0]?.value);

  return (
    <div className={styles.SegmentsUsersInfo}>
      <div className={styles.SegmentsUsersInfo__application}>
        <div className={styles.SegmentsUsersInfo__top}>
          <div className={styles.SegmentsUsersInfo__top_left}>
            <div className={styles.SegmentsUsersInfo__top_left_item + ' ' + styles.SegmentsUsersInfo__email}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00082 7.82073C9.60815 7.82073 10.9112 6.51771 10.9112 4.91036C10.9112 3.30302 9.60815 2 8.00082 2C6.39347 2 5.09045 3.30302 5.09045 4.91036C5.09045 6.51771 6.39347 7.82073 8.00082 7.82073Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 13.6419C13 11.3893 10.759 9.56738 8 9.56738C5.24098 9.56738 3 11.3893 3 13.6419" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>useremail@mail.com</div>
            </div>
            <div className={styles.SegmentsUsersInfo__top_left_item}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9C9.10455 9 10 8.10461 10 6.99999C10 5.89544 9.10455 5 8 5C6.89545 5 6 5.89544 6 6.99999C6 8.10461 6.89545 9 8 9Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" />
                <path d="M3.14076 5.89497C4.28309 0.697676 11.7227 0.703678 12.8592 5.90098C13.5261 8.94974 11.2719 11.9535 9.66565 13.5499C8.50012 14.7142 7.50011 14.7201 6.3288 13.5558C4.72838 11.9594 2.47392 8.94374 3.14076 5.89497Z" stroke="#142333" strokeOpacity="0.33" strokeWidth="1.5" />
              </svg>
              <div>Сан-Франциско, Калифорния, США</div>
            </div>
            <div className={styles.SegmentsUsersInfo__top_left_item}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 4.68997 4.68997 2 8 2C11.31 2 14 4.68997 14 8C14 11.31 11.31 14 8 14C4.68997 14 2 11.31 2 8ZM8 3.56749C5.55649 3.56749 3.56749 5.55649 3.56749 8C3.56749 10.4435 5.55649 12.4325 8 12.4325C10.4435 12.4325 12.4325 10.4435 12.4325 8C12.4325 5.55649 10.4435 3.56749 8 3.56749ZM6.48598 5.09414C6.48598 4.6316 6.86195 4.24299 7.33105 4.24299C7.80015 4.24299 8.17611 4.6316 8.17611 5.09414V7.6013C8.17611 7.61969 8.18962 7.68824 8.23978 7.77763C8.26222 7.81762 8.28695 7.85243 8.31024 7.87896C8.32169 7.892 8.3316 7.90169 8.33937 7.90843C8.34707 7.91511 8.35076 7.91733 8.35076 7.91733L8.35481 7.91971L10.2239 9.05014C10.6353 9.29477 10.7466 9.81763 10.5192 10.2125L10.5133 10.2229C10.3525 10.4836 10.0761 10.6355 9.78684 10.6355C9.64782 10.6355 9.4931 10.6028 9.3474 10.5073L7.48391 9.38032C6.90015 9.02689 6.48598 8.28088 6.48598 7.6013V5.09414Z" fill="#142333" fillOpacity="0.33" />
              </svg>
              <div>
                <span className="text-tertiary">Посл. посещение:</span> 12 апр 2023, 20:56:21
              </div>
            </div>
          </div>
          <div className={styles.SegmentsUsersInfo__top_right}>
            <div className={styles.SegmentsUsersInfo__top_right_item}>Push</div>
            <div className={styles.SegmentsUsersInfo__top_right_item}>E-mail</div>
            <div className={styles.SegmentsUsersInfo__top_right_item}>Text</div>
          </div>
        </div>
        <div className={styles.SegmentsUsersInfo__switch}>
          <InputRadio
            onChange={e => setSwitchType(e.target.value as typeSwitch)}
            name="sources"
            items={switchItems}
          ></InputRadio>
        </div>
      </div>
      <SegmentsUsersInfoSwitchView
        type={switchType}
      ></SegmentsUsersInfoSwitchView>
    </div>
  );
};

export default SegmentsUsersInfo;
