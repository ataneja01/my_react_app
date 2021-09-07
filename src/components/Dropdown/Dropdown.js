import React from "react";

function Dropdown({ dropdownValue, setDropdownValue }) {

  return (
    <>
      <select
        id="period"
        className="dropdown"
        name="period"
        onChange={(event) => {
          setDropdownValue(event.target.value);
        }}
        value={dropdownValue}
      >
        <option value="Summer 2021">Summer 2021</option>

        <option value="Autumn 2021">Autumn 2021</option>
      </select>

      <label htmlFor="period" className="dropdown-label">Semester</label>
    </>
  );
}

export default Dropdown;
