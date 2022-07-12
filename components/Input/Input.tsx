import React, {ForwardedRef, forwardRef} from "react";
import { InputProps } from "./Input.props";

import cn from "classnames";
import styles from "./Input.module.css";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input className={cn(styles.input, className)} ref={ref} {...props} />;
});
