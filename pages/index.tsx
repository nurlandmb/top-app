import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Rating, Tag } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Tag size="m" color="green">
        Средний
      </Tag>
      <Tag size="m" color="primary" href="#">
        Link
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory: number = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
