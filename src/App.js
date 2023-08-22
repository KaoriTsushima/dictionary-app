import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <Dictionary />
      <footer>
        <a
          href="https://github.com/KaoriTsushima/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Coded
        </a>{" "}
        by{" "}
        <a
          href="https://warm-lokum-7e18cc.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Kaori Tsushima
        </a>
      </footer>
    </div>
  );
}

export default App;
