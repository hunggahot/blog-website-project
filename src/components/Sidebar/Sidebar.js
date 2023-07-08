import React from "react";
import "./Sidebar.scss";
import { GiPapers } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useSidebarContext();

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={() => closeSideBar()}
      >
        <FaTimes size={24} className="text-white" />
      </button>
      <Link className="navbar-brand text-white flex align-center fs-26" to="/">
        <span className="navbar-brand-icon">
          <GiPapers />
        </span>
        <span className="navbar-brand-txt font-rubik fw-5">Blog</span>
      </Link>
      <ul className="sidebar-nav font-rubik my-5">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white fw-4 fs-18">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white fw-4 fs-18">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white fw-4 fs-18">
            About
          </Link>
        </li>
      </ul>

      <div className="sidebar-blocks my-5">
        <div className="sidebar-block">
          <h3 className="font-rubik text-white">Address</h3>
          <p className="text-white">123 Nguyen Van Cu, Quan 1, Tp.HCM</p>
        </div>
        <div className="sidebar-block">
          <h3 className="font-rubik text-white">Phone</h3>
          <p className="text-white">036 112 2384</p>
        </div>
        <div className="sidebar-block">
          <h3 className="font-rubik text-white">Email</h3>
          <p className="text-white">123@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
