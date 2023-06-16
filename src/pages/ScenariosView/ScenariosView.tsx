import React, { FC, useState } from 'react';
import styles from './ScenariosView.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import ScenariosViewSvg from '../../components/ScenariosViewSvg/ScenariosViewSvg';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import ScenariosButtonAdd from '../../components/ScenariosButtonAdd/ScenariosButtonAdd';
import ModalScenarios from '../../components/ModalScenarios/ModalScenarios';

interface ScenariosViewProps { }

const ScenariosView: FC<ScenariosViewProps> = () => {
  const links = [
    {
      id: 1,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 3.875C14.8125 3.875 15 3.71875 15 3.5V2.5C15 2.3125 14.8125 2.125 14.625 2.125H1.375C1.15625 2.125 1 2.3125 1 2.5V3.5C1 3.71875 1.15625 3.875 1.375 3.875H14.625ZM14.625 8.875C14.8125 8.875 15 8.71875 15 8.5V7.5C15 7.3125 14.8125 7.125 14.625 7.125H1.375C1.15625 7.125 1 7.3125 1 7.5V8.5C1 8.71875 1.15625 8.875 1.375 8.875H14.625ZM14.625 13.875C14.8125 13.875 15 13.7188 15 13.5V12.5C15 12.3125 14.8125 12.125 14.625 12.125H1.375C1.15625 12.125 1 12.3125 1 12.5V13.5C1 13.7188 1.15625 13.875 1.375 13.875H14.625Z" fill="#142333" fill-opacity="0.33" />
    </svg>`,
      link: '/scenarios/list',
      name: 'Список сценариев'
    },
    {
      id: 2,
      icon: `/`,
      name: 'Наименование сценария'
    },
  ];

  const [isActiveCreate, setIsActiveCreate] = useState(false);

  return (
    <div className={styles.ScenariosView}>
      <TopNav links={links}></TopNav>
      <div className={styles.ScenariosView__content + ' background-points'}>
        <ScenariosViewSvg></ScenariosViewSvg>
        <ScenariosButtonAdd
          onClick={() => setIsActiveCreate(true)}
        ></ScenariosButtonAdd>
        {isActiveCreate && <ModalScenarios
        close={() => setIsActiveCreate(false)}
        ></ModalScenarios>}
      </div>
    </div>
  );
};
export default ScenariosView;
