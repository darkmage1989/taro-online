import Card from "./components/Card/Cards";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Card />
      </main>
    </>
  );
}

export default App;
