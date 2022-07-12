import React, {ForwardedRef, forwardRef} from "react";
import { InputProps } from "./Input.props";

import cn from "classnames";
import styles from "./Input.module.css";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
      <div className={cn(styles.inputWrapper, className)}>
        <input className={cn(styles.input, {
          'error': error
        })} ref={ref} {...props} />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
  );
});
