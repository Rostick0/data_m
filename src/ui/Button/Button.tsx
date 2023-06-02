import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  styleColor?: 'string' | undefined
}

const Button: FC<ButtonProps> = props => {
  const { children, className, styleColor, ...rest } = props;

  const styleClass = styles['Button_style_' + styleColor];
  const styleLink = styleClass ? ' ' + styleClass : ' ' + styles['Button_style_blue'];
  const styleClassName = className ? ' ' + className : '';

  return (
    <button className={styles.Button + styleLink + styleClassName} {...rest}>{children}</button>
  );
};

export default Button;
