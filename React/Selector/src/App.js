import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./style.css";
import Label from "./components/Label";
import FlexContainer from "./components/FlexContainer";
import { useState } from "react";
import Selector from "./components/Selector";

export default function App() {  
  const [emoji, setEmoji] = useState("🐱");
  const [text, setText] = useState("Кошка - грациозное домашнее животное, известное своей независимостью и ласковым характером. Кошки любят играть, охотиться и нежиться на солнце");
  
  function handleSelection(emoji, text){
    setEmoji(emoji);
    setText(text);
  }

  return (
    <div className="app">
      <Header title="Selector"></Header>
      <FlexContainer gap="1vh">
        <Selector onSelect={handleSelection}></Selector>
        <FlexContainer>
          <Label text={emoji} fontSize="12vh"></Label>          
          <Label
            text={text}
            fontSize="1.5vh"
            fontWeight="400"
            color="gray"
            width="31%"
          ></Label>
        </FlexContainer>
      </FlexContainer>
      <Footer title="&copy; 2026"></Footer>
    </div>
  );
}
