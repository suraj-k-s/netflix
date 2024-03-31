import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <div className="header__menu-icon" onClick={toggleDropdown}>
                {showDropdown ? <CloseIcon /> : <MoreVertIcon />}
            </div>
            <div className={showDropdown ?" header__dropdown":"header__nav"}>
                <NavLink
                    to={`/Home`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLink"
                                : "header__navLink"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={`/car`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLink"
                                : "header__navLink"
                    }
                >
                    TV Shows
                </NavLink>
                <NavLink
                    to={`/car`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLink"
                                : "header__navLink"
                    }
                >
                    Movies
                </NavLink>
                <NavLink
                    to={`/car`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLink"
                                : "header__navLink"
                    }
                >
                    New & Popular
                </NavLink>
                <NavLink
                    to={`/car`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLinkPeding"
                                : "header__navLink"
                    }
                >
                    My List
                </NavLink>
                <NavLink
                    to={`/car`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "header__navLinkActive"
                            : isPending
                                ? "header__navLink"
                                : "header__navLink"
                    }
                >
                    Browse by Languages
                </NavLink>

            </div>
            <div className="header__search">
                {/* Add search bar here */}
            </div>
        </div>
    );
};

export default Header;
