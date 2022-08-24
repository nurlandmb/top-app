import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cl from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

const Textarea = forwardRef(
  (
    { className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cl(className, styles.textareaWrapper)}>
        <textarea
          className={cl(styles.textarea, {
            [styles.error]: error
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMsg}>{error.message}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
export { Textarea };
