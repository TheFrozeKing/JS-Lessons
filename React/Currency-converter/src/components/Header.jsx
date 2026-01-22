import Label from "./Label";
import styles from "./styles/Header.module.css"


export default function Header({title}) {
    return (
        <div className={styles.header}>
            <Label text={title} fontSize="26px" color="black" fontWeight="600"/>
            {/* <Label text={description} fontSize="26px" color="black" fontWeight="600"/> */}
        </div>
    );
};