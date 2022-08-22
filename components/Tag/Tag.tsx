import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cl from 'classnames';

export const Tag = ({
  children,
  size = 'm',
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cl(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
