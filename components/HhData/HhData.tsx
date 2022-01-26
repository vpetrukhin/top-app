import React from "react";

import { HhDataProps } from "./HhData.props";

import styles from "./HhData.module.css";
import { Card } from "../Card/Card";

import Rate from "./rate.svg";
import { priceRu } from "../../helpers/helpers";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего Вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.sallaryWrapper}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.sallaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <Rate className={styles.filled} />
            <Rate />
            <Rate />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.sallaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <Rate className={styles.filled} />
            <Rate className={styles.filled} />
            <Rate />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.sallaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <Rate className={styles.filled} />
            <Rate className={styles.filled} />
            <Rate className={styles.filled} />
          </div>
        </div>
      </Card>
    </section>
  );
};
