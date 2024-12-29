import "./Toggle.css"

import React from 'react'

export const Toggle = ({handleChange, isChange}) => {
  return (
    <div className="toggleContainer">
      <input type="checkbox"
       id="check"
       className="toggle"
       onChange={handleChange}
       checked={isChange}
       />
       <label htmlFor="check">Dark Mode</label>
    </div>
  )
}

export default Toggle
