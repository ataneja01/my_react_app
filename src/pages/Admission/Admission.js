import AdmissionHeader from "../../components/AdmissionHeader/AdmissionHeader";
import SearchForm from "../../components/SearchForm/SearchForm";
import "../../components/style.css";
import React, { useEffect } from 'react';
import "./Admission.css";
import { useState } from "react";
import Courses from "../../components/Courses/Courses";
import RadioFilter from "../../components/RadioFilter/RadioFilter";

function Admission () {
    useEffect(() => {
        document.body.classList.add('admission-body');
    });

    const [courseQuery, setCourseQuery] = useState(''); 
    const [coursePeriod, setCoursePeriod] = useState('Summer 2021');
    const [courseType, setCourseType] = useState('both');
    const [courses, setCourses] = useState([  
      {id:1, title: "Masters Program in Computer Science", period: "Summer 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-123"},
      {id:2, title: "Masters Program in Software Engineering", period: "Summer 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-124"},
      {id:3, title: "Masters Program in Telecommunication Systems", period: "Autumn 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "75%", teachingForm: "Program", applicationCode: "EUA-125"},
      {id:4, title: "User Experience Design", period: "Summer 2021", level: "Bachelor's", subjectArea: "Computer Science", paceOfStudy: "75%", teachingForm: "Course", applicationCode: "EUA-126"},
      {id:5, title: "Evolutionary Biology", period: "Autumn 2021", level: "Master's", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Course", applicationCode: "EUA-127"},
      {id:6, title: "Cell and Developmental Biology", period: "Autumn 2021", level: "Bachelor's", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-128"},
      {id:7, title: "Human Physiology", period: "Summer 2021", level: "Beginner", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Course", applicationCode: "EUA-129"}
    ]); 

    const defaultCourses = [  
      {id:1, title: "Masters Program in Computer Science", period: "Summer 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-123"},
      {id:2, title: "Masters Program in Software Engineering", period: "Summer 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-124"},
      {id:3, title: "Masters Program in Telecommunication Systems", period: "Autumn 2021", level: "Master's", subjectArea: "Computer Science", paceOfStudy: "75%", teachingForm: "Program", applicationCode: "EUA-125"},
      {id:4, title: "User Experience Design", period: "Summer 2021", level: "Bachelor's", subjectArea: "Computer Science", paceOfStudy: "75%", teachingForm: "Course", applicationCode: "EUA-126"},
      {id:5, title: "Evolutionary Biology", period: "Autumn 2021", level: "Master's", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Course", applicationCode: "EUA-127"},
      {id:6, title: "Cell and Developmental Biology", period: "Autumn 2021", level: "Bachelor's", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Program", applicationCode: "EUA-128"},
      {id:7, title: "Human Physiology", period: "Summer 2021", level: "Beginner", subjectArea: "Biology", paceOfStudy: "Full-time", teachingForm: "Course", applicationCode: "EUA-129"}
    ];  

    const searchCourses = (searchText, semester) => {  
        var filteredCourses = defaultCourses.filter(course => ((course.period.toUpperCase().indexOf(semester.toUpperCase()) != -1) && (course.subjectArea.toUpperCase().indexOf(searchText.toUpperCase()) != -1)));
        setCourses(filteredCourses); 
       
     };  

     const filterCoursesAfterRadioFilter = (courseT) => {
       var filteredCoursesAfterRadioFilter = courses.filter(course => 
        (course.teachingForm.toUpperCase().indexOf(courseT.toUpperCase()) != -1));
       setCourses(filteredCoursesAfterRadioFilter); 
      };
      return (
        <> 
            <AdmissionHeader />

            <SearchForm
                courseQuery={courseQuery}
                setCourseQuery={setCourseQuery}
                coursePeriod={coursePeriod} 
                setCoursePeriod={setCoursePeriod}
                searchCourses={searchCourses}
            />

            <section class="main-content content">
                    <form id="search-form" class="search-form">
                        <div class="filter-top">
                            <h2 class="column-heading">Filter</h2>
                            <button type="button" id="reset" class="reset text-button">Reset</button>
                        </div>
                        <fieldset class="group">
                            <legend class="group-label">Both courses and programs</legend>
                            
                            <RadioFilter
                                courseType={courseType} 
                                setCourseType={setCourseType}
                                filterCoursesAfterRadioFilter={filterCoursesAfterRadioFilter}
                            />

                        </fieldset>
                        <div class="horizontalLine"></div>
                        <fieldset class="group">
                            <legend class="group-label">Course level</legend>
                            <div class="checkbox-row">
                                <label class="checkbox-container">Beginner level
                                    <input type="checkbox" id="basicLevel" name="level" value="beginner" class="level-checkbox"></input>
                                    <span class="checkmark"></span>
                                </label>
                                <i class="fas fa-question-circle tooltip">
                                    <span class="tooltiptext">You do not need previous higher education studies but must have successfully completed upper secondary studies.</span>
                                </i>
                                <div class="tooltip"></div>
                            </div>
                            <div class="checkbox-row">
                                <label class="checkbox-container">Bachelor's level
                                    <input type="checkbox" id="mediumLevel" name="level" value="bachelor" class="level-checkbox"></input>
                                    <span class="checkmark"></span>
                                </label>
                                <i class="fas fa-question-circle tooltip">
                                    <span class="tooltiptext">You must have successfully completed upper secondary studies.</span>
                                </i>
                                <div class="tooltip"></div>
                            </div>
                            </fieldset>
                        </form>
                        <div class="search-result" id = "search-result">
                          <Courses courses={courses} /> 
                        </div>
            </section>

            
      </>
    );
}

export default Admission;