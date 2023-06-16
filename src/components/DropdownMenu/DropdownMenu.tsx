import React, { FC, MouseEventHandler, FocusEventHandler, useRef, useEffect } from 'react';
import styles from './DropdownMenu.module.scss';

interface DropdownItem {
  name?: string | undefined,
  is_line?: boolean | undefined,
  onClick?: MouseEventHandler<HTMLDivElement> | undefined,
}

interface DropdownMenuProps {
  className?: string | undefined,
  items?: Array<DropdownItem>,
  tabIndex?: number | undefined,
  onBlur?: FocusEventHandler<HTMLDivElement> | undefined,
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  className,
  items,
  tabIndex,
  onBlur
}) => {
  const styleClassName = className ? ' ' + className : '';

  const Div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Div.current?.focus();
  }, [])

  return (
    <div
      className={styles.DropdownMenu + styleClassName}
      tabIndex={tabIndex}
      ref={Div}
      // autoFocus
      // onBlur={onBlur}
      onBlur={onBlur}
    >
      {items?.length && items.map(item => {
        if (item.is_line) {
          return (
            <div
              key={item.name}
              className={styles.DropdownMenu__item + ' ' + styles.DropdownMenu__item_line}
              onClick={item?.onClick}
            >{item?.name}</div>
          );
        }

        return (
          <div key={item.name} className={styles.DropdownMenu__item}>{item?.name}</div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
