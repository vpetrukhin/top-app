import React, {ForwardedRef, forwardRef} from "react";
import { TextAreaProps } from "./TextArea.props";

import cn from "classnames";
import styles from "./TextArea.module.css";

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return <textarea className={cn(styles.textarea, className)} ref={ref} {...props} />;
});
