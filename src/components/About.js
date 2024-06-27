import { Bounce, toast } from "react-toastify";
import resume from "./images/Busavale Dathrao.pdf";

export default function About(props) {
  return (
    <div className="About" id="About">
      <div className="about_info">
        <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>
          About me
        </h1>
        <p>
          A dedicated student currently pursuing a degree in Computer Science
          and Engineering (CSE). My academic journey has equipped me with a
          solid foundation in computational theories, programming, and data
          management. With a passion for data science and data analytics, I have
          focused my studies and projects on extracting meaningful insights from
          complex datasets
        </p>
        <p>
          I am passionate about harnessing the power of data to uncover
          insights, solve complex problems, and drive informed decision-making.
          My academic journey has equipped me with a solid foundation in
          statistical analysis, machine learning, data visualization, and
          programming languages such as Python and R. I thrive on analyzing
          large datasets, identifying trends, and transforming raw data into
          actionable intelligence. With a keen eye for detail and a commitment
          to continuous learning, I am eager to apply my skills in real-world
          scenarios, contributing to innovative projects and advancing my
          expertise in the dynamic field of data science.
        </p>
        <div className="about-btn">
          <a
            href={resume}
            download="Aniketh-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              toast("Resume downloaded successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              })
            }
          >
            <button id="resume-btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
