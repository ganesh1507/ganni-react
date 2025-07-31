import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaRegSun } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/logo.svg';

const toggleTheme = () => {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
};

export default function Header() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Work', to: '/coming-soon' },
    { label: 'About', to: '/coming-soon' },
    { label: 'Blog', to: '/coming-soon' },
    { label: 'Contact', to: '/coming-soon' },
    { label: 'More', to: '/coming-soon' },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <Logo className="logo-svg" />
      </div>

      <nav className="nav">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={({ isActive }) => (isActive && item.label === 'Home' ? 'active' : '')}
          >
            {item.label}
            {i !== navItems.length - 1 && <span className="dot">•</span>}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <button className="gear-button" onClick={toggleTheme}>
          <FaRegSun />
        </button>
        <a href="#" className="buy-button">CONTACT NOW!</a>
      </div>
    </header>
  );
}
