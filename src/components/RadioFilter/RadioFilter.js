import React from "react";
import { useState } from "react";


function RadioFilter( {courseType, setCourseType, filterCoursesAfterRadioFilter} ) {
    function handleClick(e) {
        setCourseType(e.target.value);
        filterCoursesAfterRadioFilter(courseType);
    }
    return (
        <div class="group-option-radio">
            <input type="radio" id="typeboth" name="type" value="both" class="input-radio"
            onClick={handleClick}
            ></input>
            <label htmlFor="typeboth" class="radio-label">Both</label>
            <input type="radio" id="typecourses" name="type" value="course" class="input-radio" 
            onClick={handleClick}
            ></input>
            <label htmlFor="typecourses" class="radio-label">Courses</label>
            <input type="radio" id="typeprograms" name="type" value="program" class="input-radio" 
            onClick={handleClick}
            ></input>
            <label htmlFor="typeprograms" class="radio-label">Programs</label>
        </div>
    )
}

export default RadioFilter;
