import React from "react";

function Right(props) {
  return (
    <>
      <div>Right</div>
      <ul>
        <li>
          <button tabIndex={props.tabIdx}>A</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>B</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>C</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>D</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>E</button>
        </li>
      </ul>
    </>
  );
}

export default Right;
