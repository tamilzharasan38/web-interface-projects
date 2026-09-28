import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Tamil Arasan",
    rollNo: "STU001",
    course: "B.Sc Computer Science",
    year: "3rd Year",
    email: "student@example.com",
    phone: "9876543210",
    skills: "Java, React, HTML, CSS",
  });

  const [editMode, setEditMode] = useState(false);

  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      status: "Applied",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Java Developer",
      status: "Interview",
    },
    {
      id: 3,
      company: "Accenture",
      role: "Web Developer",
      status: "Selected",
    },
  ]);

  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addApplication = (e) => {
    e.preventDefault();

    if (!newCompany || !newRole) {
      alert("Please enter company and job role");
      return;
    }

    const application = {
      id: Date.now(),
      company: newCompany,
      role: newRole,
      status: "Applied",
    };

    setApplications([...applications, application]);
    setNewCompany("");
    setNewRole("");
  };

  const deleteApplication = (id) => {
    setApplications(
      applications.filter((application) => application.id !== id)
    );
  };

  const selectedCount = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>🎓 Student Career & Placement Dashboard</h1>
          <p>Build your career and track your placement journey</p>
        </div>
      </header>

      <main className="container">

        {/* Profile */}
        <section className="profile-card">
          <div className="profile-info">

            <div className="avatar">
              {student.name.charAt(0)}
            </div>

            <div>
              <h2>{student.name}</h2>
              <p>{student.course}</p>
              <span>{student.year}</span>
            </div>

          </div>

          <button
            className="edit-btn"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Save Profile" : "Edit Profile"}
          </button>

          <div className="profile-details">

            <div>
              <label>Roll Number</label>

              {editMode ? (
                <input
                  name="rollNo"
                  value={student.rollNo}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.rollNo}</p>
              )}
            </div>

            <div>
              <label>Email</label>

              {editMode ? (
                <input
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.email}</p>
              )}
            </div>

            <div>
              <label>Phone</label>

              {editMode ? (
                <input
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.phone}</p>
              )}
            </div>

            <div>
              <label>Skills</label>

              {editMode ? (
                <input
                  name="skills"
                  value={student.skills}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.skills}</p>
              )}
            </div>

          </div>
        </section>

        {/* Career Statistics */}
        <section className="stats">

          <div className="stat-card">
            <div className="icon">🏢</div>
            <h2>{applications.length}</h2>
            <p>Applications</p>
          </div>

          <div className="stat-card">
            <div className="icon">📞</div>
            <h2>{interviewCount}</h2>
            <p>Interviews</p>
          </div>

          <div className="stat-card">
            <div className="icon">🎯</div>
            <h2>{selectedCount}</h2>
            <p>Selected</p>
          </div>

          <div className="stat-card">
            <div className="icon">💼</div>
            <h2>8.5 LPA</h2>
            <p>Target Package</p>
          </div>

        </section>

        {/* Skills */}
        <section className="card">

          <h2>💻 Technical Skills</h2>

          <div className="skills">

            <span>Java</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>

          </div>

        </section>

        {/* Job Application Form */}
        <section className="card">

          <h2>➕ Add Job Application</h2>

          <form onSubmit={addApplication} className="application-form">

            <input
              type="text"
              placeholder="Company name"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
            />

            <input
              type="text"
              placeholder="Job role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />

            <button type="submit">
              Add Application
            </button>

          </form>

        </section>

        {/* Applications */}
        <section className="card">

          <h2>📋 Placement Applications</h2>

          <div className="application-list">

            {applications.map((application) => (

              <div
                className="application"
                key={application.id}
              >

                <div className="company-logo">
                  {application.company.charAt(0)}
                </div>

                <div className="job-info">
                  <h3>{application.company}</h3>
                  <p>{application.role}</p>
                </div>

                <span
                  className={`status ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteApplication(application.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* Career Preparation */}
        <section className="card">

          <h2>🚀 Career Preparation</h2>

          <div className="preparation">

            <div className="prep-item">
              <h3>Resume</h3>
              <p>85% Complete</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="prep-item">
              <h3>Technical Skills</h3>
              <p>75% Complete</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="prep-item">
              <h3>Interview Preparation</h3>
              <p>65% Complete</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;