import React from 'react'
import './interviewslide.css'

function InterviewSlide(props) {
  return (
    <div className='slide-container'>
      <div className="sec1">
        <div className="companyname">
          <h1 className='company-name'>
            {props.companyName}
          </h1>
        </div>
        <div className="time">
            <p>{props.time}</p>
        </div>
      </div>
      <div className="sec2">
        <div className="candidate-name">
          <h4>By {props.candidateName}</h4>
        </div>
        <div className="drive-type">
          {props.driveType}
        </div>
      </div>
    </div>
  )
}

export default InterviewSlide