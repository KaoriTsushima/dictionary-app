import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <p>{meaning.definition}</p>
              <br />
              <p>
                <em>Example: {meaning.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
