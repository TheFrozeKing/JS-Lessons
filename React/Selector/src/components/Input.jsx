import styles from "./styles/Input.module.css";

export default function Input({
  placeholder,
  type,
  color,
  borderColor,
  textColor,
  value,
  onInput,
  fontSize,
  fontWeight,
  onKeyPress
}) {
  return (
    <div className={styles.inputContainer}>
      <input
        onChange={onInput}
        onKeyDown={onKeyPress}
        className={styles.input}
        value={value}
        type={type}
        placeholder={placeholder}
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: color,
          fontSize: fontSize,
          fontWeight: fontWeight
        }}
      />
    </div>
  );
}
