import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

function GuestGreeting({ toggleShow }) {
  return (
    <div>
      <Typography content="Welcome to Tung" />
      <Button text="Logout" handleClick={toggleShow} />
    </div>
  );
}

export default GuestGreeting;
