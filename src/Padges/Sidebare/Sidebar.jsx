import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { PiCashRegisterLight } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { TbMessages } from "react-icons/tb";
import { FaRegMoneyBillAlt, FaUserCircle } from "react-icons/fa";
import { RiListSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom"; // ✅ Correct import
import Cartuser from "../Usercars";

export default function Sidebar() {
  const [links] = useState([
    { name: "Dashboard", icon: <MdDashboard />, path: "/" },
    { name: "Food and Drinks", icon: <FaBurger />, path: "/order" },
    { name: "Messages", icon: <TbMessages />, path: "/Messages" },
    { name: "Bills", icon: <FaRegMoneyBillAlt />, path: "/Bills" },
    { name: "Settings", icon: <RiListSettingsFill />, path: "/Settings" }
  ]);

  return (
    <div
      className=" p-3 d-flex flex-column flex-grow-0  "
      id={styles.sidebar}
    >
      {/* Logo Section */}
      <div>
        <div className="col-12 d-flex justify-content-between align-items-center gap-3">
          <PiCashRegisterLight
            className="fs-1 bg-body-secondary rounded-2 text-danger"
            id={styles.icon}
          />
          <p className="fs-3">
            SMART{" "}
            <span className="text-danger" id={styles.logo}>
              POS
            </span>
          </p>
        </div>

        {/* Navigation Links */}
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={` ${styles.link} col-12 d-flex gap-3 align-items-center p-2 nav-link`}
          >
            {link.icon}
            <p className="text-dark fs-5 m-0">{link.name}</p>
          </Link>
        ))}
      </div>

      {/* User Profile Section */}
      <Cartuser />
      
    </div>
  );
}
