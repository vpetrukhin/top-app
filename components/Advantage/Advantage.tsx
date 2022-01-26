import React from "react";

import { AdvantageProps } from "./Advantage.props";

import styles from "./Advantage.module.css";

import CheckedIcon from "./checked.svg";
import { Htag } from "../Htag/Htag";

export const Advantages = ({ advantages }: AdvantageProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {advantages.map((a) => (
        <li key={a._id} className={styles.advantage}>
          <CheckedIcon />
          <Htag tag="h3">{a.title}</Htag>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </li>
      ))}
    </ul>
  );
};
