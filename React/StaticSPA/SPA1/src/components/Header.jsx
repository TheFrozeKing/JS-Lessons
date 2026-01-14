import Label from "./Label";
import styles from "./styles/Header.module.css"


export default function Header({title}) {
    return (
        <div className={styles.header}>
            <Label text={title} fontSize="24px" color="white" fontWeight="600"/>
        </div>
    );
};