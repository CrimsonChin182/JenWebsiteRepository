import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
    return ( <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Interested?</h2>
            <p>Please reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={"/emailIcon.png"} alt="Email Icon" loading="lazy"/>
                <a href="mailto:princessincommandcrafts@gmail.com">princessincommandcrafts@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={"/emailIcon.png"} alt="Email Icon" loading="lazy"/>
                <a href="mailto:kriskreations2025@gmail.com">kriskreations2025@gmail.com</a>
            </li>
        </ul>
        
    </footer>
    );
}