import React from "react";
import { productProps } from "./Product.props";

import cn from "classnames";
import styles from "./Product.module.css";
import { Card } from '..';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';


export const Product = ({
  product,
  className,
  ...props
}: productProps) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (<Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>)}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}<span className={styles.month}>/мес</span>
      </div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.ratingTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>
        {product.characteristics.map(c => (
          <div className={styles.characteristic} key={c.name}>
            <span className={styles.characteristicName}>{c.name}</span>
            <span className={styles.characteristicDots}></span>
            <span className={styles.characteristicValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && (<div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          {product.advantages}
        </div>)}
        {product.disadvantages && (<div className={styles.disadvantages}>
          <div className={styles.advTitle}>Недостатки</div>
          {product.disadvantages}
        </div>)}
        
      </div>
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearence='primary'>Узнать подробнее</Button>
        <Button appearence='ghost' arrow='right' className={styles.reviewButton}>Читать отзывы</Button>
      </div>
    </Card>
  );
};
