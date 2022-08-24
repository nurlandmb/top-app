import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import cl from 'classnames';
import CloseIcon from './close.svg';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');
  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        {
          ...formData,
          productId,
        }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }
    } catch (e) {
      setIsError(e.message || 'Что-то пошло не так');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cl(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' },
          })}
          error={errors.name}
          placeholder="Имя"
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните Заголовок' },
          })}
          error={errors.title}
          className={styles.title}
          placeholder="Заголовок отзыва"
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Выберите рейтинг' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Напишите описание' },
          })}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cl(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
      {isError && (
        <div className={cl(styles.panel, styles.error)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon className={styles.close} onClick={() => setIsError('')} />
        </div>
      )}
    </form>
  );
};
