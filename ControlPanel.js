import React, { useState } from "react";
import './ControlPanel.css';

const ControlPanel = () => {
  const [isRunning, setIsRunning] = useState(false);

  const toggleSystem = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="control-panel"> 
      <h2>Control Panel</h2>
      <button onClick={toggleSystem}>{isRunning ? "Stop System" : "Start System"}</button>
    </div>
  );
};

export default ControlPanel;

