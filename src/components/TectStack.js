import React from "react";

export default function TectStack(props) {
  const skills = ["C/C++","Python","Numpy","Pandas","SQL","PowerBi","Excel","HTML","CSS","Git","Github","VS code"]

  return (
    <div className='tectStack' >
      <div className="technical-skills">
        <h1 onMouseEnter={props.headEnter} onMouseLeave={props.headLeave}>Technical skills</h1>
        <div className="skills">
        {skills.map((e,index)=>(
            <span key={index}>{e}</span>
        ))}
        </div>
      </div>
      <div className="coding">
        <a href="https://leetcode.com/akuthotamanikanta653/" target="_blank" rel="noreferrer"><div className="card">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoderaky.com%2Fimages%2Ficons%2Fleetcode.png&f=1&nofb=1&ipt=f531e8a21f3c09343e02a3760a48075bcda4d2036ec32d5024b6735439d578bf&ipo=images" alt="Leetcode logo" />
          <div className="description">
            <h3>Leetcode</h3>
            <p>Solved 50+ questions</p>
          </div>
        </div></a>
        <a href="https://www.hackerrank.com/akuthotamanikan1" rel="noreferrer" target="_blank"><div className="card">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgdm-catalog-fmapi-prod.imgix.net%2FProductLogo%2F8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png%3Fixlib%3Dreact-9.0.3%26ch%3DWidth%252CDPR%26auto%3Dformat%26w%3D4088&f=1&nofb=1&ipt=f697dbc19a00717403620013df9d33efeefcb75f9d03d60034aa467a59c10c30&ipo=images" alt="Hackerrank logo" />
          <div className="description">
            <h3>Hackerrank</h3>
            <p>Achived 5 star in Python</p>
          </div>
        </div></a>
        <a href="https://auth.geeksforgeeks.org/user/akuthotamanikanta653/practice" target="_blank" rel="noreferrer"><div className="card">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fcdn-uploads%2F20190710102234%2Fdownload3.png&f=1&nofb=1&ipt=f2dc667576c92d7587fb0ccd7e772189f4ddb2fd6a10bdd0a94f384584c0b406&ipo=images" alt="geeksforgeeks logo" />
          <div className="description">
            <h3>GeeksforGeeks</h3>
            <p>Institute rank 67</p>
          </div>
        </div></a>
      </div>
    </div>
  )
}
