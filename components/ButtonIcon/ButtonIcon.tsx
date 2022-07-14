import React from "react";
import {ButtonIconProps, icons} from "./ButtonIcon.props";

import cn from "classnames";
import styles from "./ButtonIcon.module.css";

export const ButtonIcon = ({
  appearence,
  className,
    icon,
  ...props
}: ButtonIconProps) => {
    const Icon = icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence == "primary",
        [styles.white]: appearence == "white",
      })}
      {...props}
    >
        <Icon />
    </button>
  );
};
