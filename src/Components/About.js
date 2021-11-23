import React from 'react'
import "./About.css"
export default function About(props) {

    return (
        <>
             <div id='about' className={`container my-5 container-${props.elementmode} bg-${props.elementmode}`}>
             <h2>About Me</h2>
             <div className={`accordion accordion-${props.elementmode} bg-${props.elementmode}`} id="accordionExample">
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About Myself
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Hey,This is Sushant Phalke Computer Science student at the Government College of Engineering Pune, I'm interested in software development. <br />
                I'm proficient in C++, PYTHON and  Also proficient in WEB DEVELOPMENT <br />
                I have worked on many robotics projects with microcontroller coding like I have used Arduino, raspberry pi <br />
                I also have knowledge about ELECTRONICS and CIRCUIT DESIGNING. <br />
                I write blogs about beginner-friendly programming in C++ <br />
                apart from CS, used to do work on auto irrigation and farm quality check <br />
                </div>
              </div>
            </div>
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Education(current)
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Government College of Engineering And Research,Pune </strong><br /><code> Bachelor of Engineering - BE</code> <br />  COMPUTER ENGINEERING <br /> AVG. FE,SE&TE CGPA = 8.5
                </div>
              </div> 
            </div>
            <div className={`accordion-item accordion-item-${props.elementmode} bg-${props.elementmode}`}>
              <h2 className="accordion-header" id="headingThree">
                <button className={`accordion-button collapsed text-${props.elementmode==="light"?"dark":"light"}   accordion-button-${props.elementmode} bg-${props.elementmode}` }type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Experience
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Robotics Research Lab </strong> Government College of Engineering & Research, Pune<br></br>
                  Sep 2019 – Present (2 yr 0 mos) <code><br></br>
                    
                  In the Robotics research lab, I used to program microcontrollers viz. Arduino, Raspberry pi. I used different sensors like<br></br>
                  1]IMAGE PROCESSING  WITH OPENCV <br></br>
                  2]distance-lidar ,ultrasonic ,proximity ,IR etc.<br></br> 
                  3]line sensors - LSA's, pixy camera<br></br>
                  4]motor drivers <br></br>
                  5] BLDC motors and their drivers<br></br>
                  PROJECTS - <br></br>
                  1] HOLONOMIC DRIVE ROBOT CONTROLLED BY JOYSTICK, XBOX AND PLAYSTATIONS<br></br>
                  2] LINE FOLLOWER ROBOT<br></br>
                  3] PATH TRACER BY CAMERA <br></br>
                  4]PATH GUIDED ROBOT<br></br>
                  5] ROBOT MOVES BY SURROUNDINGS REFERENCE</code><br></br>
                </div>
              </div>
            </div>
          </div>
          </div>


          </> 
    )
}
