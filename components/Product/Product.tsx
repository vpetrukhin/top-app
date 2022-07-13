import React, {ForwardedRef, forwardRef, useRef, useState} from "react";
import { productProps } from "./Product.props";

import cn from "classnames";
import styles from "./Product.module.css";
import {Card, Review, ReviewForm} from '..';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import {motion} from "framer-motion";


// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({
  product,
  className,
  ...props
}: productProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
      setIsReviewOpen(true);
      reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
      })
    }

  return (
      <div className={className} {...props} ref={ref}>
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
              <div className={styles.ratingTitle}><a href="#ref" onClick={() => scrollToReview()}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
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
              <Divider className={cn(styles.hr, styles.hr2)} />
              <div className={styles.actions}>
                  <Button appearence='primary'>Узнать подробнее</Button>
                  <Button
                      onClick={() => setIsReviewOpen(!isReviewOpen)}
                      appearence='ghost'
                      arrow={isReviewOpen ? 'down' : 'right'}
                      className={styles.reviewButton}
                  >Читать отзывы</Button>
              </div>
          </Card>
          <Card
              className={cn(styles.reviews, {
                  [styles.opened]: isReviewOpen,
                  [styles.closed]: !isReviewOpen,
              })}
              color='blue'
              ref={reviewRef}
          >
              {product.reviews.map(review => (
                  <div key={review._id}>
                      <Review review={review} />
                      <Divider />
                  </div>
              ))}
              <ReviewForm productId={product._id} />
          </Card>
      </div>
  );
}));
