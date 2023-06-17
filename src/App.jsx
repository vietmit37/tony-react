
// pages
import ReactJSX from './pages/ReactJSX';
import StatefulComponent from './pages/StatefulComponent';
import ComposeComponent from './pages/ComposeComponent';
import State from './pages/State';
import UpdateObject from './pages/UpdateObject';

function App() {
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

      <h1>Merge & Replace Object</h1>
      <UpdateObject />

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
