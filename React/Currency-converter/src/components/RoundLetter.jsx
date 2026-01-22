import styles from "./styles/RoundLetter.module.css";

export default function RoundLetter({ color, backgroundColor, size, letter }) {
    // 
    // const fontSiz = size * 0.8;
  return (
    <p
      className={styles.roundLetter}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        fontSize: "2vh",
        // borderRadius: borderRadius,
      }}
    >
      {letter}
    </p>
  );
}
