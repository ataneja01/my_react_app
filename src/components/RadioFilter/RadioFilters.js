import React from 'react';
import { COURSE_TYPES } from '../../constants/course-data.js';
import './RadioFilters.css';


function RadioFilters({ courseType, setCourseType, filterCoursesAfterRadioFilter }) {
  function handleClick(e) {
    setCourseType(e.target.value);
    filterCoursesAfterRadioFilter(e.target.value);
  }

  const courseTypeRadioInputs = [];

  COURSE_TYPES.forEach(type => {
    const courseTypeRadioInput = (
      <label
        htmlFor={`type${type.id}`}
        key={`input-radio-box-${type.id}`}
        className={`radio-filters__label ${courseType === type.value ? "radio-filters__label--checked" : ""} `}
      >
        <input
          type="radio"
          id={`type${type.id}`}
          name="type"
          value={type.value}
          className="radio-filters__input"
          onClick={handleClick}
        />
        {type.label}
      </label>
    );

    courseTypeRadioInputs.push(courseTypeRadioInput);
  });

  return (
    <div className="radio-filters__wrapper">
      {courseTypeRadioInputs}
    </div>
  )
}

export default RadioFilters;
