import React, { useState } from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

const UserGreeting = ({ toggleShow }) => {
  return (
    <div>
      <Typography content="Please Sign Up" />
      <Button text="Login" handleClick={toggleShow} />
    </div>
  );
};

export default UserGreeting;
