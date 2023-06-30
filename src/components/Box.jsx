import React from "react";

//css
import "./box.css";

const Box = ({ text, handleChangeColor, color, item }) => {
  const boxStyle = {
    backgroundColor: color,
  };
  return (
    <>
      <div
        className="wrapper-box"
        style={boxStyle}
        onClick={() => handleChangeColor(item)}
      >
        {`Box #${text + 1}`}
      </div>
    </>
  );
};

export default Box;
