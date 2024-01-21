import React from 'react'
import './companyslide.css'
function CompanySlide(props) {

  return (
    <div className='container'>
      <div >
        <img className="com-logo" src={props.logo} alt="" />
      </div>
      <div >
        <h4 className="name">{props.name}</h4>
      </div>
    </div>
  )
}

export default CompanySlide