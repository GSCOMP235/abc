import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="border rounded p-4">
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-green-600">Lkr {course.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
