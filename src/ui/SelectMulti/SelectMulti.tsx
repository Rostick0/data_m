import React, { FC } from 'react';
import Select from 'react-select';
import styles from './SelectMulti.module.scss';

interface items {

}

interface SelectMultiProps {
  name?: string | undefined,
  items?: Array<items>
}

const SelectMulti: FC<SelectMultiProps> = ({
  name,
  items
}) => (
  <Select
    className={styles.SelectMulti}
    // defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name={name}
    options={items}
    // className="basic-multi-select"
    classNamePrefix="select"
  ></Select>
);

export default SelectMulti;
