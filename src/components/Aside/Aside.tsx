import React, { FC } from 'react';
import styles from './Aside.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import LogoMain from '../../ui/LogoMain/LogoMain';
import AsideSubnavItem from './components/AsideSubnavItem/AsideSubnavItem';

interface AsideProps { }

const Aside: FC<AsideProps> = () => {
  const linksManagement = [
    {
      id: 1,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6.5V5.993C3.00183 5.73038 3.1069 5.47902 3.29251 5.29322C3.47813 5.10742 3.72938 5.00209 3.992 5H20.008C20.556 5 21 5.445 21 5.993V18.007C20.9982 18.2696 20.8931 18.521 20.7075 18.7068C20.5219 18.8926 20.2706 18.9979 20.008 19H3.992C3.72881 18.9997 3.4765 18.895 3.29049 18.7088C3.10448 18.5226 3 18.2702 3 18.007V17H19V7L11.5 12L3 6.5ZM1 9H4V11H1V9ZM1 13H8V15H1V13Z" fill="white" />
    </svg>`,
      link: '/broadcast/list',
      name: 'Рассылка'
    },
    {
      id: 2,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6V12.7L14.5 15.5" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="12" r="8.5" stroke="white" stroke-width="2"/>
      </svg>`,
      link: '/',
      name: 'Кроны'
    },
    {
      id: 3,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V5H21V11H3ZM5 7H19V9H5V7Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 19V13H11V19H3ZM5 15H9V17H5V15Z" fill="white"/>
      <path d="M13 13H21V15H13V13Z" fill="white"/>
      <path d="M21 17H13V19H21V17Z" fill="white"/>
      </svg>`,
      link: '/',
      name: 'Шаблоны'
    },
    {
      id: 4,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8C6.74028 8 7.38663 7.5978 7.73244 7L17 7V11L5 11L5 19H16.2676C16.6134 19.5978 17.2597 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.2597 16 16.6134 16.4022 16.2676 17H7L7 13L19 13V5L7.73244 5C7.38663 4.4022 6.74028 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="white"/>
      </svg>`,
      link: '/',
      name: 'Маршруты'
    },
    {
      id: 5,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V7H8C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8V13H5V8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V9H20V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7C18.7348 7 18.4804 7.10536 18.2929 7.29289C18.1054 7.48043 18 7.73478 18 8V16C18 16.7956 17.6839 17.5587 17.1213 18.1213C16.5587 18.6839 15.7956 19 15 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V15H13C13 15.5304 13.2107 16.0391 13.5858 16.4142C13.9609 16.7893 14.4696 17 15 17ZM9 10H14V12H9V10Z" fill="white"/>
      </svg>      `,
      link: '/',
      name: 'Сценарии'
    }
  ];

  const linksAnalytics = [
    {
      id: 1,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29883 9.2014C3.29883 6.88103 5.17986 5 7.50023 5C9.82058 5 11.7016 6.88103 11.7016 9.2014C11.7016 11.5218 9.82058 13.4028 7.50023 13.4028C5.17986 13.4028 3.29883 11.5218 3.29883 9.2014ZM7.50023 7C6.28443 7 5.29883 7.9856 5.29883 9.2014C5.29883 10.4172 6.28443 11.4028 7.50023 11.4028C8.71601 11.4028 9.70163 10.4172 9.70163 9.2014C9.70163 7.9856 8.71601 7 7.50023 7Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 10.5C13 8.56701 14.567 7 16.5 7C18.433 7 20 8.567 20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5ZM16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67158 17.3284 9 16.5 9Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 18.8056C1 15.5932 4.11458 13.3236 7.5 13.3236C10.8854 13.3236 14 15.5932 14 18.8056H12C12 17.0622 10.1844 15.3236 7.5 15.3236C4.81558 15.3236 3 17.0622 3 18.8056H1Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4512 13.9519C14.3734 13.3454 15.5592 13 16.8225 13C18.1606 13 19.4145 13.3878 20.3591 14.0655C21.3022 14.7422 22.0007 15.7661 22.0007 17H20.0007C20.0007 16.5754 19.7628 16.0992 19.1932 15.6905C18.6251 15.2829 17.7899 15 16.8225 15C15.9114 15 15.1154 15.2512 14.5502 15.6229L13.4512 13.9519Z" fill="white"/>
      </svg>`,
      link: '/',
      name: 'Сегменты'
    },
    {
      id: 2,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18V13H6V11H11V6H13V11H18V13H13V18H11Z" fill="white"/>
      </svg>`,
      link: '/',
      name: 'Создать сегмент'
    },
    {
      id: 3,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12.5771V19H4V4H16.1513L14.0693 6H6V17H17V14.6858L19 12.5771Z" fill="white"/>
      <path d="M22.1272 5.42281L13.55 14L8 8.45003L9.42281 7.02722L13.55 11.1443L20.7044 4L22.1272 5.42281Z" fill="white"/>
      </svg>`,
      link: '/',
      name: 'A/B тесты'
    }
  ];

  const linksPromo = [
    {
      id: 1,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.44219L13.862 8.59091L14.0968 9.11401L14.6668 9.17564L19.1879 9.66451L15.8176 12.7174L15.3927 13.1024L15.5102 13.6635L16.4424 18.1144L12.4974 15.8525L12 15.5673L11.5026 15.8525L7.55763 18.1144L8.48978 13.6635L8.60731 13.1024L8.18236 12.7174L4.8121 9.66451L9.33316 9.17564L9.9032 9.11401L10.138 8.59091L12 4.44219Z" stroke="white" stroke-width="2"/>
      </svg>`,
      link: '/',
      name: 'Акции'
    }
  ];

  return (
    <aside className={styles.Aside}>
      <div className={styles.Aside__top}>
        <Link className={styles.Aside__logo} to="/"><LogoMain /></Link>
      </div>
      <ul className={styles.Aside__nav}>
        <li className={styles.Aside__nav_item}>
          <div className={styles.Aside__subtitle}>Управление</div>
          <ul className={styles.Aside__subnav}>
            {linksManagement?.map(link => (
              <AsideSubnavItem
                key={link.id}
                icon={link.icon}
                link={link.link}
                name={link.name}
              ></AsideSubnavItem>
            ))}
          </ul>
        </li>
        <li className={styles.Aside__nav_item}>
          <div className={styles.Aside__subtitle}>Аналитика</div>
          <ul className={styles.Aside__subnav}>
            {linksAnalytics?.map(link => (
              <AsideSubnavItem
                key={link.id}
                icon={link.icon}
                link={link.link}
                name={link.name}
              ></AsideSubnavItem>
            ))}
          </ul>
        </li>
        <li className={styles.Aside__nav_item}>
          <div className={styles.Aside__subtitle}>Промо</div>
          <ul className={styles.Aside__subnav}>
            {linksPromo?.map(link => (
              <AsideSubnavItem
                key={link.id}
                icon={link.icon}
                link={link.link}
                name={link.name}
              ></AsideSubnavItem>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  )
};

export default Aside;
