import Header from "./components/Header";
import Footer from "./components/Footer"
import styles from "./style.css";
import InputContainer from "./components/InputContainer";
import Label from "./components/Label";
import FlexContainer from "./components/FlexContainer";
import ConvertionResult from "./components/ConversionResult";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [rubAmount, setRubAmount] = useState('');

  function handleInput(e){
    setInputValue(e.target.value);
  }

  function handleKeyPress(e){
    if(e.key !== "Enter"){
        return;
    }
    setRubAmount(inputValue);
  }

  return (
    <div className="app">
      <Header title="Currency Converter"></Header>
      <FlexContainer gap="3vh">
        <FlexContainer>
          <Label text="Конвертация Рублей" fontSize="2.5vh" fontWeight="700" ></Label>
          <Label text="Узнайте актуальный курс валют к российскому рублю в режиме реального времени" fontSize="1.28vh" fontWeight="400" color="gray" ></Label>
        </FlexContainer>
        <FlexContainer gap="5vh">
          <InputContainer onInput={handleInput} onKeyPress={handleKeyPress}></InputContainer>
          <FlexContainer direction="row" gap="2vh">
            <ConvertionResult rubAmount={Number(rubAmount)} currencyName="Доллар США" shortName = "USD" currencySign="$" currencyColor="#00bb7c" rate="90,9091"></ConvertionResult>
            <ConvertionResult rubAmount={Number(rubAmount)} currencyName="Евро" shortName = "EUR" currencySign="€" currencyColor="#106eff" rate="100,00"></ConvertionResult>
            <ConvertionResult rubAmount={Number(rubAmount)} currencyName="Японская Йена" shortName = "JPY" currencySign="¥" currencyColor="#ff0035" rate="0,6061"></ConvertionResult>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <Footer title = "&copy; 2026"></Footer>
    </div>
  );
}
