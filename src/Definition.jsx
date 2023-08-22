import React from "react";
export default function Definition(props) {
  if (props) {
    return (
      <p>
        <strong>Definition</strong>: {props.definition}
      </p>
    );
  } else {
    return null;
  }
}
