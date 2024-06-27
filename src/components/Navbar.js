import { React, useState } from 'react'
import { Link } from 'react-scroll'
import nonActive from './images/nonActive.png'
import Active from './images/Active.png'

export default function Navbar(props) {
  const burger = document.getElementById('navbar');
  document.querySelectorAll("li").forEach(li => li.addEventListener("click", () => {
    burger.classList.remove("active");
    setHamburger(nonActive)
  }))

  const [hamburger, setHamburger] = useState(nonActive);
  const setActiveHamburger = () => {
    if (hamburger === nonActive) {
      burger.classList.add("active")
      setHamburger(Active)
    }else {
      burger.classList.remove("active")
      setHamburger(nonActive)
    }
  }

  const navItems = [
    { text: 'Home', to: 'Home' },
    { text: 'About me', to: 'About' },
    { text: 'Curriculum vitea', to: 'education' },
    { text: 'Projects', to: 'Projects' },
    { text: 'Contact me', to: 'contact' },
  ];

  return (
    <div className='Navbar'>
      <div className="brand-name">
      <Link to="Home" spy={true} smooth={true} duration={1000}><h2>Portfolio</h2></Link>
      </div>
      <nav className='navbar mobile' id='navbar'>
      {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={props.navEnter}
              onMouseLeave={props.navLeave}
            >
              <Link to={item.to} spy={true} smooth={true} duration={1000}>
                {item.text}
              </Link>
            </li>
          ))}
      </nav>
      <div className="hamburger-icon">
        <img src={hamburger} alt="Hamburger" onClick={setActiveHamburger}/>
      </div>
    </div>
  )
}
