import { Ptag } from '../../components';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      <Ptag>OwlTop © 2020 - 2021 Все права защищены</Ptag>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};
