import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", present: true },
    { id: 2, name: "Kumar", present: false },
    { id: 3, name: "Priya", present: true },
    { id: 4, name: "Divya", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount = students.length - presentCount;

  return (
    <div className="app">
      <div className="attendance-card">
        <h1>Student Attendance Tracker</h1>

        <div className="summary">
          <div>
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

          <div>
            <h3>Present</h3>
            <p>{presentCount}</p>
          </div>

          <div>
            <h3>Absent</h3>
            <p>{absentCount}</p>
          </div>
        </div>

        <h2>Student List</h2>

        <div className="student-list">
          {students.map((student) => (
            <div className="student" key={student.id}>
              <span>{student.name}</span>

              <button
                className={student.present ? "present" : "absent"}
                onClick={() => toggleAttendance(student.id)}
              >
                {student.present ? "Present" : "Absent"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;