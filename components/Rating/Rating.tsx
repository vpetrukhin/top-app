import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";
import { RatingProps } from "./Rating.props";

import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

// eslint-disable-next-line react/display-name
export const Rating = forwardRef(({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constractingRating(rating);
  }, [rating]);

  const constractingRating = (currentRating: number) => {
    const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => hoverHandler(i + 1)}
          onMouseLeave={() => hoverHandler(rating)}
          onClick={() => clickHandler(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updateRating);
  };

  const hoverHandler = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const clickHandler = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props} ref={ref}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
});
