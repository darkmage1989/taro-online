import { useReducer, useState } from "react";
import styles from "./Card.module.css";
import { DATA } from "../../constans/DATA";
import Description from "../Description/Description";
import CardBack from "../CardBack/CardBack";
import ButtonsBox from "../ButtonsBox/ButtonsBox";
function reducer(
  state: { field: Array<object> },
  action: { payload: object; type: string }
) {
  if (action.type === "PUSH_FIELD") {
    return {
      field: [...state.field, action.payload],
    };
  }
  if (action.type === "DROP_FIELD") {
    return {
      field: [],
    };
  }
  throw Error("Unknown action.");
}
const Cards = () => {
  const [card, setCard] = useState<number>(78);
  const [visible, setVisible] = useState("");
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    field: [],
  });
  const field = state.field;
  const toggleVisibleFilter = (dropdown: string) => {
    setVisible(visible === dropdown ? "" : dropdown);
  };
  function cardRandomize() {
    const index = Math.round(Math.random() * 77);

    if (field.length < amount) { //Тут баг
      setCard(index);
      dispatch({ type: "PUSH_FIELD", payload: DATA[index] });
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <CardBack cardRandomize={cardRandomize} field={field} amount={amount} />
        <div className={styles.cardField}>
          {field.map((taro: any) => (
            <img
              id={taro.id}
              key={taro.id}
              onClick={() => {
                setCard(taro.id);
              }}
              className={styles.cardImg}
              src={`/fonts/${taro.id}.jpg`}
              alt={`/fonts/${card}.jpg`}
            />
          ))}
        </div>
      </div>
      <div className={styles.dataBox}>
        <h2>{card !== 78 ? DATA[card].title : "Как это работает."}</h2>
        <div className={styles.dataText}>
          {card !== 78 ? (
            DATA[card].description
          ) : (
            <div>
              <Description />
              <ButtonsBox setAmount={setAmount} amount={amount} />
            </div>
          )}
        </div>
        {card !== 78 && (
          <span
          className={
            visible === "main" ? styles.dataTitleActive : styles.dataTitle
          }
            onClick={() => toggleVisibleFilter("main")}
          >
            Общее описание Аркана {DATA[card].title}
          </span>
        )}
        {visible === "main" && (
          <p className={styles.dataText}> {DATA[card].main}</p>
        )}
        {card !== 78 && (
          <span
          className={
            visible === "work" ? styles.dataTitleActive : styles.dataTitle
          }
            onClick={() => toggleVisibleFilter("work")}
          >
            В работе
          </span>
        )}
        {visible === "work" && (
          <p className={styles.dataText}>{DATA[card].work}</p>
        )}
        {card !== 78 && (
          <span
            className={
              visible === "maind" ? styles.dataTitleActive : styles.dataTitle
            }
            onClick={() => toggleVisibleFilter("maind")}
          >
            В сознание
          </span>
        )}
        {visible === "maind" && (
          <p className={styles.dataText}>{DATA[card].maind}</p>
        )}
        {card !== 78 && (
          <span
          className={
            visible === "relationships" ? styles.dataTitleActive : styles.dataTitle
          }
            onClick={() => toggleVisibleFilter("relationships")}
          >
            В личных взаимоотношениях
          </span>
        )}
        {visible === "relationships" && (
          <p className={styles.dataText}>{DATA[card].relationships}</p>
        )}
        {card !== 78 && (
          <span
          className={
            visible === "love" ? styles.dataTitleActive : styles.dataTitle
          }
            onClick={() => toggleVisibleFilter("love")}
          >
            В любовных отношениях
          </span>
        )}
        {visible === "love" && (
          <p className={styles.dataText}>{DATA[card].love}</p>
        )}
        {card !== 78 && (
          <button
            className={styles.button}
            onClick={() => {
              setCard(78);
              setVisible("");
              dispatch({ type: "DROP_FIELD", payload: {} });
            }}
          >
            Перетасовать
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
