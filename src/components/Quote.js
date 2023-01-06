import { useReducer } from "react";
import classes from "./Quote.module.css";
import reviews from "../store/data";
import { current } from "@reduxjs/toolkit";
const initialState = { reviews, current: 0 };
const reducerFunction = function (state, action) {
  if (action.type === "increase") {
    return {
      reviews: state.reviews,
      current: (state.current + 1) % state.reviews.length,
    };
  }
  if (action.type === "decrease") {
    let current;
    if (state.current === 0) {
      current = state.reviews.length - 1;
    } else {
      current = state.current - 1;
    }
    return {
      reviews: state.reviews,
      current,
    };
  }
  return initialState;
};
function Quote(props) {
  const [reviews, dispatchReviews] = useReducer(reducerFunction, initialState);
  const current = reviews.reviews[reviews.current];
  const increaseHandler = () => {
    dispatchReviews({ type: "increase" });
  };
  const decreaseHandler = () => {
    dispatchReviews({ type: "decrease" });
  };

  return (
    <div key={current.id} className={classes.review}>
      <div className={classes["image-container"]}>
        <img className={classes["review-img"]} src={current.image} />
      </div>
      <h2 className={classes.name}>{current.name}</h2>
      <p className={classes.job}>{current.job} </p>
      <p className={classes.info}> {current.text}</p>
      <div className={classes.buttons}>
        <button onClick={decreaseHandler} className={classes.icon}>
          {"<"}
        </button>
        <button onClick={increaseHandler} className={classes.icon}>
          {">"}
        </button>
      </div>
      <button onClick={increaseHandler} className={classes.btn}>
        Surprise Me
      </button>
    </div>
  );
}
export default Quote;
