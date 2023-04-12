import React, { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const values = [...inputs];
    values[index].value = event.target.value;
    setInputs(values);
  };

  const handleAddMore = () => {
    const values = [...inputs];
    values.push({ value: "" });
    setInputs(values);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          value={input.value}
          onChange={(event) => handleChange(index, event)}
        />
      ))}
      <button onClick={handleAddMore}>Add More</button>
    </div>
  );
}


