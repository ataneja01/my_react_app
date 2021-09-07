import AdmissionHeader from '../../components/AdmissionHeader/AdmissionHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import '../../components/style.css';
import React, {useEffect, useState} from 'react';
import './Admission.css';
import Courses from '../../components/Courses/Courses';
import RadioFilters from '../../components/RadioFilter/RadioFilters';
import Dropdown from '../../components/Dropdown/Dropdown';
import { COURSES, GENERIC_COURSE_TYPE } from '../../constants/course-data.js';

function Admission() {
  useEffect(() => {
    document.body.classList.add('admission-body');
  });

  const [courseQuery, setCourseQuery] = useState('');
  const [coursePeriod, setCoursePeriod] = useState('Summer 2021');
  const [courseType, setCourseType] = useState('both');
  const [courses, setCourses] = useState(COURSES);

  const defaultCourses = COURSES;

  const searchCourses = (searchText, semester) => {
    const filteredCourses = defaultCourses.filter(course => {
      const isMatchedBySemester = course.period.toUpperCase().includes(semester.toUpperCase());
      const isMatchedBySubject = course.subjectArea.toUpperCase().includes(searchText.toUpperCase());

      return isMatchedBySemester && isMatchedBySubject;
    });

    setCourses(filteredCourses);
  };

  const filterCoursesByType = selectedType => {
    if (selectedType === GENERIC_COURSE_TYPE) {
      setCourses(defaultCourses);
    } else {
      const filteredCoursesAfterRadioFilter = defaultCourses.filter(course => {
        return course.teachingForm.toLowerCase().includes(selectedType);
      });

      setCourses(filteredCoursesAfterRadioFilter);
    }
  };
  return (
    <>
      <AdmissionHeader/>

      <SearchForm
        courseQuery={courseQuery}
        setCourseQuery={setCourseQuery}
        coursePeriod={coursePeriod}
        setCoursePeriod={setCoursePeriod}
        searchCourses={searchCourses}
      />

      <section className="main-content content">
        <form id="search-form" className="search-form">
          <div className="filter-top">
            <h2 className="column-heading">Filter</h2>
            <button type="button" id="reset" className="reset text-button">Reset</button>
          </div>

          <fieldset className="group">
            <legend className="group-label">Both courses and programs</legend>

            <RadioFilters
              courseType={courseType}
              setCourseType={setCourseType}
              filterCoursesAfterRadioFilter={filterCoursesByType}
            />
          </fieldset>

          <div className="horizontalLine" />

          <fieldset className="group">
            <legend className="group-label">Course level</legend>

            <div className="checkbox-row">
              <label className="checkbox-container">Beginner level
                <input type="checkbox" id="basicLevel" name="level" value="beginner" className="level-checkbox" />
                <span className="checkmark" />
              </label>

              <i className="fas fa-question-circle tooltip">
                <span className="tooltiptext">You do not need previous higher education studies but must have successfully completed upper secondary studies.</span>
              </i>

              <div className="tooltip" />
            </div>

            <div className="checkbox-row">
              <label className="checkbox-container">Bachelor's level
                <input type="checkbox" id="mediumLevel" name="level" value="bachelor" className="level-checkbox" />
                <span className="checkmark" />
              </label>

              <i className="fas fa-question-circle tooltip">
                <span className="tooltiptext">You must have successfully completed upper secondary studies.</span>
              </i>

              <div className="tooltip" />
            </div>
          </fieldset>

          <fieldset className="group">
            <Dropdown
              dropdownValue="some value"
              setDropdownValue={() => {
                alert('some value');
              }}
            />
          </fieldset>
        </form>

        <div className="search-result" id="search-result">
          <Courses courses={courses}/>
        </div>
      </section>
    </>
  );
}

export default Admission;
