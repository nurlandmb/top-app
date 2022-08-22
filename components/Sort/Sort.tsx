import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import cl from 'classnames';
import SortIcon from './sort.svg'

export const Sort = ({
  sort, setSort, className, ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cl(styles.sort, className)} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cl({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cl({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </button>
    </div>
  );
};
