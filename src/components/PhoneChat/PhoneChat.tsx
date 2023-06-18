import React, { FC } from 'react';
import styles from './PhoneChat.module.scss';
import Input from '../../ui/Input/Input';

export interface message {
  id: number,
  type: 'text' | 'media',
  content: string | undefined
}

interface PhoneChatProps {
  topChildren?: React.ReactNode,
  bottomChildren?: React.ReactNode,
  messages?: Array<message>
}

const PhoneChat: FC<PhoneChatProps> = ({
  topChildren,
  bottomChildren
}) => (
  <div className={styles.PhoneChat}>
    {topChildren}
    <div className={styles.PhoneChat__content}>
      <div className={styles.PhoneChat__date}>15 Фев</div>
      <ul className={styles.PhoneChat__messages}>
        <li className={styles.PhoneChat__message}>
          <svg width="25.6" height="25.6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#2471CC" />
            <path d="M8.18963 21H6.89702L10.6357 10.8182H11.9084L15.647 21H14.3544L11.3118 12.429H11.2322L8.18963 21ZM8.6669 17.0227H13.8771V18.1165H8.6669V17.0227ZM17.6506 21H16.358L20.0966 10.8182H21.3693L25.108 21H23.8153L20.7727 12.429H20.6932L17.6506 21ZM18.1278 17.0227H23.3381V18.1165H18.1278V17.0227Z" fill="white" />
          </svg>
          <div className={styles.PhoneChat__message_content}>Message</div>
        </li>
      </ul>
      <div className={styles.PhoneChat__content_bottom}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="16" fill="#1965BF" />
          <path d="M10.667 16H21.3337M16.0003 10.6667V21.3333" stroke="white" strokeLinecap="round" />
        </svg>
        <Input
          className={styles.PhoneChat__input}
          placeholder='Start typing...'
          readOnly
        ></Input>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    {bottomChildren}
  </div>
);

export default PhoneChat;
