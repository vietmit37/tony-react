import React, { useState } from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

const UserGreeting = ({ setShow }) => {
  const onShow = () => setShow(true);
  return (
    <div>
      <Typography content="Please Sign Up" />
      <Button text="Login" handleClick={onShow} />
    </div>
  );
};

export default UserGreeting;
