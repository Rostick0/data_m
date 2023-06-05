import React, { FC, useState, lazy } from 'react';
import styles from './PhoneSwitch.module.scss';
import InputRadio from '../../ui/InputRadio/InputRadio';
const PhoneIphone = lazy(() => import('../PhoneIphone/PhoneIphone'));
const PhoneAndroid = lazy(() => import('../PhoneAndroid/PhoneAndroid'));

interface PhoneSwitchProps {
  className?: string | undefined,
  androidChildren?: React.ReactNode | undefined,
  iphoneChildren?: React.ReactNode | undefined,
}

const PhoneSwitch: FC<PhoneSwitchProps> = ({
  className,
  androidChildren,
  iphoneChildren
}) => {
  const switches = [
    {
      name: 'iOS',
      value: 'iOS',
      checked: true,
    },
    {
      name: 'Android',
      value: 'Android'
    }
  ];

  const styleClassName = className ? ' ' + className : '';
  const [phone, setPhone] = useState('iOS');

  return (
    <div className={styles.PhoneSwitch + styleClassName}>
      <div className={styles.PhoneSwitch__switch}>
        <InputRadio
          name={"phone_type"+ Date.now()}
          items={switches}
          onChange={e => setPhone(e.target.value)}
        ></InputRadio>
      </div>
      {phone === 'iOS' ?
        <PhoneIphone>{iphoneChildren}</PhoneIphone>
        :
        <PhoneAndroid>{androidChildren}</PhoneAndroid>}
    </div>
  );
};

export default PhoneSwitch;
