
import React, { useState } from "react"
import "./Toggle.css"

function Toggle({ isChecked, handleChange }) {

  // const [ modeIsDark, setModeIsDark ] = useState(false)
  const modeStatus = isChecked ? "Dark" : "Light"

  return (
    <div className="">
      <div className="absolute top-2 right-5">
        <input className="modeToggle" id="toggle" onChange={ handleChange} type="checkbox" checked={isChecked}></input>
        <label htmlFor="toggle">{modeStatus} Mode</label>
      </div>
    </div>
  )
}

export default Toggle