import React from "react";
import { Button } from "./components/Button";

export const App = ({ color }) => {
  const hoverHandler = () => {
    console.log(color);
  };

  return (
    <div className="App">
      <Button handleClick={hoverHandler} />
    </div>
  );
};

export default App;
