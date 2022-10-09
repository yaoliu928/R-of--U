class IndecisionApp extends React.Component {
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
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    console.log("render");
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <li>
        {props.option}
        <button onClick={(e) => { props.handleDeleteOption(props.option) }}>Remove</button>
      </li>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started.</p>}
      <ol>
        {props.options.map((el, index) => <Option
          handleDeleteOption={props.handleDeleteOption}
          option={el} key={index} />)}
      </ol>
    </div>
  )
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.options.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.options.value = "";
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="options" />
          <button>Add Options</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));