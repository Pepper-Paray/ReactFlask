import { useState, useEffect } from "react";

function App() {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  const [compliment, setCompliment] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/greeting")
      .then(res => res.json())
      .then(data => setGreeting(data.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/api/compliment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => setCompliment(data.compliment));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Compliment Generator</h1>

      <h2>{greeting}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Get Compliment</button>
      </form>

      {compliment && (
        <h3 style={{ marginTop: "20px" }}>{compliment}</h3>
      )}
    </div>
  );
}

export default App;

