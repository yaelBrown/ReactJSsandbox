import React from "react";

function Left(props) {
  return (
    <>
      <div>Left</div>
      <ul>
        <li>
          <button tabIndex={props.tabIdx}>one</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>two</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>three</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>four</button>
        </li>
        <li>
          <button tabIndex={props.tabIdx}>five</button>
        </li>
      </ul>
    </>
  );
}

export default Left;
