import React from "react";
import { pProps } from "./P.props";

import cn from "classnames";
import styles from "./P.module.css";

export const P = ({
  size = "medium",
  children,
  className,
  ...props
}: pProps) => {
  return (
    <p
      className={cn(styles.text, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.large]: size == "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
