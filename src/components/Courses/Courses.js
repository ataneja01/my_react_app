import Course from "../Course/Course";
import React from "react";


function Courses({courses}) {
  return (
    <main>
      {courses.map((course, index) => {
        return (
          <Course
            key={`course-${index}`}
            index={index}
            course={course}
          />
        );
      })}
    </main>
  )
}

export default Courses;
