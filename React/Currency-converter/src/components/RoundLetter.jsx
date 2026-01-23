import styles from "./styles/RoundLetter.module.css";

export default function RoundLetter({ color, backgroundColor, size, letter }) {
    // 
    const fontSize = (size * 0.5) + "vh";
    const borderRadius = (size * 0.4) + "vh";
  return (
    <p
      className={styles.roundLetter}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: size + "vh",
        height: size + "vh",
        fontSize: fontSize,
        borderRadius: borderRadius,
      }}
    >
      {letter}
    </p>
  );
}
