import React, { FC } from 'react';
import styles from './DropdownMenu.module.scss';

interface DropdownItem {
  name?: string | undefined,
  is_line?: boolean | undefined
}

interface DropdownMenuProps {
  className?: string | undefined,
  items?: Array<DropdownItem>
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  className,
  items
}) => {
  const styleClassName = className ? ' ' + className : '';

  return (
    <div className={styles.DropdownMenu + styleClassName}>
      {items?.length && items.map(item => {
        if (item.is_line) {
          return (
            <div className={styles.DropdownMenu__item + ' ' + styles.DropdownMenu__item_line}>{item?.name}</div>
          );
        }

        return (
          <div className={styles.DropdownMenu__item}>{item?.name}</div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
