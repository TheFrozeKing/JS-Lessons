import styles from "./styles/CardList.module.css";
import React from "react";
import Card from "./Card";

export default class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: "Современный стул",
          description: "Элегантный дизайнерский стул",
          price: "12 990 ₽",
        },
        {
          id: 2,
          name: "Деревянный стол",
          description: "Массив дерева, ручная работа",
          price: "34 990 ₽",
        },
        {
          id: 3,
          name: "Диван-софа",
          description: "Комфортный диван для гостинной",
          price: "89 990 ₽",
        },
        {
          id: 4,
          name: "Шкаф-комод",
          description: "Просторное хранилище",
          price: "45 990 ₽",
        },
        {
          id: 5,
          name: "Кровать двуспальная",
          description: "Уютная кровать для спальни",
          price: "67 990 ₽",
        },
        {
          id: 6,
          name: "Книжная полка",
          description: "Стильный стеллаж для книг",
          price: "23 990 ₽",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.cardList}>
        {this.state.cards.map((item) => (
              <Card key={item.id} item={item} />
            ))}
      </div>
    );
  }
}
