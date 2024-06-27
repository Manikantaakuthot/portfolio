import {React,useRef,useState} from 'react'
import left from './images/left.png'
import right from './images/right.png'
import { motion } from 'framer-motion'

export default function Quote(props) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});
    const reset = () => {
        setPosition({ x: 0, y: 0 })
        props.headLeave();
    }
    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }
    const { x, y } = position;
    return (
        <div className='quote'>
            <div className="text-transition">
                <div className="text">
                    <h1>Web Developer</h1>
                    <h1>Competitive Programmer</h1>
                    <h1>Problem Solver</h1>
                    <h1>Bibliophile</h1>
                    <h1>Developer</h1>
                    <h1>WebDesigner</h1>
                </div>
                <div className="text">
                    <h1>Web Developer</h1>
                    <h1>Competitive Programmer</h1>
                    <h1>Problem Solver</h1>
                    <h1>Bibliophile</h1>
                    <h1>Developer</h1>
                    <h1>WebDesigner</h1>
                </div>
            </div>
            <div className="Quote">
                <img src={left} alt="left" id='left' />
                <div className="quote-text">
                    <motion.h1
                        onMouseEnter={props.headEnter}
                        style={{ position: "relative" }}
                        ref={ref}
                        onMouseMove={handleMouse}
                        onMouseLeave={reset}
                        animate={{ x, y }}
                        transition={{ type: "spring", stiffness: 80, damping: 5, mass: 0.2 }}
                    >Code is like humor. When you
                        have to explain it, it's bad.
                    </motion.h1>
                    <p onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}> - Cory House</p>
                </div>
                <img src={right} alt="right" id='right' />
            </div>
        </div>
    )
}
