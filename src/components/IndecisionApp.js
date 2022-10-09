import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
    console.log("constructor");
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
      console.log("did mount--fetching data");
    }
    catch (e) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("did update--saving data");
    }
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  handlePick() {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    alert(options[randomNum]);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((pre) => ({
      options: pre.options.filter((el) => el !== optionToRemove)
    }))
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add new item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already exists"
    }
    this.setState((pre) => ({ options: pre.options.concat([option]) }))
  }

  render() {
    const subTitle = "Put your life in the hands of a computer";
    console.log("render");
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options} />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    )

  }
}
