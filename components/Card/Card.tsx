import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cl from 'classnames';

export const Card = ({
  children,
  color = 'white',
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cl(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
