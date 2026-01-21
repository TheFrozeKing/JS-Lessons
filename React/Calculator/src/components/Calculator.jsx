import Button from "./Button";
import Input from "./Input";
import styles from "./styles/Calculator.module.css";
import { useState } from "react";

export default function Calculator() {
    const [inputValue, setInputValue] = useState("");
    const [firstOperand, setFirstOperand] = useState(0);
    const [operator, setOperator] = useState("");
    const [isBuffering, setIsBuffering] = useState(false);
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
    { id: 1, text: "/", onClick: () => handleOperation('/')},
    { id: 2, text: "*", onClick: () => handleOperation('*')},
    { id: 3, text: "-", onClick: () => handleOperation('-')},
    { id: 4, text: "7", onClick: () => setInputValue(inputValue+"7")},
    { id: 5, text: "8", onClick: () => setInputValue(inputValue+"8")},
    { id: 6, text: "9", onClick: () => setInputValue(inputValue+"9")},
    { id: 7, text: "+", onClick: () => handleOperation('+'), color: "#f39c12" },
    { id: 8, text: "4", onClick: () => setInputValue(inputValue+"4")},
    { id: 9, text: "5", onClick: () => setInputValue(inputValue+"5")},
    { id: 10, text: "6",onClick: () => setInputValue(inputValue+"6") },
    { id: 11, text: "1",onClick: () => setInputValue(inputValue+"1") },
    { id: 12, text: "2",onClick: () => setInputValue(inputValue+"2") },
    { id: 13, text: "3",onClick: () => setInputValue(inputValue+"3") },
    { id: 14, text: "0",onClick: () => setInputValue(inputValue+"0") },
    { id: 15, text: ".", onClick: () => setInputValue(inputValue+".") },
    ];

    function handleInputChange(evt) {
        setInputValue(evt.target.value);
    }

    function clearAll() {
        setFirstOperand('');
        setOperator('');
        setInputValue('');
    }

    function setInput(value){
        if(isBuffering){
            setInputValue(value);
        }
        setInputValue(inputValue+value);
    }

    function clear(){
        setInputValue('');
    }

    function handleOperation(operator){
        console.log(Number(firstOperand));
        if(Number(firstOperand) !== 0 && operator !== '' && Number(inputValue) !== undefined){
            calculate();
            setFirstOperand(inputValue);
            setOperator(operator);
            setIsBuffering(true);
        }
        else{
            setFirstOperand(Number(inputValue));
            setOperator(operator);
            clear();
            // calculate();            
        }
        
    }
    
    function calculate(){
        if(operator === "+") {setInputValue(firstOperand + Number(inputValue));}
        if(operator === "-") {setInputValue(firstOperand - Number(inputValue));}
        if(operator === "/") {setInputValue(firstOperand / Number(inputValue));}
        if(operator === "*") {setInputValue(firstOperand * Number(inputValue));}
    }
  
    return (
    <div className={styles.calculator}>
      <Input type="number" value={inputValue} onInput={handleInputChange}></Input>
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
      <Button color="#27ae60" text="=" width="47.5%"  onClick={calculate}></Button>
    </div>
  );
}
