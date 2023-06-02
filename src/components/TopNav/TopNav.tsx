import React, { FC } from 'react';
import styles from './TopNav.module.scss';
import TopNavItem from './components/TopNavItem/TopNavItem';
import { TopNavItemProps } from './components/TopNavItem/TopNavItem';

interface TopNavProps {
  links: Array<TopNavItemProps>,
}

const TopNav: FC<TopNavProps> = ({
  links
}) => {
  return (
    <div className={styles.TopNav}>
      <ul className={styles.TopNav__list}>
        {links?.map(link => (
          <TopNavItem
            key={link.id}
            link={link.link}
            icon={link.icon}
            name={link.name}
          ></TopNavItem>
        ))}
      </ul>
    </div>
  );
};

export default TopNav;
