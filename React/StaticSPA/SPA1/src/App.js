import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Label from "./components/Label";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header title = "Счетчик кликов"/>
      <Counter/>
      <Footer title = "&copy; Разработчик: Ваше Фио"/>
    </div>
  );
}

export default App;
