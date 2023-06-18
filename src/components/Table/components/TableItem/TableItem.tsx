import React, { FC } from 'react';
import styles from '../../Table.module.scss';

interface TableItem {
    children?: React.ReactNode
}

const TableItem: FC<TableItem> = ({
    children
}) => (
    <div className={styles.Table__item}>
        {children}
    </div>
);

export default TableItem;