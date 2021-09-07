import Course from "../Course/Course";
import React from "react";


function Courses({ courses }) {
    return (
        <main>
            {courses.map((course, index) => {
                return (
                    <Course
                        index={index}
                        course={course}
                    />
                );
            })}
        </main>
    )
}

export default Courses;
