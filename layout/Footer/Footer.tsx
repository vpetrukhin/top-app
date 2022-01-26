import React from "react";
import { P } from "../../components";
import { FooterProps } from "./Footer.props";
import { format } from "date-fns";

import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <P>
        OwlTop &#169; 2020 - {format(new Date(), "yyyy")} Все права защищены
      </P>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};
