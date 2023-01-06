import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import classes from "./PrimaryHeading.module.css";
export default function PrimaryHeading(props) {
  return (
    <div className={classes.heading}>
      <h1 className={classes["primary-heading"]}>{props.children}</h1>
    </div>
  );
}
