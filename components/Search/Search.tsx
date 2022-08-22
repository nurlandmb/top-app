import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import cl from 'classnames';
import { Input } from '../Input/Input';
import { KeyboardEvent, useState } from 'react';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg'
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    })
  }
  const handleKeyDown = (e: KeyboardEvent): void => {
    if(e.key === 'Enter'){
      goToSearch()
    }
  }
  return (
    <div className={cl(styles.search, className)} {...props}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
