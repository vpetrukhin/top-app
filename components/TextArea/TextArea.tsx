import React, {ForwardedRef, forwardRef} from "react";
import { TextAreaProps } from "./TextArea.props";

import cn from "classnames";
import styles from "./TextArea.module.css";

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea className={cn(styles.textarea, {
          [styles.error]: error
        })} ref={ref} {...props} />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
  );
});
