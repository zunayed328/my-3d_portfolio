import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import logo from "../../assets/tech/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* Navbar Styles */}
      <style>
        {`
          .nav-link-active {
            background-color: #915EFF;
            border-radius: 9999px;
            padding: 8px 20px;
            color: white;
            font-weight: 500;
            font-size: 16px;
            transition: all 0.3s ease;
          }
          .nav-link-inactive {
            padding: 8px 16px;
            color: #aaa6c3;
            font-weight: 500;
            font-size: 16px;
            transition: all 0.3s ease;
          }
          .nav-link-inactive:hover {
            color: white;
          }
          .mobile-nav-active {
            background-color: #915EFF;
            border-radius: 9999px;
            padding: 8px 16px;
            color: white;
            font-weight: 500;
            font-size: 15px;
            display: block;
            text-align: center;
          }
          .mobile-nav-inactive {
            padding: 8px 16px;
            color: #aaa6c3;
            font-weight: 500;
            font-size: 15px;
            display: block;
            text-align: center;
            transition: all 0.3s ease;
          }
          .mobile-nav-inactive:hover {
            color: white;
          }
          .mobile-dropdown {
            background-color: #151030;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 24px;
          }
          .dropdown-container {
            position: relative;
          }
          .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
          }
          .dropdown-arrow {
            transition: transform 0.3s ease;
          }
          .dropdown-arrow.open {
            transform: rotate(180deg);
          }
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 8px;
            background: linear-gradient(145deg, rgba(16, 13, 37, 0.98) 0%, rgba(21, 16, 48, 0.99) 100%);
            border: 1px solid rgba(145, 94, 255, 0.3);
            border-radius: 12px;
            padding: 8px;
            min-width: 180px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(145, 94, 255, 0.15);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 50;
          }
          .dropdown-menu::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid rgba(145, 94, 255, 0.3);
          }
          .dropdown-container:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
          }
          .dropdown-item {
            display: block;
            padding: 10px 16px;
            color: #aaa6c3;
            font-size: 14px;
            font-weight: 500;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
          }
          .dropdown-item:hover {
            background: rgba(145, 94, 255, 0.2);
            color: white;
          }
          .dropdown-item-active {
            background: rgba(145, 94, 255, 0.3);
            color: #915EFF;
          }
          .mobile-submenu {
            margin-top: 8px;
            padding-left: 16px;
            border-left: 2px solid rgba(145, 94, 255, 0.3);
          }
          .mobile-submenu-item {
            padding: 8px 12px;
            color: #aaa6c3;
            font-size: 14px;
            display: block;
            text-align: left;
            transition: all 0.2s ease;
          }
          .mobile-submenu-item:hover {
            color: white;
          }
          .mobile-submenu-item-active {
            color: #915EFF;
          }
        `}
      </style>

      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "16px 24px",
          position: "fixed",
          top: 0,
          zIndex: 20,
          backgroundColor: "#050816",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
            onClick={() => window.scrollTo(0, 0)}
            aria-label="Home"
          >
            <img
              src={logo}
              alt="Zunayed logo"
              style={{
                width: 36,
                height: 36,
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                margin: 0,
              }}
            >
              ZUNAYED &nbsp;
              {isDesktop && (
                <span style={{ display: "block" }}>| AI ENGINEER</span>
              )}
            </p>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  {nav.dropdown ? (
                    // Dropdown menu item
                    <div className="dropdown-container">
                      <div className="dropdown-trigger nav-link-inactive">
                        {nav.title}
                        <svg
                          className="dropdown-arrow"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                      <div className="dropdown-menu">
                        {nav.dropdown.map((item) => (
                          <NavLink
                            key={item.id}
                            to={item.id}
                            className={({ isActive }) =>
                              `dropdown-item ${isActive ? 'dropdown-item-active' : ''}`
                            }
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {item.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular nav item
                    <NavLink
                      to={nav.id}
                      className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link-inactive"
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {nav.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            /* Mobile Hamburger Menu */
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                onClick={() => setToggle(!toggle)}
              />

              {/* Mobile Dropdown */}
              {toggle && (
                <div
                  className="mobile-dropdown"
                  style={{
                    position: "absolute",
                    top: 64,
                    right: 16,
                    minWidth: 200,
                    zIndex: 10,
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      width: "100%",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {navLinks.map((nav) => (
                      <li key={nav.id}>
                        {nav.dropdown ? (
                          // Mobile dropdown
                          <div>
                            <div
                              className="mobile-nav-inactive"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                                cursor: "pointer",
                              }}
                              onClick={() => toggleMobileDropdown(nav.id)}
                            >
                              {nav.title}
                              <svg
                                className={`dropdown-arrow ${mobileDropdowns[nav.id] ? 'open' : ''}`}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                              >
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                              </svg>
                            </div>
                            {mobileDropdowns[nav.id] && (
                              <div className="mobile-submenu">
                                {nav.dropdown.map((item) => (
                                  <NavLink
                                    key={item.id}
                                    to={item.id}
                                    className={({ isActive }) =>
                                      `mobile-submenu-item ${isActive ? 'mobile-submenu-item-active' : ''}`
                                    }
                                    onClick={() => {
                                      setToggle(false);
                                      window.scrollTo(0, 0);
                                    }}
                                  >
                                    {item.title}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Regular mobile nav item
                          <NavLink
                            to={nav.id}
                            className={({ isActive }) =>
                              isActive
                                ? "mobile-nav-active"
                                : "mobile-nav-inactive"
                            }
                            onClick={() => {
                              setToggle(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            {nav.title}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;