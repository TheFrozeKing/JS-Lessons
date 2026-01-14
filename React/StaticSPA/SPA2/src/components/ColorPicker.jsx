import styles from "./styles/ColorPicker.module.css";
import React from "react";
import Result from "./Result";
import Input from "./Input";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      blue: 0,
      green: 0,
    };
  }

  setRed = (event) => {
    const value = event.target.value;
    this.setState({
      red: value,
    });

  };

  setGreen = (event) => {
    const value = event.target.value;
    this.setState({
      green: value,
    });

  };

  setBlue = (event) => {
    const value = event.target.value;
    this.setState({
      blue: value,
    });
  };

  render() {
    return (
      <div className={styles.colorPicker}>
        {this.props.children}
        <Result red = {this.state.red} green = {this.state.green} blue = {this.state.blue} />
        <Input
          label="Красный (R)"
          placeholder="0"
          type="number"
          color="#ffa2a2"
          textColor="#ed1f20" 
          onInput={this.setRed}         
        />
        <Input
          label="Зеленый (G)"
          placeholder="0"
          type="number"
          color="#93f3b8"
          textColor="#00a63e"
          onInput={this.setGreen}
        />
        <Input
          label="Синий (B)"
          placeholder="0"
          type="number"
          color="#8ec5ff"
          textColor="#2c65fc"
          onInput={this.setBlue}
        />
      </div>
    );
  }
}
