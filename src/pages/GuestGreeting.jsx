import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

function GuestGreeting({ setShow }) {
  const onShow = () => setShow(false);
  return (
    <div>
      <Typography content="Welcome to Tung" />
      <Button text="Logout" handleClick={onShow} />
    </div>
  );
}

export default GuestGreeting;
