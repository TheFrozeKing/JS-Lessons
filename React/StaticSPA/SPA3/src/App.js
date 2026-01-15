import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import styles from "./style.css";
function App() {
  return (
    <div className="app">
      <Header title="Галерея товаров мебели" />
      <main>
        <CardList>

        </CardList>
      </main>
      <Footer title="&copy; 2026 Разработчик: Ваше ФИО"/>
    </div>
  );
}

export default App;
