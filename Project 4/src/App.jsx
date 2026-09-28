import { useState } from "react";
import "./App.css";

function App() {
  const [hobbies, setHobbies] = useState([
    {
      id: 1,
      name: "Reading",
      category: "Indoor",
      time: "5 hours/week",
    },
    {
      id: 2,
      name: "Photography",
      category: "Outdoor",
      time: "3 hours/week",
    },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Indoor");
  const [time, setTime] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !time) {
      alert("Please enter hobby name and time");
      return;
    }

    if (editId) {
      setHobbies(
        hobbies.map((hobby) =>
          hobby.id === editId
            ? { ...hobby, name, category, time }
            : hobby
        )
      );
      setEditId(null);
    } else {
      const newHobby = {
        id: Date.now(),
        name,
        category,
        time,
      };

      setHobbies([...hobbies, newHobby]);
    }

    setName("");
    setCategory("Indoor");
    setTime("");
  };

  const handleEdit = (hobby) => {
    setName(hobby.name);
    setCategory(hobby.category);
    setTime(hobby.time);
    setEditId(hobby.id);
  };

  const handleDelete = (id) => {
    setHobbies(hobbies.filter((hobby) => hobby.id !== id));
  };

  const filteredHobbies = hobbies.filter((hobby) =>
    hobby.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🎯 Hobby Management System</h1>
        <p>Manage your hobbies easily</p>
      </header>

      <div className="container">
        <div className="stats">
          <div className="stat-card">
            <h2>{hobbies.length}</h2>
            <p>Total Hobbies</p>
          </div>

          <div className="stat-card">
            <h2>
              {
                hobbies.filter((hobby) => hobby.category === "Indoor")
                  .length
              }
            </h2>
            <p>Indoor Hobbies</p>
          </div>

          <div className="stat-card">
            <h2>
              {
                hobbies.filter((hobby) => hobby.category === "Outdoor")
                  .length
              }
            </h2>
            <p>Outdoor Hobbies</p>
          </div>
        </div>

        <div className="form-card">
          <h2>{editId ? "✏️ Edit Hobby" : "➕ Add New Hobby"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter hobby name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Creative">Creative</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              placeholder="Time spent (e.g. 5 hours/week)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit">
              {editId ? "Update Hobby" : "Add Hobby"}
            </button>
          </form>
        </div>

        <div className="list-card">
          <div className="list-header">
            <h2>📋 My Hobbies</h2>

            <input
              className="search"
              type="text"
              placeholder="Search hobby..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filteredHobbies.length === 0 ? (
            <p className="empty">No hobbies found.</p>
          ) : (
            <div className="hobby-list">
              {filteredHobbies.map((hobby) => (
                <div className="hobby-item" key={hobby.id}>
                  <div>
                    <h3>{hobby.name}</h3>
                    <p>
                      Category: <strong>{hobby.category}</strong>
                    </p>
                    <p>⏱️ {hobby.time}</p>
                  </div>

                  <div className="actions">
                    <button
                      className="edit"
                      onClick={() => handleEdit(hobby)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete"
                      onClick={() => handleDelete(hobby.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;