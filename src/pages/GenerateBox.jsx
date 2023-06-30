import React, { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// component
import Button from "../components/Button";
import Box from "../components/Box";

//css
import "../components/box.css";

function GenerateBox() {
  const [listBoxes, setListBoxes] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  // const [itemBoxes, setItemBoxes] = useState([]);

  // Change Input
  const handleChange = (e) => {
    let numericInput = Math.min(e.target.value, 128); // Enforce maximum value of 128
    setInputValue(numericInput);
  };

  const handleGenerate = () => {
    setListBoxes(generateItemBoxes(inputValue));
  };

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

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Change Color with id
  const handleChangeColor = (box) => {
    const updatedItemBoxes = listBoxes.map((item) => {
      if (item.id === box.id) {
        return { ...item, color: getRandomColor() };
      }
      return item;
    });
    if (updatedItemBoxes) {
      setListBoxes(updatedItemBoxes);
    }
    // setItemBoxes(updatedItemBoxes);
  };

  const renderBox = () => {
    return listBoxes.map((item) => {
      return (
        <Fragment key={item.id}>
          <Box
            item={item}
            handleChangeColor={handleChangeColor}
            text={item.number}
            color={item.color}
          />
        </Fragment>
      );
    });
  };

  // useEffect(() => {
  //   let arr = [];
  //   for (let i = 0; i < inputValue; i++) {
  //     arr.push({
  //       id: uuidv4(),
  //       number: i,
  //     });
  //     setItemBoxes(arr);
  //   }
  // }, [numBox]);

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
            {listBoxes.length === 0 ? <h1>No Data</h1> : <>{renderBox()}</>}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateBox;
