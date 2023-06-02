import React, { FC } from 'react';
import styles from './AsideSubnavItem.module.scss';
import { Link } from 'react-router-dom';
import { Path } from 'react-router-dom';

interface AsideSubnavItemProps {
  // id: number | undefined,
  link: string | Partial<Path>,
  icon: string | TrustedHTML,
  name: string | undefined
}

const AsideSubnavItem: FC<AsideSubnavItemProps> = ({
  link,
  icon,
  name
}) => {
  const selectedClass = ('/' + `${link}`.split('/')[1]) === window.location.pathname ? ' ' + styles.AsideSubnavItem__link_selected : '';

  return (
    <li className={styles.AsideSubnavItem}>
      <Link
        className={styles.AsideSubnavItem__link + selectedClass}
        to={link}
      >
        <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default AsideSubnavItem;
