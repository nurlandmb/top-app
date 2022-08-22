import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';


export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1 + ' ' + className}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2 + ' ' + className}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3 + ' ' + className}>{children}</h3>;
    default:
      return <></>;
  }
};
