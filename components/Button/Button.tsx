import React from "react";
import { ButtonProps } from "./Button.props";

import cn from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearence,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence == "primary",
        [styles.ghost]: appearence == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
