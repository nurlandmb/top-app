import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cl from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cl(className, styles.inputWrapper)}>
        <input
          className={cl(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMsg}>{error.message}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export { Input };
