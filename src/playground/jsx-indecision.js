console.log("This is the app.");

// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.options.value;
  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
  }
  renderForm();
}

const onRemoveAll = () => {
  app.options = [];
  renderForm();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById("app");

const renderForm = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options." : "No options."}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((element, index) => <li key={index}>{"Item " + element}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderForm();