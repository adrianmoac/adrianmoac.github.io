import { useState } from "react";
import { FaGithub, FaBars } from "react-icons/fa";

type Props = {};

const Topbar = (_: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    window.location.href = `#${id}`;
    setMenuOpen(false);
  };

  return (
    <div className="topbar">
      <FaGithub
        className="github-icon animate-on-load"
        onClick={() => window.open("https://github.com/adrianmoac", "_blank")}
      />

      {/* Desktop */}
      <div className="nav-links animate-on-load">
        {["WhoAmI", "Knowledge", "Experience", "Projects"].map((item) => (
          <h4
            key={item}
            className="nav-item"
            onClick={() => handleNavClick(item)}
          >
            {item.replace(/([A-Z])/g, " $1").trim()}
          </h4>
        ))}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {["WhoAmI", "Knowledge", "Experience", "Projects"].map((item) => (
            <h4
              key={item}
              className="nav-item"
              onClick={() => handleNavClick(item)}
            >
              {item.replace(/([A-Z])/g, " $1").trim()}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topbar;
