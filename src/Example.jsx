import React from "react";
export default function Example(props) {
  if (props.example) {
    return (
      <p>
        <em>
          <strong>Example</strong>: {props.example}
        </em>
      </p>
    );
  } else {
    return null;
  }
}
