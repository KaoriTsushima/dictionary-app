import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "9c350f182b3bcf281a5dbac65ff4ot92";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showKeyWord(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="search" placeholder="Type a word" onChange={showKeyWord} />
      </form>
      <Results results={results} />
    </div>
  );
}
