import React from "react";
import "./Course.css";

function Course({ course, index}) {
    return (
        <div key={index} class="searchresult-card">
            <div class="resultcard-header">
            <h3 class="column-heading">{course.title}</h3>
            </div>
            <div class="resultcard-content font-light-color">
            <div class="resultcard-content-col">
            <p class="line-spacing"><span class="subtitle">Period: </span>{course.period}</p>
            <p class="line-spacing"><span class="subtitle">Level: </span>{course.level}</p>
            <p class="line-spacing"><span class="subtitle">Subject Area: </span>{course.subjectArea}</p>
            </div>
            <div class="resultcard-content-col">
            <p class="line-spacing"><span class="subtitle">Pace of study: </span>{course.paceOfStudy}</p>
            <p class="line-spacing"><span class="subtitle">Teaching form: </span>{course.teachingForm}</p>
            <p class="line-spacing"><span class="subtitle">Application code: </span>{course.applicationCode}</p>
            </div>
            </div>
        </div>
    )
}

export default Course;
