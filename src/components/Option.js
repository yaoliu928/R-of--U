import React from "react";

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

export default Option;