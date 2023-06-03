import React, { FC, useState } from 'react';
import styles from './TopNav.module.scss';
import TopNavItem from './components/TopNavItem/TopNavItem';
import { TopNavItemProps } from './components/TopNavItem/TopNavItem';

interface TopNavProps {
  links: Array<TopNavItemProps>,
}

const TopNav: FC<TopNavProps> = ({
  links
}) => {
  const [items, setItems] = useState(links);

  return (
    <div className={styles.TopNav}>
      <ul className={styles.TopNav__list}>
        {items?.map(link => (
          <TopNavItem
            key={link.id}
            link={link.link}
            icon={link.icon}
            name={link.name}
            onClick={() => setItems(prev => [...prev])}
          ></TopNavItem>
        ))}
      </ul>
    </div>
  );
};

export default TopNav;
