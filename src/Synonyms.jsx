import React from "react";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <p>
          <strong>Synonyms</strong>
        </p>
        {props.synonyms.map(function (synonyms, index) {
          <div key={index}>
            <ul>
              <li>{synonyms}</li>
            </ul>
          </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
