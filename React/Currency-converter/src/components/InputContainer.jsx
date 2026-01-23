import Label from "./Label";
import RoundLetter from "./RoundLetter";
import styles from "./styles/InputContainer.module.css";
import Input from "./Input"

export default function InputContainer({ children, onInput, onKeyPress }) {
  return <div className={styles.inputContainer}>
    <Label text="У меня есть (RUB)" fontSize="1vh" fontWeight="700" color="gray"></Label>
    <div className={styles.rubContainer}>
      <RoundLetter letter="₽" backgroundColor="#e8eefd" size="4" color="#1f5fea"></RoundLetter>
      <Input type="number" color="white" borderColor="blue" textColor="black" fontSize="3vh" fontWeight="800" onInput={onInput} onKeyPress={onKeyPress}></Input>
      <Label text="RUB" fontSize="1.3vh" fontWeight="700" color="gray"></Label>
    </div>
  </div>;
}
