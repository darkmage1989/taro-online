import React, { useEffect } from "react";
import Description from "../Description/Description";
import styles from "./CardData.module.css";
import Typed from "typed.js";

interface CardDataProps {
  data: Array<data>;
  card: number;
  toggleVisibleFilter: (i: string) => void;
  visible: string;
}
export interface data {
  title: string;
  description: string;
  main: string;
  work: string;
  maind: string;
  relationships: string;
  love: string;
  id: number;
  url: string;
}
const CardData = ({
  data,
  card,
  toggleVisibleFilter,
  visible,
}: CardDataProps) => {
  const refs = React.useRef(null);
  useEffect(() => {
    if (refs.current && visible) {
      if (
        visible !== "main" &&
        visible !== "work" &&
        visible !== "maind" &&
        visible !== "relationships" &&
        visible !== "love"
      ) {
        return;
      }
      const typed = new Typed(refs.current, {
        strings: [data[card][visible]],
        typeSpeed: 40,
        cursorChar: "",
      });
      return () => {
        typed.destroy();
      };
    }
  }, [visible, data, card]);
  return (
    <div className={styles.dataCardBox}>
      <h2>{card !== 78 ? data[card].title : "Как это работает"}</h2>
      {card !== 78 ? (
        <p ref={refs} className={styles.dataText}>{data[card].description}</p>
        
      ) : (
        <div>
          <Description />
        </div>
      )}
      {card !== 78 && (
        <span
          className={
            visible === "main" ? styles.dataTitleActive : styles.dataTitle
          }
          onClick={() => toggleVisibleFilter("main")}
        >
          Общее описание Аркана {data[card].title}
        </span>
      )}
      {visible === "main" && <p ref={refs} className={styles.dataText}></p>}
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
      {visible === "work" && <p ref={refs} className={styles.dataText}></p>}
      {card !== 78 && (
        <span
          className={
            visible === "maind" ? styles.dataTitleActive : styles.dataTitle
          }
          onClick={() => toggleVisibleFilter("maind")}
        >
          Сознание
        </span>
      )}
      {visible === "maind" && <p ref={refs} className={styles.dataText}></p>}
      {card !== 78 && (
        <span
          className={
            visible === "relationships"
              ? styles.dataTitleActive
              : styles.dataTitle
          }
          onClick={() => toggleVisibleFilter("relationships")}
        >
          В личных взаимоотношениях
        </span>
      )}
      {visible === "relationships" && (
        <p ref={refs} className={styles.dataText}></p>
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
      {visible === "love" && <p ref={refs} className={styles.dataText}></p>}
    </div>
  );
};

export default CardData;
