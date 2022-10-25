import React, { useState } from "react";
import "./Editor.css";
import { BiExpandAlt } from "react-icons/bi";
import { FiMinimize2 } from "react-icons/fi";

export default function Editor({ markdownText, setMarkdownText }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = ({ target }) => {
    setMarkdownText(target.value);
  };
  const handleClickExpand = () => {
    const editor = document.getElementById("editor-section").classList;
    const preview = document.getElementById("preview-section").classList;
    if (expanded === false) {
      editor.add("expand");
      preview.add("hidden");
      setExpanded(true);
    } else {
      editor.remove("expand");
      preview.remove("hidden");
      setExpanded(false);
    }
  };

  return (
    <section id="editor-section" className="section-container">
      <div className="section-header">
        <h2>Editor</h2>
        {expanded ? (
          <button className="expander" onClick={handleClickExpand} title="minimize">
            <FiMinimize2 />
          </button>
        ) : (
          <button className="expander" onClick={handleClickExpand} title="expand">
            <BiExpandAlt />
          </button>
        )}
      </div>
      <textarea id="editor" className="container markdown-input" type="text" name="markdown input" onChange={handleChange} value={markdownText} placeholder="Write or paste your markdown here ..." />
    </section>
  );
}
