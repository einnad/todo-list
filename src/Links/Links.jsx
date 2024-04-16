import "./Links.css";
import React, { useState } from "react";

function Links() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleInput(e) {
    setNewLink(e.target.value);
  }

  function addLink() {
    setLinks((l) => [...l, newLink]);
    setNewLink("");
  }

  function removeLink(index) {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  }
  return (
    <div className="links-container">
      <div className="links">
        <h2>Quick Links</h2>
        <input
          type="text"
          onChange={handleInput}
          value={newLink}
          placeholder="Enter quick link"
        />
        <button onClick={addLink}>Add Quick Link</button>

        <ul>
          {links.map((l, i) => (
            <li key={i}>
              <a href={`${l}`} className="quick-link">
                {l}
              </a>
              <button onClick={() => removeLink(i)}> X </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Links;
