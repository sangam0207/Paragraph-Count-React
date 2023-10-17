import React, { useState } from "react";
import data from "./data";
import TextParagraph from "./TextParagraph";


const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2 className="title">Tired of boring lorem ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Number of Paragraphs:</label>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="number"
          name="Paragraph"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default App;
