import React from "react";
import styles from "./styles/Counter.module.css";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import Label from "./Label";

import minusIcon from "../images/minus.png";
import plusIcon from "../images/plus.png";
import resetIcon from "../images/reset.png";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  countUp = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown = (event) => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset = (event) => {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className={styles.counter}>
        <Label
          text={this.state.count}
          fontSize="100px"
          color="#3737ff"
          fontWeight="600"
        />
        <ButtonContainer>
          <Button
            name="Минус"
            icon={minusIcon}
            color="#fb2c36"
            clickEvent={this.countDown}
          />
          <Button
            name="Сброс"
            icon={resetIcon}
            color="#6a7282"
            clickEvent={this.reset}
          />
          <Button
            name="Плюс"
            icon={plusIcon}
            color="#00c84e"
            clickEvent={this.countUp}
          />
        </ButtonContainer>
      </div>
    );
  }
}
