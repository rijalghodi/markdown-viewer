import React from "react";
import "./Header.css";
import { BsMarkdown } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <BsMarkdown />
      <h1>Markdown Viewer</h1>
    </div>
  );
}
