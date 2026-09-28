import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const businesses = [
    {
      name: "Green Leaf Cafe",
      category: "Food",
      location: "Puducherry",
      rating: "4.8",
      icon: "☕",
      description: "Fresh coffee, snacks and delicious meals.",
    },
    {
      name: "Tech Zone",
      category: "Electronics",
      location: "Puducherry",
      rating: "4.5",
      icon: "💻",
      description: "Mobile phones, laptops and electronic accessories.",
    },
    {
      name: "Style Studio",
      category: "Beauty",
      location: "Puducherry",
      rating: "4.7",
      icon: "💇",
      description: "Professional hair and beauty services.",
    },
    {
      name: "Fresh Mart",
      category: "Shopping",
      location: "Puducherry",
      rating: "4.6",
      icon: "🛒",
      description: "Daily groceries and household essentials.",
    },
    {
      name: "City Fitness",
      category: "Fitness",
      location: "Puducherry",
      rating: "4.4",
      icon: "🏋️",
      description: "Modern gym with professional trainers.",
    },
    {
      name: "Book World",
      category: "Education",
      location: "Puducherry",
      rating: "4.9",
      icon: "📚",
      description: "Books, stationery and educational materials.",
    },
  ];

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(search.toLowerCase()) ||
      business.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || business.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">
          <span>📍</span>
          <div>
            <h1>LocalName</h1>
            <p>Discover Local Businesses</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#businesses">Businesses</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </nav>

        <button className="add-business">
          + Add Business
        </button>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">🌟 Discover your local community</span>

          <h2>
            Find the Best
            <br />
            <span>Local Businesses</span>
          </h2>

          <p>
            Explore trusted shops, restaurants, services and businesses
            around your area.
          </p>

          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search businesses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <div className="section-title">
          <h2>Explore Categories</h2>
          <p>Find businesses based on what you need</p>
        </div>

        <div className="category-buttons">
          {[
            "All",
            "Food",
            "Shopping",
            "Electronics",
            "Beauty",
            "Fitness",
            "Education",
          ].map((item) => (
            <button
              key={item}
              className={category === item ? "active-category" : ""}
              onClick={() => setCategory(item)}
            >
              {item === "All" && "🌐"}
              {item === "Food" && "🍔"}
              {item === "Shopping" && "🛍️"}
              {item === "Electronics" && "💻"}
              {item === "Beauty" && "💄"}
              {item === "Fitness" && "🏋️"}
              {item === "Education" && "📚"}
              {" "}{item}
            </button>
          ))}
        </div>
      </section>

      {/* Business List */}
      <section className="business-section" id="businesses">
        <div className="section-heading">
          <div>
            <h2>Popular Local Businesses</h2>
            <p>Explore highly rated businesses near you</p>
          </div>

          <span className="result-count">
            {filteredBusinesses.length} businesses
          </span>
        </div>

        <div className="business-grid">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div className="business-card" key={business.name}>

                <div className="business-image">
                  {business.icon}
                  <span className="verified">✓ Verified</span>
                </div>

                <div className="business-info">
                  <div className="business-title">
                    <h3>{business.name}</h3>
                    <span>⭐ {business.rating}</span>
                  </div>

                  <p className="category-text">
                    {business.category}
                  </p>

                  <p className="description">
                    {business.description}
                  </p>

                  <div className="location">
                    📍 {business.location}
                  </div>

                  <button className="view-btn">
                    View Details →
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="no-results">
              <div>🔎</div>
              <h3>No businesses found</h3>
              <p>Try another search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="features" id="about">
        <div className="section-title">
          <h2>Why Use LocalName?</h2>
          <p>Everything you need to discover local businesses</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div>🔍</div>
            <h3>Easy Discovery</h3>
            <p>
              Quickly find businesses and services around your location.
            </p>
          </div>

          <div className="feature-card">
            <div>⭐</div>
            <h3>Trusted Reviews</h3>
            <p>
              Check ratings and reviews before choosing a business.
            </p>
          </div>

          <div className="feature-card">
            <div>📍</div>
            <h3>Local Results</h3>
            <p>
              Discover businesses that are close and convenient for you.
            </p>
          </div>

          <div className="feature-card">
            <div>🤝</div>
            <h3>Support Local</h3>
            <p>
              Connect with local businesses and support your community.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h2>📍 LocalName</h2>
          <p>Discover. Connect. Support Local.</p>
        </div>

        <p>© 2026 LocalName. Local Business Discovery System.</p>
      </footer>

    </div>
  );
}

export default App;