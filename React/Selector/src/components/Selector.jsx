import styles from "./styles/Selector.module.css"

const options = [
    {optionName: "Собака", text:"собачий", emoji:"🐶"},
    {optionName: "Кошка", text:"Кошка - грациозное домашнее животное, известное своей независимостью и ласковым характером. Кошки любят играть, охотиться и нежиться на солнце", emoji:"🐱"},
    {optionName: "Карась", text:"карасий", emoji:"🐟"},
]

export default function Selector({onSelect}) {
   
    function handleChange(e){
        const option = options[e.target.selectedIndex];
        onSelect(option.emoji, option.text);
    }

    return(
        <select className={styles.selector} onChange={handleChange}>
            <option>Собака</option>
            <option>Кошка</option>
            <option>Карась</option>
        </select>
    );
}