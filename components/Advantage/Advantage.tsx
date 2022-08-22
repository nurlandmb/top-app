import styles from './Advantage.module.css';
import { AdvantageProps } from './Advantage.props';
import cl from 'classnames';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import CheckIcon from './check.svg'

export const Advantage = ({
  title, description,
  ...props
}: AdvantageProps): JSX.Element => {
  return (
    <div className={styles.advantage}>
      <div className={styles.check}>
        <CheckIcon />
        <span className={styles.line} />
      </div>
      <div className={styles.text}>
        <Htag className={styles.title} tag='h3'>{title}</Htag>
        <Ptag className={styles.description}>{description}</Ptag>
      </div>
    </div>
  );
};
