import React, { useEffect, useState } from "react";
import Box from "../components/Box";

const dataBoxColor = [
  { id: 1, text: "red", color: "red", originalColor: "red", checked: false },
  {
    id: 2,
    text: "green",
    color: "green",
    originalColor: "green",
    checked: false,
  },
  { id: 3, text: "blue", color: "blue", originalColor: "blue", checked: false },
  { id: 4, text: "aqua", color: "aqua", originalColor: "aqua", checked: false },
];

const ColorToggle = () => {
  const [boxes, setBoxes] = useState(dataBoxColor);

  const handleCheckboxChange = (e) => {
    const { name, checked, id } = e.target;
    const updatedBoxes = boxes.map((item) => {
      return {
        ...item,
        color: checked ? name : item.originalColor,
        checked: id === item.text ? checked : false,
      };
    });
    console.log(e.target.checked);
    setBoxes(updatedBoxes);
  };

  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {boxes.map(({ text, originalColor, id, color, checked }) => (
        <div key={id} style={{ marginBottom: "10px", flexBasis: "50%" }}>
          <label htmlFor={text}>
            <Box text={text} color={color} />
          </label>
          <input
            id={text}
            checked={checked}
            name={originalColor}
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e)}
            hidden
          />
        </div>
      ))}
    </div>
  );
};

export default ColorToggle;
