import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cl from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cl(className, styles.input)} {...props} />;
};
