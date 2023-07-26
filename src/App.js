import { useState } from "react";
import "./App.css";
import Display from "./components/8_bit_display/display";

function App() {
  let [state, changeState] = useState(0);
  let display = (e) => {
    changeState(parseFloat(e.target.value));
  };
  return (
    <div className="App">
      <Display value={state} width={200} theme="apollo"></Display>
      <input
        min="0.0"
        max="10"
        step="0.1"
        type="range"
        onChange={display}
        defaultValue={"0.0"}
      ></input>
      <Display value={36534} width={300} theme="apollo"></Display>
      <Display value={36534} width={45} theme="electronic"></Display>
    </div>
  );
}

export default App;
