import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

import './Themecolor.css';

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const [mode, setMode] = useState('light');

  const handleChange = val => {
    setChecked(val);
    if (val) {
      document.body.classList.add('dark-mode');
      setMode('Dark-Mode');
    } else {
      document.body.classList.remove('dark-mode');
      setMode('Light-Mode');
    }
  };

  return (
    <>
      <div className="themecolor">
        <ReactSwitch
          checked={checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <label className="label">{mode}</label>
        </div>
    </>
  );
}

export default ToggleSwitch;