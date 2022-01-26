import { TopPageComponentProps } from "./TopPageComponent.props";

import { Advantages, HhData, Htag, P, Product, Sort, Tag } from "../../components";
import FeutureIcon from "./feutureicon.svg";

import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import React, { useReducer } from "react";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReduser } from "./sort.reducer";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [
    { products: sortedProducts, sort },
    dispatchSort,
  ] = useReducer(sortReduser, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <>
      <div className={styles.head}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag size="medium" color="grey">
          {products && products.length}
        </Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      {/* Компонент продукта */}
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p}/>)}
      </div>
      <div>
        <div className={styles.hhHead}>
          <Htag tag="h2">Вакансии - {page.category}</Htag>
          <Tag size="small" color="red">
            hh.ru
          </Tag>
        </div>
        {firstCategory == TopLevelCategory.Courses && page.hh && (
          <HhData {...page.hh} />
        )}
      </div>

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </>
  );
};
