import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);
  const [message, setMessage] = useState("");

  const calculateCalories = () => {
    if (
      !name ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks ||
      goal < 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("Please enter valid positive values for all fields!");
      return;
    }

    const totalCalories =
      Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);
    const remainingCalories = Number(goal) - totalCalories;

    setTotal(totalCalories);
    setRemaining(remainingCalories);

    if (remainingCalories < 0) {
      setMessage(" You exceeded your daily calorie goal!");
    } else {
      setMessage(" You are within your daily goal!");
    }
  };

  return (
    <div className="app">
      <h1> Calorie Tracker App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Daily Calorie Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Breakfast Calories"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
        />
        <input
          type="number"
          placeholder="Lunch Calories"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Dinner Calories"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
        />
        <input
          type="number"
          placeholder="Snacks Calories"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
        />
        <button onClick={calculateCalories}>Calculate Calories</button>
      </div>

      {total !== null && (
        <div className="results">
          <h3>Results:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Daily Calorie Goal:</strong> {goal}</p>
          <p><strong>Total Calories Consumed:</strong> {total}</p>
          <p
            style={{
              color: remaining < 0 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Remaining Calories: {remaining}
          </p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
