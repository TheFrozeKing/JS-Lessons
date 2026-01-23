import styles from "./styles/FlexContainer.module.css";

export default function FlexContainer({
  gap = "1vh",
  direction = "column",
  justify = "center",
  align = "center",
  margin = "0",
  children,
}) {
  return (
    <div
      className={styles.flexContainer}
      style={{
        gap: gap,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        margin: margin
      }}
    >
      {children}
    </div>
  );
}
