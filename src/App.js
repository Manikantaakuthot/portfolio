import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import Education from './components/Education';
import TectStack from './components/TectStack';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    Herotext: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    navText : {
      height : 50,
      width : 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    headText : {
      height : 80,
      width : 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rbg(255,255,255)",
      mixBlendMode: "difference"
    }
  }
  const heroEnter = () => setCursorVariant("Herotext");
  const heroLeave = () => setCursorVariant("default");
  const navEnter = () => setCursorVariant("navText");
  const navLeave = () => setCursorVariant("default");
  const headEnter = () => setCursorVariant("navText");
  const headLeave = () => setCursorVariant("default");
  return (
    <>
      <div id="main">
      <motion.div id="bubble"
       variants={variants}
        animate={cursorVariant}
        style={{backgroundColor : "black"}}
       ></motion.div>
        <Navbar navEnter={navEnter} navLeave={navLeave}/>
        <Home heroEnter={heroEnter} heroLeave ={heroLeave}/>
        <About headEnter={headEnter} headLeave ={headLeave}/>
        <Education headEnter={headEnter} headLeave ={headLeave}/>
        <TectStack headEnter={headEnter} headLeave ={headLeave}/>
        <Projects headEnter={headEnter} headLeave ={headLeave}/>
        <Quote  headEnter={headEnter} headLeave ={headLeave}/>
        <Contact/>
      </div>
      <ToastContainer/>
    </>
  );
}

export default App;
