import React from "react";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.partOfSpeech}</h3>
      {/* {props.definitions.map(function (definition, index) {
        <div key={index}>
          <p>{props.definition}</p>
          <br />
          <p>
            <em>{props.example}</em>
          </p>
        </div>;
      })} */}
    </div>
  );
}
