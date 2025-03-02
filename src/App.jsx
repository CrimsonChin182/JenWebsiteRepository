import React from "react";
import ReactDOM from "react-dom";
import styles from './App.module.css'; 
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Navbar/Hero/Hero';
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";


function App() {
  return<div> 
      <div className={styles.App}>
        <Navbar />
        <Experience />
        <Hero />
      </div>
    <div className={styles.Contact}>
      <Contact />
    </div>
  </div>;
}
console.log("App has compiled!");
console.log(styles);

export default App;
