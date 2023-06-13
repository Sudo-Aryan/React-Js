import React, { useState } from 'react';
import Course from './Courses';

const AllCourse = () => {

    const [courses, setCourse] = useState([
        {courseName: "Java",description:"this is a complete beginner to advanced java backend course with Good projects.", price: 1000},
        {courseName: "ReactJs", description: "this is a complete beginner to advanced java backend course with Good projects.", price: 6000},
        {courseName: "Spring Boot", description: "this is a complete beginner to advanced java backend course with Good projects.", price: 69000}
    ]);

    return(
        <div>
            {
                courses.length > 0 ? courses.map((item) => <Course course={item} />) : "No more courses available"
            }
        </div>
    )
}

export default AllCourse;
