import React from "react";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="app">
      {/* Header Section with Logo */}
      <header className="header">
        <img src="logo.png" alt="Business Logo" className="logo" />
        <nav className="nav">
          <button>Home</button>
          <button>Services</button>
          <button>Portfolio</button>
          <button>Contact</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome to Our Car Detailing Service</h1>
        <p>Experience the ultimate luxury car detailing experience.</p>

        {/* Portfolio Section */}
        <div className="portfolio">
          <h2>Our Recent Work</h2>
          <div className="images">
            <img src="car1.jpg" alt="Luxury Car 1" />
            <img src="car2.jpg" alt="Luxury Car 2" />
            <img src="car3.jpg" alt="Luxury Car 3" />
          </div>
        </div>

        {/* Placeholder for Animation */}
        <div className="animation">
          <p>🚗 Pressure washer animation coming soon! 🚿</p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Your Business Name | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
