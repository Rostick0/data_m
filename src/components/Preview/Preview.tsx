import React, { FC, useState } from 'react';
import styles from './Preview.module.scss';
import Button from '../../ui/Button/Button';

interface Items {
  name?: string | undefined,
  value?: string | number | undefined
}

interface PreviewProps {
  items?: Array<Items> | undefined,
  title?: string | undefined,
  description?: string | undefined
}

const Preview: FC<PreviewProps> = ({
  items,
  title,
  description
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.Preview}>
      {isShow ? (
        <div className={styles.Preview__info}>
          <div className={styles.Preview__title}>Пользователи</div>
          {items?.length && (<div className={styles.Preview__stats}>
            {items.map(item => (
              <div className={styles.Preview__info_flex}>
                <div className={styles.Preview__name}>{item.name}</div>
                <div className={styles.Preview__value}>{item.value}</div>
              </div>
            ))}
          </div>)}
          <div className={styles.Preview__title}>{title}</div>
          <div className={styles.Preview__name}>{description}</div>
        </div>
      ) : (
        <div className={styles.Preview__show}>
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 16C59.148 16 69.052 21.028 76.104 27.252C79.644 30.376 82.56 33.884 84.616 37.376C86.636 40.804 88 44.52 88 48C88 51.48 86.64 55.196 84.616 58.624C82.56 62.116 79.644 65.624 76.104 68.748C69.052 74.972 59.144 80 48 80C36.852 80 26.948 74.972 19.896 68.748C16.356 65.624 13.44 62.116 11.384 58.624C9.36 55.196 8 51.48 8 48C8 44.52 9.36 40.804 11.384 37.376C13.44 33.884 16.356 30.376 19.896 27.252C26.948 21.028 36.856 16 48 16ZM48 24C39.264 24 31.168 27.972 25.192 33.248C22.216 35.872 19.864 38.74 18.276 41.436C16.652 44.196 16 46.48 16 48C16 49.52 16.652 51.804 18.276 54.564C19.864 57.26 22.216 60.124 25.192 62.752C31.168 68.028 39.264 72 48 72C56.736 72 64.832 68.028 70.808 62.752C73.784 60.124 76.136 57.26 77.724 54.564C79.348 51.804 80 49.52 80 48C80 46.48 79.348 44.196 77.724 41.436C76.136 38.74 73.784 35.876 70.808 33.248C64.832 27.972 56.736 24 48 24ZM48 36C48.352 36 48.7 36.016 49.044 36.044C48.1755 37.5674 47.8317 39.334 48.0653 41.0719C48.299 42.8099 49.0972 44.4229 50.3372 45.6628C51.5771 46.9028 53.1901 47.701 54.9281 47.9347C56.666 48.1683 58.4326 47.8245 59.956 46.956C60.1664 49.3647 59.6442 51.7807 58.4579 53.8876C57.2717 55.9944 55.4766 57.6937 53.308 58.7629C51.1395 59.8321 48.6985 60.2213 46.3049 59.8795C43.9113 59.5376 41.6769 58.4807 39.8943 56.8472C38.1117 55.2137 36.8641 53.0798 36.315 50.7251C35.7659 48.3705 35.941 45.9049 36.8172 43.6514C37.6934 41.3979 39.2299 39.4616 41.2253 38.0963C43.2208 36.731 45.5822 36.0003 48 36Z" fill="#D5D8DB" fill-opacity="0.5" />
          </svg>
          <Button
            styleColor='grey'
            onClick={() => setIsShow(true)}
          >Показать</Button>
        </div>
      )}
    </div>
  );
};

export default Preview;
