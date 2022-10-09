class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isVisible: false,
    }
  }

  handleToggle() {
    this.setState((pre) => {
      return {
        isVisible: !pre.isVisible,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.handleToggle}>{this.state.isVisible ? `Hide details` : `Show details`}</button>
        {this.state.isVisible && (
          <div>
            <p>These are the details you can see.</p>
          </div>)}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));