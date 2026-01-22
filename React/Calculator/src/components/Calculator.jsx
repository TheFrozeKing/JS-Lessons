import Button from "./Button";
import Input from "./Input";
import styles from "./styles/Calculator.module.css";
import { useState } from "react";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [firstOperand, setFirstOperand] = useState(0);
  const [operator, setOperator] = useState("");
  // const buttons = [
  // { id: 0, text: "C", onClick: clearAll, color: "#e74c3c" },
  // { id: 1, text: "/", onClick: () => {setFirstOperand(Number(inputValue)); setOperator("/"); clear();}},
  // { id: 2, text: "*", onClick: () => {setFirstOperand(Number(inputValue)); setOperator("*"); clear();}},
  // { id: 3, text: "-", onClick: () => {setFirstOperand(Number(inputValue)); setOperator("-"); clear();}},
  // { id: 4, text: "7", onClick: () => setInputValue(inputValue+"7")},
  // { id: 5, text: "8", onClick: () => setInputValue(inputValue+"8")},
  // { id: 6, text: "9", onClick: () => setInputValue(inputValue+"9")},
  // { id: 7, text: "+", onClick: () => {setFirstOperand(Number(inputValue)); setOperator("+"); clear();}, color: "#f39c12" },
  // { id: 8, text: "4", onClick: () => setInputValue(inputValue+"4")},
  // { id: 9, text: "5", onClick: () => setInputValue(inputValue+"5")},
  // { id: 10, text: "6",onClick: () => setInputValue(inputValue+"6") },
  // { id: 11, text: "1",onClick: () => setInputValue(inputValue+"1") },
  // { id: 12, text: "2",onClick: () => setInputValue(inputValue+"2") },
  // { id: 13, text: "3",onClick: () => setInputValue(inputValue+"3") },
  // { id: 14, text: "0",onClick: () => setInputValue(inputValue+"0") },
  // { id: 15, text: ".", onClick: () => setInputValue(inputValue+".") },
  // ];

  const buttons = [
    { id: 0, text: "C", onClick: clearAll, color: "#e74c3c" },
    { id: 1, text: "/", onClick: () => handleOperation("/") },
    { id: 2, text: "*", onClick: () => handleOperation("*") },
    { id: 3, text: "-", onClick: () => handleOperation("-") },
    { id: 5, text: "8", onClick: () => setInputValue("8") },
    { id: 6, text: "9", onClick: () => setInputValue("9") },
    { id: 4, text: "7", onClick: () => setInputValue("7") },
    { id: 7, text: "+", onClick: () => handleOperation("+"), color: "#f39c12" },
    { id: 8, text: "4", onClick: () => setInputValue("4") },
    { id: 9, text: "5", onClick: () => setInputValue("5") },
    { id: 10, text: "6", onClick: () => setInputValue("6") },
    { id: 11, text: "1", onClick: () => setInputValue("1") },
    { id: 14, text: "0", onClick: () => setInputValue("0") },
    { id: 12, text: "2", onClick: () => setInputValue("2") },
    { id: 13, text: "3", onClick: () => setInputValue("3") },
    { id: 15, text: ".", onClick: () => setInputValue(".") },
  ];

  function handleInputChange(evt) {
    setInputValue(evt.target.value);
  }

  function clearAll() {
    setFirstOperand("");
    setOperator("");
    setInputValue("");
  }

  function clear() {
    setInputValue("");
  }

  function handleOperation(operator) {
    setFirstOperand(Number(inputValue));
    setOperator(operator);
    clear();
  }

  function calculate() {
    let result = 0;
    if (operator === "+") {
      result = firstOperand + Number(inputValue);
    }
    if (operator === "-") {
      result = firstOperand - Number(inputValue);
    }
    if (operator === "/") {
      result = firstOperand / Number(inputValue);
    }
    if (operator === "*") {
      result = firstOperand * Number(inputValue);
    }
    setInputValue(result);
    return result;
  }

  return (
    <div className={styles.calculator}>
      <Input
        type="number"
        value={inputValue}
        onInput={handleInputChange}
      ></Input>
      <div className={styles.buttonContainer}>
        {buttons.map((item) => (
          <Button
            key={item.id}
            text={item.text}
            onClick={item.onClick}
            color={item.color}
            width={item.width}
            margin={item.margin}
          />
        ))}
      </div>
      <Button
        color="#27ae60"
        text="="
        width="47.5%"
        onClick={calculate}
      ></Button>
    </div>
  );
}
