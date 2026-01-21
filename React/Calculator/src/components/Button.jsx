import Label from "./Label";
import styles from "./styles/Button.module.css";

export default function Button({text, onClick, color, id, width}) {
  return (
    <button className={styles.button} style={{backgroundColor:color, width:width}} onClick={onClick}>
      <Label fontSize="2vw" text={text} color="white" ></Label>
    </button>
  );
}
