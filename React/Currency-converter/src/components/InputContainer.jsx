import RoundLetter from "./RoundLetter";
import styles from "./styles/InputContainer.module.css";

export default function InputContainer({ children }) {
  return <div className={styles.inputContainer}>
    <RoundLetter letter="Р" backgroundColor="blue" size="3vh" color="white"></RoundLetter>
  </div>;
}
