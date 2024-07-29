import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

interface SideBarProps {
  currentSection: string;
}

const SideBar: React.FC<SideBarProps> = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLElement>, sectionId: string) => {
    event.preventDefault(); // 기본 동작 방지
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // 클릭 후 메뉴 닫기
  };

  return (
    <nav className="sidebar">
      <div className={`hamburger ${isOpen ? 'active-8' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <Link to="/">
          <img src="/mwc.png" className="mwc" />
        </Link>
        <ul className="menu-items1">
          {['Introduction', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <li
              key={item}
              className={currentSection === `section${index + 1}` ? "active" : ""}
              onClick={(e) => scrollToSection(e, `section${index + 1}`)}
            >
              <a href={`#section${index + 1}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;