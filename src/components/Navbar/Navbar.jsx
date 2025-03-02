import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
        <img
            className={styles.jenLogo}
            src={"/jenLogo.jpg"} 
            loading="lazy"
            decoding="asynchronous"
        />
        <div className={styles.menu}>
        
            <ul className={styles.menuItems }>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Products</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
    )
};