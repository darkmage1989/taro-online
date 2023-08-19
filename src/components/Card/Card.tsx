import { useReducer, useState } from "react";
import styles from "./Card.module.css";
import { DATA } from "../../constans/DATA";
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
const Card = () => {
  const [card, setCard] = useState<number>(78);
  const [visible, setVisible] = useState("");
  const [amount, setAmount] = useState(1);
  const [state, dispatch] = useReducer(reducer, {
    field: [],
  });
  const toggleVisibleFilter = (dropdown: string) => {
    setVisible(visible === dropdown ? "" : dropdown);
  };
  function cardRandomizer() {
    const index = Math.round(Math.random() * 77);

    if (state.field.length < amount) {
      setCard(index);
      dispatch({ type: "PUSH_FIELD", payload: DATA[index] });
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <img
          onClick={cardRandomizer}
          className={styles.cardBack}
          src={`/fonts/78.jpg`}
          alt={`/fonts/78.jpg`}
        />
        <div className={styles.cardField}>
          {" "}
          {state.field.map((taro: any) => (
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
              <p>
                Гадание на картах таро очень многогранная практика, к картам
                обращаются с различными вопросами – любит-не любит, что будет,
                как пройдёт и так далее. Для удобства использования существуют
                расклады – определённый порядок выкладывания карт для их
                расшифровки. Самым первым будет то, что и раскладом посчитать
                сложно – «Карта дня», он же будет раскладом по умолчанию. Просто нажимайте на колоду.
              </p>
              <p>
                Задаём вопрос – «Что меня сегодня ждёт?» выбираем расклад и
                вытаскиваем карту.
              </p>
              <p>Вторым будет расклад на характеристику человека.</p>
              <p>
                Третьим будет сфера любовных отношений. Разобраться поможет
                расклад «Оракул любви». Данный расклад помогает оценить
                состояния ваших отношений и узнать, что же сделать для улучшения
                ваших отношений.
              </p>
              <p>
                Порой бывает так, что нужно сделать нелёгкий выбор из двух
                вариантов, например совершить крупную покупку или придержать
                деньги. В такой ситуации поможет следующий расклад. Тасуем
                колоду и задаём вопрос «Что будет, если я сделаю так (верхний
                ряд), и что будет, если я сделаю так (нижний ряд).{" "}
              </p>
              <p>
                Ну и напоследок не совсем стандартный расклад, это
                расклад на отношение в целом, не обязательно любовные.
              </p>
              <div className={styles.buttonsBox}>
                <button className={styles.button}
                  onClick={() => {
                    setAmount(5);
                  }}
                >
                  Расклад на характеристику (5 карт)
                </button>
                <button className={styles.button}
                  onClick={() => {
                    setAmount(4);
                  }}
                >
                  Оракул любви (4 карты)
                </button>
                <button className={styles.button}
                  onClick={() => {
                    setAmount(6);
                  }}
                >
                  Расклад на выбор (6 карт)
                </button>
                <button className={styles.button}
                  onClick={() => {
                    setAmount(4);
                  }}
                >
                  Расклад на отношение <br />(4 карты)
                </button>
              </div>
            </div>
          )}
        </div>
        {card !== 78 && (
          <span
            className={styles.dataTitle}
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
            className={styles.dataTitle}
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
            className={styles.dataTitle}
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
            className={styles.dataTitle}
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
            className={styles.dataTitle}
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

export default Card;
