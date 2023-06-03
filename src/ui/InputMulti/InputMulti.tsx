import React, { FC, InputHTMLAttributes, useState } from 'react';
import styles from './InputMulti.module.scss';
import InputTag from '../InputTag/InputTag';

interface InputMultiProps extends InputHTMLAttributes<HTMLInputElement> { }

type tag = Array<{
  id: string,
  value: string
}>;

const InputMulti: FC<InputMultiProps> = props => {
  const { className, ...rest } = props;
  const styleClassName = className ? ' ' + className : '';

  const [value, setValue] = useState(props.value ?? '')

  const [tags, setTags] = useState<tag>([]);

  const onKeyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 32) return;

    if (value.toString().trim() === '') return;

    const newTags = [...tags, {
      id: Date.now() + value.toString(),
      value: value.toString()
    }];

    setTags(newTags);
    setValue('');
  }

  const clearTag = (id: string) => {
    const index = tags.findIndex(tag => tag.id === id);

    const clearTag = [...tags];
    clearTag.splice(index, 1)
    setTags(clearTag);
  }

  return (
    <label className={styles.InputMulti + styleClassName}>
      {tags?.map((tag) => (
        <InputTag
          key={tag.id}
          onClick={() => clearTag(tag.id)}
        >{tag.value}</InputTag>
      ))}

      <input
        className={styles.InputMulti__input}
        onKeyDown={onKeyDownEvent}
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        {...rest}
      />
    </label>
  );
};

export default InputMulti;
