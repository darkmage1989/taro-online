import styles from "./ButtonsBox.module.css";
interface ButtonsBoxProps {
  setAmount: (i: number) => void;
  amount: Number;
}

const ButtonsBox = ({ setAmount, amount }: ButtonsBoxProps) => {
  return (
    <div className={styles.buttonsBox}>
      <button
        className={amount === 1 ? styles.buttonActive : styles.button}
        onClick={() => {
          setAmount(1);
          
        }}
      >
        Расклад дня (1 карта)
      </button>
      <button
        className={amount === 5 ? styles.buttonActive : styles.button}
        onClick={() => {
          setAmount(5);
        }}
      >
        Расклад на характеристику (5 карт)
      </button>
      <button
        className={amount === 4 ? styles.buttonActive : styles.button}
        onClick={() => {
          setAmount(4);
        }}
      >
        Оракул любви (4 карты)
      </button>
      <button
        className={amount === 6 ? styles.buttonActive : styles.button}
        onClick={() => {
          setAmount(6);
        }}
      >
        Расклад на выбор (6 карт)
      </button>
      <button
        className={amount === 3 ? styles.buttonActive : styles.button}
        onClick={() => {
          setAmount(3);
        }}
      >
        Расклад на отношение <br />
        (3 карты)
      </button>
    </div>
  );
};

export default ButtonsBox;
