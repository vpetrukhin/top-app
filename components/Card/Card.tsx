import { CardProps } from "./Card.props";

import cn from "classnames";
import styles from "./Card.module.css";
import {ForwardedRef, forwardRef} from "react";

// eslint-disable-next-line react/display-name
export const Card = forwardRef(({
  color = "white",
  children,
  className,
  ...props
}: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == "blue",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
