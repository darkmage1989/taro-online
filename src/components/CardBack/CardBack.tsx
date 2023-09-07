import styles from "./CardBack.module.css";
interface CardBackProps {
  cardRandomize: ()=> void;
  field: Array<Object>;
  amount: Number;
}
const CardBack = ({ cardRandomize, field, amount }: CardBackProps) => {
  return (
    
    <img
      onClick={cardRandomize}
      className={
        field.length === amount ? styles.cardBack : styles.cardBackActive
      }
      src={`fonts/78.jpg`}
      alt={`fonts/78.jpg`}
    />
  );
};

export default CardBack;
