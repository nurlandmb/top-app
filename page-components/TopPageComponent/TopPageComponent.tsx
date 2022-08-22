import React, { useReducer } from 'react';
import {
  Advantage,
  Card,
  HhData,
  Htag,
  Product,
  Ptag,
  Sort,
  Tag,
} from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export default function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };
  return (
    <div>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
      {!!page.advantages.length && (
        <section className={styles.wrapper}>
          <Htag tag="h2">Преимущества</Htag>
          {page.advantages.map((advantage) => (
            <Advantage key={advantage._id} {...advantage} />
          ))}
        </section>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <section className={styles.wrapper}>
        <Htag tag="h2">Получаемые навыки</Htag>
        {page.tags.map((tag) => (
          <Tag color="primary" key={tag}>
            {tag}
          </Tag>
        ))}
      </section>
    </div>
  );
}
