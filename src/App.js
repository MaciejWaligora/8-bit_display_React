import { useState } from "react";
import "./App.css";
import Display from "./components/8_bit_display/display";

function App() {
  let [state, changeState] = useState([0, 0, 0, 0]);
  let display1 = (e) => {
    let newState = [parseFloat(e.target.value), state[1], state[2], state[3]];
    changeState(newState);
  };
  let display2 = (e) => {
    let newState = [state[0], parseFloat(e.target.value), state[2], state[3]];
    changeState(newState);
  };
  let display3 = (e) => {
    let newState = [state[0], state[1], parseFloat(e.target.value), state[3]];
    changeState(newState);
  };
  let display4 = (e) => {
    let newState = [state[0], state[1], state[2], parseFloat(e.target.value)];
    changeState(newState);
  };
  return (
    <div className="App">
      <Display value={state[0]} width={100} theme="apollo"></Display>
      <input
        min="0.0"
        max="10"
        step="0.1"
        type="range"
        onChange={display1}
        defaultValue={"0.0"}
      ></input>
      <Display value={state[1]} width={100} theme="apollo"></Display>
      <input
        min="0"
        max="100"
        step="1"
        type="range"
        onChange={display2}
        defaultValue={"0"}
      ></input>
      <Display value={state[2]} width={100} theme="classic"></Display>
      <input
        min="0"
        max="100"
        step="0.1"
        type="range"
        onChange={display3}
        defaultValue={"0"}
      ></input>
      <Display value={state[3]} width={100} theme="electronic"></Display>
      <input
        min="0"
        max="1000"
        step="1"
        type="range"
        onChange={display4}
        defaultValue={"0"}
      ></input>
    </div>
  );
}

export default App;
