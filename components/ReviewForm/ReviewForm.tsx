import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import Close from "./close.svg";
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {TextArea} from "../TextArea/TextArea";
import {Button} from "../Button/Button";

export const ReviewForm = ({
  productId,
  children,
  className,
  ...props
}: ReviewFormProps) => {
  return (
    <>
      <div
          className={cn(styles.reviewForm, className)}
          {...props}
      >
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearence="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <span className={styles.successTitle}>Ваш отзыв отправлен</span>
        <Close className={styles.close} />
      </div>
    </>
  );
};
