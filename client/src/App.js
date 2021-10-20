import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
function App() {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    if (error) setError("");
    e.preventDefault();
    let inputValue = e.target.number.value;

    if (inputValue < 2) setError("The Input Number should be greater than one");
    else if (inputValue > Math.pow(10, 7))
      setError("The Number is too large , please try maximum 7 digits");
    else {
      try {
        let res = await axios.get(`http://localhost:4000?number=${inputValue}`);
        setResult(res.data);
      } catch (e) {
        setError("Network Error try again later!");
      }
    }
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit} result={result} error={error} />
    </div>
  );
}

export default App;
