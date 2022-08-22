import styles from './Ptag.module.css';
import { PtagProps } from './Ptag.props';
import cl from 'classnames';

export const Ptag = ({
  children,
  size = 'medium',
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cl(styles.paragraph, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.big]: size === 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
