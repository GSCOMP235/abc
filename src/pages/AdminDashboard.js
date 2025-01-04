import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = ({ courses, setCourses }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Fetch courses from the database on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin");
        setCourses(response.data); // Set the courses state with fetched data
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [setCourses]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (editingId) {
      // Update course in the local state
      setCourses(
        courses.map((course) =>
          course.id === editingId ? { ...course, ...formData } : course
        )
      );
      setEditingId(null); // Reset editing mode
    } else {
      // Add new course
      const newCourse = { ...formData, id: Date.now() }; // Create a new course with a unique ID
      setCourses([...courses, newCourse]); // Add new course to local state
      /*try{
        const response = await axios.post (
        " http://localhost:3000/api/admin",
        formData
        );
        
        setCourses([...courses,response.data]);
        }catch(error) { 
        console.error("Error adding course: " ,error );*/
        
    }

    // Clear form data
    setFormData({ title: "", description: "", price: "" });
  };

  const handleEdit = (course) => {
    setFormData(course); // Populate form fields with course data
    setEditingId(course.id); // Set the editing mode
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id)); // Remove course from local state
    }
  };

  const handleSearch = () => {
    const result = courses.find((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result || null);
  };

  const handleCloseSearch = () => {
    setSearchResult(null);
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses"
            className="border rounded p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded ml-2 hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {searchResult && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Course Details</h3>
            <p>
              <strong>Title:</strong> {searchResult.title}
            </p>
            <p>
              <strong>Description:</strong> {searchResult.description}
            </p>
            <p>
              <strong>Price:</strong> Lkr {searchResult.price}
            </p>
            <button
              onClick={handleCloseSearch}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Course Title"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Course Description"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            className="w-full p-2 border rounded"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="border rounded p-4">
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-green-600">Lkr {course.price}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleEdit(course)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AdminDashboard;
