import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cl from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  return <textarea className={cl(className, styles.textarea)} {...props} />;
};
