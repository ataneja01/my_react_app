import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./SearchForm.css";
import "../style.css";
import { useRef } from "react";

function SearchForm( { courseQuery, setCourseQuery, coursePeriod, setCoursePeriod, searchCourses } ) {
   function handleClick() {
        searchCourses(courseQuery, coursePeriod );
    }
    return (
        <div>
            <form id="search" className="course-search" method="get" action="">
                <div className="content">
                    <div className="search-area">
                        <div class="dropdown search-area-element">
                            <select class="semester-dropdown" name="period" id="period" 
                            onChange={(event) => {  
                                setCoursePeriod(event.target.value);
                            }}>
                            <option selected value="Summer 2021">Summer 2021</option>
                            <option value="Autumn 2021">Autumn 2021</option>
                            </select>
                            <label htmlFor="period" class="dropdown-label">Semester</label>
                            </div>
                         <div className="text-search search-area-element">
                         <input 
                            type="search" 
                            id="freeText"
                            class="search-input"
                            value={courseQuery}  
                            placeholder="subject/course"  
                            onChange={(event) => {  
                                setCourseQuery(event.target.value);
                            }}/>  
                        </div>
                        <div className = "search-btn-wrapper">
                            <button className="hero-btn hero-btn--red hero-btn--search" type="button" id="search-btn" 
                            onClick={handleClick}
                             >Find courses</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
