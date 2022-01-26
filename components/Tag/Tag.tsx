import React from "react";
import { TagProps } from "./Tag.props";

import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "small",
  color = "ghost",
  href,
  children,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
