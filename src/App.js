import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { tester } from "../src/util/tester";

function App() {
  const [markdownText, setMarkdownText] = useState(tester);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Editor markdownText={markdownText} setMarkdownText={setMarkdownText} />
        <Previewer markdownText={markdownText} />
      </main>
    </div>
  );
}

export default App;
