import React from "react";
import Option from "./Option";

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

export default Options;