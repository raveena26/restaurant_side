import classes from "./ItemCard.module.css";

const ItemCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default ItemCard;
