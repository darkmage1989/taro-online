import Description from "../Description/Description";
import styles from "./CardData.module.css";

interface CardDataProps {
  data: Array<data>;
  card: number;
  toggleVisibleFilter: any;
  visible: string;
 
}
interface data {
  title: string;
  description: string;
  main: string;
  work: string;
  maind: string;
  relationships: string;
  love: string;
}

const CardData = ({
  data,
  card,
  toggleVisibleFilter,
  visible,
}: CardDataProps) => {
  return (
    <div className={styles.dataCardBox}>
      <h2>{card !== 78 ? data[card].title : "Как это работает"}</h2>
      {card !== 78 ? (
        data[card].description
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
      {visible === "main" && (
        <p className={styles.dataText}> {data[card].main}</p>
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
        <p className={styles.dataText}>{data[card].work}</p>
      )}
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
      {visible === "maind" && (
        <p className={styles.dataText}>{data[card].maind}</p>
      )}
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
        <p className={styles.dataText}>{data[card].relationships}</p>
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
        <p className={styles.dataText}>{data[card].love}</p>
      )}
    </div>
  );
};

export default CardData;
