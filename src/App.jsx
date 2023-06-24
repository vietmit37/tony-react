import { useState } from "react";

// pages
import ReactJSX from "./pages/ReactJSX";
import StatefulComponent from "./pages/StatefulComponent";
import ComposeComponent from "./pages/ComposeComponent";
import State from "./pages/State";
import UpdateObject from "./pages/UpdateObject";
import HandleEvent from "./pages/HandleEvent";
import ConditionalRendering from "./pages/ConditionalRendering";
import GuestGreeting from "./pages/GuestGreeting";
import Props from "./pages/Props";
import UserGreeting from "./pages/UserGreeting";
import List from "./pages/List";
import GenerateBox from "./pages/GenerateBox";
import LiftingStateUp from "./pages/LiftingStateUp";

// components

// helper

function App() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(prevState => !prevState); // toggle action
  }

  return (
    <>
      <h1>React JSX</h1>
      <ReactJSX />

      <h1>StafulComponent</h1>
      <StatefulComponent />

      <h1>Compose Component</h1>
      <ComposeComponent />

      <h1>State</h1>
      <State />

      <h1>Props</h1>
      <Props />

      <h1>Merge & Replace Object</h1>
      <UpdateObject />

      <h1>HandleEvent</h1>
      <HandleEvent />

      <h1>Conditional Rendering</h1>
      <ConditionalRendering />
      {show ? (
        <>
          <h1>Guest Greeting</h1>
          <GuestGreeting toggleShow={toggleShow} />
        </>
      ) : (
        <>
          <h1>User Greeting</h1>
          <UserGreeting toggleShow={toggleShow} />
        </>
      )}

      <h1>List & Keys</h1>
      <List />

      <h1>Sample App: Generate Box</h1>
      <GenerateBox />

      <h1>Lifting State Up</h1>
      <LiftingStateUp />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
