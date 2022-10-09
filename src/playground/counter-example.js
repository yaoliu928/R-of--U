class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlerReset = this.handlerReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.state = {
      count: 0,
    }
  };

  componentDidMount() {
    try {
      console.log("did mount");
      const string = localStorage.getItem("count");
      const count = parseInt(string, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    }
    catch (e) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
    if (prevState !== this.state) { // If the data isn't changed, do not need to save it to database.
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    })
  }

  handleMinusOne() {
    this.setState((prev) => {
      return {
        count: prev.count - 1
      }
    })

  }

  handlerReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne} >-1</button>
        <button onClick={this.handlerReset} >reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
