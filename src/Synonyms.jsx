import React from "react";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <p>
          <strong>Synonyms</strong>
        </p>
        <p>{props.synonyms.join(", ")}</p>
      </div>
    );
  } else {
    return null;
  }
}
