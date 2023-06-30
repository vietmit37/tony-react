import React, { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// component
import Button from "../components/Button";
import Box from "../components/Box";

// helper
import { getRandomColor } from "../helpers/getRandomColor";

//css
import "../components/box.css";

const generateItemBoxes = (numBoxes) => {
  const newBoxes = [];
  for (let i = 0; i < numBoxes; i++) {
    newBoxes.push({
      id: uuidv4(),
      number: i,
    });
  }
  return newBoxes;
};

function GenerateBox() {
  const [listBoxes, setListBoxes] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  // Change Input
  const handleChange = (e) => {
    let numericInput = Math.min(e.target.value, 128); // Enforce maximum value of 128
    setInputValue(numericInput);
  };

  const handleGenerate = () => {
    setListBoxes(generateItemBoxes(inputValue));
  };

  // Change Color with id
  const handleChangeColor = (box) => {
    const updatedItemBoxes = listBoxes.map((item) => {
      if (item.id === box.id) {
        return { ...item, color: getRandomColor() };
      }
      return item;
    });
    if (updatedItemBoxes.length > 0) {
      setListBoxes(updatedItemBoxes);
    }
  };

  return (
    <>
      GenerateBox
      <div>
        <label htmlFor="numberBoxes">Number of boxes: </label>
        <input
          id="numberBoxes"
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <Button text="Generated" handleClick={handleGenerate} />
        <div className="container">
          <div className="container-box">
            {listBoxes.length === 0 ? (
              <h1>No Data</h1> 
            ) : (
              <>
                {listBoxes.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <Box
                        handleChangeColor={() => handleChangeColor(item)}
                        text={item.number}
                        color={item.color}
                      />
                    </Fragment>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateBox;
