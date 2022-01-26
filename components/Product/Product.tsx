import React from "react";
import { productProps } from "./Product.props";

import cn from "classnames";
import styles from "./Product.module.css";
import { Card } from '..';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

export const Product = ({
  product,
  className,
  ...props
}: productProps) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt=""/></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}><hr/></div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          Преимущества
          {product.advantages}
        </div>
        <div className={styles.disadvantages}>
          Недостатки
          {product.disadvantages}
        </div>
      </div>
      <div className={styles.hr}><hr/></div>
      <div className={styles.actions}>
        <Button appearence='primary'>Узнать подробнее</Button>
        <Button appearence='ghost' arrow='right'>Читать отзывы</Button>
      </div>
    </Card>
  );
};
