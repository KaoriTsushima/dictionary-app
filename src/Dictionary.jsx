import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
  }

  function showKeyWord(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data.word);
  }
  const apiKey = "9c350f182b3bcf281a5dbac65ff4ot92";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a word" onChange={showKeyWord} />
      </form>
    </div>
  );
}
