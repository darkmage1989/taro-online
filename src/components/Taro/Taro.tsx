import styles from "./Taro.module.css";
import { type data } from "../CardData/CardData";
interface TaroProps {
  field: Array<data>;
  card: Number;
  setCard: (i: number) => void;
}

const Taro = ({ field, card, setCard }: TaroProps) => {
  return (
    <div className={styles.cardField}>
      {field.map((taro) => (
        <img
          key={taro.id}
          onClick={() => {
            setCard(field.indexOf(taro));
          }}
          className={styles.cardImg}
          src={`fonts/${taro.url}.jpg`}
          alt={`fonts/${card}.jpg`}
        />
      ))}
    </div>
  );
};

export default Taro;
