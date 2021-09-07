import React from "react";
import "./Course.css";

function Course({ course, index}) {
    return (
        <div key={index} className="searchresult-card">
            <div className="resultcard-header">
            <h3 className="column-heading">{course.title}</h3>
            </div>
            <div className="resultcard-content font-light-color">
            <div className="resultcard-content-col">
            <p className="line-spacing"><span className="subtitle">Period: </span>{course.period}</p>
            <p className="line-spacing"><span className="subtitle">Level: </span>{course.level}</p>
            <p className="line-spacing"><span className="subtitle">Subject Area: </span>{course.subjectArea}</p>
            </div>
            <div className="resultcard-content-col">
            <p className="line-spacing"><span className="subtitle">Pace of study: </span>{course.paceOfStudy}</p>
            <p className="line-spacing"><span className="subtitle">Teaching form: </span>{course.teachingForm}</p>
            <p className="line-spacing"><span className="subtitle">Application code: </span>{course.applicationCode}</p>
            </div>
            </div>
        </div>
    )
}

export default Course;
