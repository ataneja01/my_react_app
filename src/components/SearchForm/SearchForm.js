import React from "react";
import "./SearchForm.css";
import Dropdown from "../Dropdown/Dropdown";
import "../style.css";

function SearchForm({courseQuery, setCourseQuery, coursePeriod, setCoursePeriod, searchCourses}) {
  function handleClick() {
    searchCourses(courseQuery, coursePeriod);
  }

  return (
    <div>
      <form id="search" className="course-search" method="get" action="">
        <div className="content">
          <div className="search-area">
            <div className="dropdown search-area-element">
              <Dropdown
                dropdownValue={coursePeriod}
                setDropdownValue={setCoursePeriod}
              />
            </div>

            <div className="text-search search-area-element">
              <input
                type="search"
                id="freeText"
                className="search-input"
                value={courseQuery}
                placeholder="subject/course"
                onChange={(event) => {
                  setCourseQuery(event.target.value);
                }}
              />
            </div>

            <div className="search-btn-wrapper">
              <button
                id="search-btn"
                className="hero-btn hero-btn--red hero-btn--search"
                type="button"
                onClick={handleClick}
              >
                Find courses
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
