import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Tamilarasan",
    rollNo: "STU2026001",
    className: "B.Sc Computer Science",
    section: "A",
    semester: "Semester 4",
  });

  const [marks, setMarks] = useState([
    { subject: "Data Structures", mark: 88, max: 100, grade: "A+" },
    { subject: "Java Programming", mark: 82, max: 100, grade: "A+" },
    { subject: "Database Management", mark: 76, max: 100, grade: "A" },
    { subject: "Web Development", mark: 91, max: 100, grade: "A+" },
    { subject: "Computer Networks", mark: 69, max: 100, grade: "B+" },
  ]);

  const total = marks.reduce((sum, item) => sum + item.mark, 0);
  const maxTotal = marks.reduce((sum, item) => sum + item.max, 0);
  const percentage = ((total / maxTotal) * 100).toFixed(1);

  const getGrade = (mark) => {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B+";
    if (mark >= 60) return "B";
    if (mark >= 50) return "C";
    return "F";
  };

  const updateMark = (index, value) => {
    const updatedMarks = [...marks];
    const newMark = Math.min(100, Math.max(0, Number(value)));

    updatedMarks[index].mark = newMark;
    updatedMarks[index].grade = getGrade(newMark);

    setMarks(updatedMarks);
  };

  const getPerformance = () => {
    if (percentage >= 90) return "Outstanding";
    if (percentage >= 80) return "Excellent";
    if (percentage >= 70) return "Very Good";
    if (percentage >= 60) return "Good";
    if (percentage >= 50) return "Average";
    return "Needs Improvement";
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="school-logo">🎓</div>

        <div>
          <h1>Advanced Student Report Card</h1>
          <p>Student Academic Performance Management System</p>
        </div>

        <button className="print-btn" onClick={() => window.print()}>
          🖨 Print Report
        </button>
      </header>

      <main className="container">

        {/* Student Information */}
        <section className="student-card">
          <div className="profile">
            <div className="avatar">
              {student.name.charAt(0)}
            </div>

            <div>
              <h2>{student.name}</h2>
              <p>{student.className}</p>
              <span className="status">● Active Student</span>
            </div>
          </div>

          <div className="student-details">
            <div>
              <span>Roll Number</span>
              <strong>{student.rollNo}</strong>
            </div>

            <div>
              <span>Section</span>
              <strong>{student.section}</strong>
            </div>

            <div>
              <span>Semester</span>
              <strong>{student.semester}</strong>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="summary-grid">

          <div className="summary-card blue">
            <div className="summary-icon">📊</div>
            <div>
              <span>Total Marks</span>
              <h2>{total} / {maxTotal}</h2>
            </div>
          </div>

          <div className="summary-card green">
            <div className="summary-icon">📈</div>
            <div>
              <span>Percentage</span>
              <h2>{percentage}%</h2>
            </div>
          </div>

          <div className="summary-card orange">
            <div className="summary-icon">🏆</div>
            <div>
              <span>Performance</span>
              <h2>{getPerformance()}</h2>
            </div>
          </div>

          <div className="summary-card purple">
            <div className="summary-icon">🎯</div>
            <div>
              <span>Subjects</span>
              <h2>{marks.length}</h2>
            </div>
          </div>

        </section>

        {/* Report Table */}
        <section className="report-card">

          <div className="section-header">
            <div>
              <h2>Subject-wise Performance</h2>
              <p>Detailed academic marks and grades</p>
            </div>

            <span className="semester-badge">
              {student.semester}
            </span>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Maximum Marks</th>
                  <th>Marks Obtained</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {marks.map((subject, index) => {
                  const subjectPercentage =
                    ((subject.mark / subject.max) * 100).toFixed(0);

                  return (
                    <tr key={subject.subject}>
                      <td>{index + 1}</td>

                      <td>
                        <strong>{subject.subject}</strong>
                      </td>

                      <td>{subject.max}</td>

                      <td>
                        <input
                          type="number"
                          value={subject.mark}
                          min="0"
                          max="100"
                          onChange={(e) =>
                            updateMark(index, e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <div className="progress-area">
                          <span>{subjectPercentage}%</span>

                          <div className="progress-bar">
                            <div
                              style={{
                                width: `${subjectPercentage}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="grade">
                          {subject.grade}
                        </span>
                      </td>

                      <td>
                        {subject.mark >= 40 ? (
                          <span className="pass">✓ Pass</span>
                        ) : (
                          <span className="fail">✕ Fail</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="2">
                    <strong>Grand Total</strong>
                  </td>
                  <td>
                    <strong>{maxTotal}</strong>
                  </td>
                  <td>
                    <strong>{total}</strong>
                  </td>
                  <td>
                    <strong>{percentage}%</strong>
                  </td>
                  <td>
                    <span className="overall-grade">
                      {getGrade(Number(percentage))}
                    </span>
                  </td>
                  <td>
                    <span className="pass">✓ Pass</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Performance Section */}
        <section className="bottom-grid">

          <div className="performance-card">
            <h2>Performance Analysis</h2>
            <p>Overall academic performance</p>

            <div className="circle">
              <div>
                <strong>{percentage}%</strong>
                <span>Overall</span>
              </div>
            </div>

            <h3>{getPerformance()}</h3>
            <p className="analysis-text">
              The student has demonstrated consistent academic
              performance throughout the semester.
            </p>
          </div>

          <div className="remarks-card">
            <h2>Teacher's Remarks</h2>
            <p>Academic evaluation</p>

            <div className="remark">
              <span>⭐</span>
              <div>
                <h3>Academic Performance</h3>
                <p>
                  Good understanding of the subjects and strong
                  performance in practical-oriented courses.
                </p>
              </div>
            </div>

            <div className="remark">
              <span>💡</span>
              <div>
                <h3>Recommendation</h3>
                <p>
                  Continue regular practice and focus on improving
                  weaker subject areas.
                </p>
              </div>
            </div>

            <div className="remark">
              <span>🏆</span>
              <div>
                <h3>Achievement</h3>
                <p>
                  Successfully completed all subjects in the current
                  semester.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Footer Information */}
        <section className="report-footer">

          <div>
            <span>Report Generated</span>
            <strong>September 2026</strong>
          </div>

          <div>
            <span>Academic Status</span>
            <strong className="approved">✓ Promoted</strong>
          </div>

          <div>
            <span>Class Teacher</span>
            <strong>Academic Department</strong>
          </div>

        </section>

      </main>

      <footer>
        <h3>🎓 Advanced Student Report Card</h3>
        <p>
          Student Academic Performance Management System
        </p>
        <small>© 2026 Educational React Project</small>
      </footer>

    </div>
  );
}

export default App;