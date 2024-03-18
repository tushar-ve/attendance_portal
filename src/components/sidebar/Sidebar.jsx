import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import './sidebar.css'
import LogoSVG from "../../images/MainLogo.svg"
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    const handleAttendanceClick = () => {
        navigate("/webcam");
    };

    const handleLogout = () => {
        // Clear tokens from localStorage
        localStorage.removeItem('tokens');
        localStorage.removeItem('username');
        // Navigate user to Login page
        navigate("/login");
    };

    useEffect(() => {
        // Retrieve username from localStorage
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    return (
        <section className={`sidebar gradient-bg  ${expanded ? "w-48" : "w-16"} h-screen flex flex-col items-center justify-between overflow-hidden`}>
            <div className="flex flex-col items-center">
                <div className="flex justify-between items-center w-full">
                    <img
                        className={`sidebar__logo p-1 w-full ${expanded ? "" : "hidden"}`}
                        src={LogoSVG}
                        alt="RegisterLogo"
                    />
                    <div className="flex flex-col items-center">
                        <span className="text-white mt-2">Welcome {username}</span>
                        <button onClick={toggleSidebar} className="menu-button p-2 cursor-pointer">
                            <FontAwesomeIcon icon={faSliders} />
                        </button>
                    </div>
                </div>
                <hr className={`sidebar__divider ${expanded ? "" : "hidden"}`} />
                <ul className={`sidebar__menu flex flex-col w-full gap-4 ${expanded ? "" : "hidden"}`}>
                    <li className="sidebar__menu-item p-2 hover:bg-[#ffffff] cursor-pointer">
                        <DashboardIcon className="sidebar__icon" />
                        <span className="sidebar__text">Dashboard</span>
                    </li>
                    <li className="sidebar__menu-item p-2 hover:bg-[#ffffff] cursor-pointer">
                        <PersonOutlineIcon className="sidebar__icon" />
                        <span className="sidebar__text">Employees</span>
                    </li>
                    <li className="sidebar__menu-item p-2 hover:bg-[#ffffff] cursor-pointer">
                        <LocalShippingIcon className="sidebar__icon" />
                        <span className="sidebar__text">Attendance</span>
                    </li>
                    <li className="sidebar__menu-item p-2 hover:bg-[#ffffff] cursor-pointer">
                        <CreditCardIcon className="sidebar__icon" />
                        <span className="sidebar__text">Leaves</span>
                    </li>
                    <li className="sidebar__menu-item p-2 hover:bg-[#ffffff] cursor-pointer" onClick={handleAttendanceClick}>
                        <StoreIcon className="sidebar__icon" />
                        <span className="sidebar__text">Mark your attendance</span>
                    </li>

                </ul>
            </div>
            <button
                onClick={handleLogout}
                className="sidebar__logout w-full h-12 rounded-md hover:bg-[#ffffff] hover:text-red-500 text-white font-semibold flex items-center justify-center"
            >
                <ExitToAppIcon className="sidebar__icon" />
                <span className="sidebar__text ">Logout</span>
            </button>
        </section>
    );
};

export default Sidebar;
