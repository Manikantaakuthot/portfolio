import React from "react"

export default function Education(props) {
    return (
            <div className='education-container' id='education'>
                <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>Education</h1>
                <div className="education">
                    <div className="left">
                        <div className="college box">
                            <div className="college-des box">
                                <p>Completed my Intermediate in
                                    Sri Gayathri Junior college,Kollapur with 60% in 2021</p>
                            </div>
                            <div className="line">
                                <hr id='vertical-line' />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="right">
                        <div className="school tag">
                            <div className="line">
                                <hr id='vertical-line' />
                            </div>
                            <div className="school-des box">
                                <p>Completed my schooling in
                                    St.Joseph High School,kollapur with 8.8 GPA in 2019</p>
                            </div>
                        </div>
                        <div className="Engineering tag">
                            <div className="line">
                                <hr id='vertical-line' />
                            </div>
                            <div className="engineering-des box">
                                <p>Pursing my Computer science degree
                                    in Guru Nanank Institutions Technical
                                    Campus,Hyderabad with 7.5 CGPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
