import React from 'react'
import arrow from './images/arrow.png'
import prj1 from './images/Project1.png'
import prj2 from './images/Project2.png'
import prj3 from './images/Project3.png'

export default function Projects(props) {
  return (
    <div className='Projects' id='Projects'>
      <div className="project-1">
        <div className="head">
          <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>Latest</h1>
          <h2 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>Projects</h2>
        </div>
        <div className="project">
          <hr />
          <div className="project-name">
            <div className="name">
              <h1>todos app</h1>
              <p>TechUsed : HTML,CSS,JS</p>
            </div>
            <div className="link">
              <a href="https://aniketh-todo-app.netlify.app/" target='_blank' rel="noopener noreferrer">
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
          <img src={prj1} alt="" />
        </div>
      </div>
      <div className="project-2">
        <div className="project">
          <hr />
          <div className="project-name">
            <div className="name">
              <h1>Unsplash search</h1>
              <p>TechUsed : RecatJS ,Tailwind CSS, Unsplash Api</p>
            </div>
            <div className="link">
              <a href="https://unsplash-reactapi.netlify.app/" target='_blank' rel="noopener noreferrer">
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
          <img src={prj2} alt="unsplash" />
        </div>
      </div>
      <div className="project-3">
        <div className="project">
          <hr />
          <div className="project-name">
            <div className="name">
              <h1>MoviesDB app</h1>
              <p>TechUsed : ReactJS,Tailwind css,MoviesDB Api</p>
            </div>
            <div className="link">
              <a href="https://moviesdb-appppp.netlify.app/" target='_blank' rel="noreferrer">
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
          <img src={prj3} alt="moviesdb" />
        </div>
        <div className="linktree">
          <h2>Want to view my other projects ?</h2>
          <a href="https://linktr.ee/manikanta653" target='_blank' rel="noreferrer">Other projects</a>
        </div>
      </div>
    </div>
  )
}
