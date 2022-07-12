import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import Close from "./close.svg";
import {Input} from "../Input/Input";
import {Rating} from "../Rating/Rating";
import {TextArea} from "../TextArea/TextArea";
import {Button} from "../Button/Button";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "./IReviewForm.interface";


export const ReviewForm = ({
  productId,
  children,
  className,
  ...props
}: ReviewFormProps) => {
    const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    }

    // @ts-ignore
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
          className={cn(styles.reviewForm, className)}
          {...props}
      >
        <Input
            {...register('name', {required: {value: true, message: 'Заполните имя'}})}
            placeholder="Имя"
            error={errors.name}
        />
        <Input
            {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
            placeholder="Заголовок отзыва"
            className={styles.title}
            error={errors.title}
        />
        <div className={styles.rating}>
            <span>Оценка:</span>
            {/*@ts-ignore*/}
            <Controller
                control={control}
                name='rating'
                render={({ field }) => (
                    <Rating isEditable={true} rating={field.value} ref={field.ref} setRating={field.onChange} />
                )}
            />
        </div>
        <TextArea error={errors.description} {...register('description', {required: {value: true, message: 'Заполните описание'}})} placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearence="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <span className={styles.successTitle}>Ваш отзыв отправлен</span>
        <Close className={styles.close} />
      </div>
    </form>
  );
};
