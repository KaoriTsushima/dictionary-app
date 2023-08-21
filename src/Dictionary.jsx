import React, { useState } from "react";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${keyword}`);
  }

  function showKeyWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a word" onChange={showKeyWord} />
      </form>
    </div>
  );
}
