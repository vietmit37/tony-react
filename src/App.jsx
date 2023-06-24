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
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

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
          <GuestGreeting setShow={setShow} />
        </>
      ) : (
        <>
          <h1>User Greeting</h1>
          <UserGreeting setShow={setShow} />
        </>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
