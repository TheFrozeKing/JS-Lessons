import Header from "./components/Header";
import Footer from "./components/Footer"
import styles from "./style.css";
import InputContainer from "./components/InputContainer";
import Label from "./components/Label";

export default function App() {
  return (
    <div className="app">
      <Header title="Currency Converter"></Header>
      {/* <Label text="Конвертация Рублей" fontSize="2vh" fontWeight="600" ></Label> */}
      {/* <Label text="Узнайте актуальный курс валют к российскому рублю в режиме реального времени" fontSize="1vh" fontWeight="400" color="gray" ></Label> */}
      <InputContainer></InputContainer>
      <Footer title = "&copy; 2026"></Footer>
    </div>
  );
}
