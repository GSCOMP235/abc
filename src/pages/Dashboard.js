import React, { useState } from "react";

const Dashboard = () => {
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: "React Basics",
      progress: 60,
      nextLesson: "Components and Props",
      lastAccessed: "2024-03-20",
    },
  ]);

  const [userStats] = useState({
    totalCourses: 1,
    completedCourses: 0,
    averageProgress: 60,
    hoursSpent: 12,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Enrolled Courses</h3>
          <p className="text-2xl font-bold">{userStats.totalCourses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Completed Courses</h3>
          <p className="text-2xl font-bold">{userStats.completedCourses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Average Progress</h3>
          <p className="text-2xl font-bold">{userStats.averageProgress}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Hours Spent</h3>
          <p className="text-2xl font-bold">{userStats.hoursSpent}</p>
        </div>
      </div>

      {/* Enrolled Courses */}
      <h2 className="text-xl font-bold mb-4">My Courses</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">{course.title}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded h-2 mb-4">
              <div
                className="bg-blue-600 rounded h-2"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <div className="text-sm">
              <p className="text-gray-600 mb-1">Progress: {course.progress}%</p>
              <p className="text-gray-600 mb-1">
                Next Lesson: {course.nextLesson}
              </p>
              <p className="text-gray-600">
                Last Accessed: {course.lastAccessed}
              </p>
            </div>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
