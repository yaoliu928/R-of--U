let isShowed = false;

const onToggle = () => {
  isShowed = !isShowed;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{isShowed ? "Hide details" : "Show details"}</button>
      {isShowed && (<div>Hey. These are some details you can now see.</div>)}
    </div>
  )
  ReactDOM.render(template, document.getElementById("app"));
}

render();