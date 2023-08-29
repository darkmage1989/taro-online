import styles from "./Taro.module.css";
interface TaroProps {
  field: Array<Object>;
  card: Number;
  setCard: any
}

const Taro = ({ field, card, setCard }: TaroProps) => {
  return (
    <div className={styles.cardField}>
      {field.map((taro: any) => (
        <img
          key={taro.id}
          onClick={() => {
            setCard(field.indexOf(taro));
          }}
          className={styles.cardImg}
          src={`/fonts/${taro.url}.jpg`}
          alt={`/fonts/${card}.jpg`}
        />
      ))}
    </div>
  );
};

export default Taro;
