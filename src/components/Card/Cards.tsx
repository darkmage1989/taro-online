import { useReducer, useState } from "react";
import styles from "./Card.module.css";
import { DATA } from "../../constans/DATA";
import CardBack from "../CardBack/CardBack";
import ButtonsBox from "../ButtonsBox/ButtonsBox";
import Taro from "../Taro/Taro";
import CardData from "../CardData/CardData";
import { type data } from "../CardData/CardData";
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
  const field = state.field as Array<data>;
  const toggleVisibleFilter = (dropdown: string) => {
    setVisible(visible === dropdown ? "" : dropdown);
  };
  function cardRandomize() {
    const index = Math.round(Math.random() * DATA.length);
    if (field.length < amount) {
      dispatch({ type: "PUSH_FIELD", payload: DATA[index] });
      DATA.splice(index, 1);
      setCard(field.length);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <CardBack cardRandomize={cardRandomize} field={field} amount={amount} />
        <Taro field={field} card={card} setCard={setCard} />
      </div>
      <div className={styles.dataBox}>
        <CardData
          data={field}
          card={card}
          toggleVisibleFilter={toggleVisibleFilter}
          visible={visible}
        />

        {card === 78 ? (
          <ButtonsBox setAmount={setAmount} amount={amount} />
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setAmount(0);
              setVisible("");
              setCard(78);
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
