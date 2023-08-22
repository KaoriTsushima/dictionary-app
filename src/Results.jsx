import React from "react";
import "./Results.css";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetic}</h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                <Definition definition={meaning.definition} />
                <br />
                <Example example={meaning.example} />

                <Synonyms synonyms={meaning.synonyms} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
