import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cl from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Card = forwardRef(
  (
    { children, color = 'white', className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cl(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
export { Card };
