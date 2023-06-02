import React, { FC } from 'react';
import styles from './TopNavItem.module.scss';
import { Link } from 'react-router-dom';
import { Path } from 'react-router-dom';

export interface TopNavItemProps {
  id?: number | undefined,
  link: string | Partial<Path>,
  icon: string | TrustedHTML,
  name: string | undefined
}

const TopNavItem: FC<TopNavItemProps> = ({
  link,
  icon,
  name
}) => {
  const linkSplit = `${link}`.split('/');

  const selectedClass = ('/' + linkSplit[1] + '/' + linkSplit[2]) === window.location.pathname ? ' ' + styles.TopNavItem__link_selected : '';

  return (
    <li className={styles.TopNavItem}>
      <Link className={styles.TopNavItem__link + selectedClass} to={link}>
        <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default TopNavItem;
