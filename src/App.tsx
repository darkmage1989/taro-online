import Card from "./components/Card/Cards";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
