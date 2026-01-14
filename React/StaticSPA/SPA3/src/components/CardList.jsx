import styles from "./styles/CardList.module.css";
import React from "react";
import Card from "./Card"

export default class CardList extends React.Component {
    constructor(){
        super();
    };

    render(){
        return(
            <div className={styles.cardList}>
                <Card name = "Современный стул" description = "Элегантный дизайнерский стул" price = "12 990 Р"/>
                <Card name = "Современный стул" description = "Элегантный дизайнерский стул" price = "12 990 Р"/>
                <Card name = "Современный стул" description = "Элегантный дизайнерский стул" price = "12 990 Р"/>

            </div>
        );
    };
}