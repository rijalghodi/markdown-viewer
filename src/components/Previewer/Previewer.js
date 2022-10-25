import React, { useState } from "react";
import Markdown from "marked-react";
import "../Editor/Editor.css";
import "./Previewer.css";
import { BiExpandAlt } from "react-icons/bi";
import { FiMinimize2 } from "react-icons/fi";

export default function Previewer({ markdownText }) {
  const [expanded, setExpanded] = useState(false);
  const handleClickExpand = () => {
    const editor = document.getElementById("editor-section").classList;
    const preview = document.getElementById("preview-section").classList;
    if (expanded === false) {
      editor.add("hidden");
      preview.add("expand");
      setExpanded(true);
    } else {
      editor.remove("hidden");
      preview.remove("expand");
      setExpanded(false);
    }
  };

  return (
    <section id="preview-section" className="section-container">
      <div className="section-header">
        <h2>Previewer</h2>
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
      <div id="preview" className="preview-container container">
        <Markdown>{markdownText}</Markdown>
      </div>
    </section>
  );
}
