import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cl from 'classnames';
import { useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef } from 'react';
import StarIcon from './star.svg';

const Rating = forwardRef((
  { isEditable = false, rating, error, setRating, ...props }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (rating: number) => {
    if (!isEditable) return;
    constructRating(rating);
  };
  const onClick = (rating: number) => {
    if (!isEditable || !setRating) return;
    setRating(rating);
  };
  const handleSpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(rating);
  };
  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cl(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => constructRating(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };
  return (
    <div className={cl(styles.stars, {
      [styles.error]: error,
    })} {...props} ref={ref}>
      {ratingArray.map((r: JSX.Element, i: number) => (
        <span key={i}>{r}</span>
      ))}
      {error && <span className={styles.errorMsg}>{error.message}</span>}
    </div>
  );
});

Rating.displayName = 'Rating'

export {Rating}
