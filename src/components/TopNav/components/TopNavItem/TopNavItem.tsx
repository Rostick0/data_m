import React, { FC } from 'react';
import styles from './TopNavItem.module.scss';
import { Link } from 'react-router-dom';
import { Path } from 'react-router-dom';

export interface TopNavItemProps {
  id?: number | undefined,
  link?: string | Partial<Path>,
  icon: string | TrustedHTML,
  name: string | undefined,
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
}

const TopNavItem: FC<TopNavItemProps> = ({
  link,
  icon,
  name,
  onClick
}) => {
  const linkSplit = `${link}`.split('/');

  const getSelectedClass = () => ('/' + linkSplit[1] + '/' + linkSplit[2]) === window.location.pathname ? ' ' + styles.TopNavItem__link_selected : '';

  let selectedClass = getSelectedClass();

  return (
    <li
      className={styles.TopNavItem}
      onClick={onClick}
    >
      {link ? (
        <Link className={styles.TopNavItem__link + selectedClass} to={link}>
          <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
          <span>{name}</span>
        </Link>
      ) : (
        <span className={styles.TopNavItem__link + ' ' + styles.TopNavItem__span}>
          <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
          <span>{name}</span>
        </span>
      )}
    </li>
  );
};

export default TopNavItem;
