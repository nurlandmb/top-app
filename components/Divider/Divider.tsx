import styles from './Divider.module.css';
import { DividerProps } from './Divider.props';
import cl from 'classnames';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cl(styles.hr, className)} {...props} />;
};
