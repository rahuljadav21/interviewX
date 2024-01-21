import React, { useState,useEffect } from 'react'
import Select from 'react-select';
import './interviewxp.css'
import InterviewSlide from '../../components/InterviewSlide/InterviewSlide';
import { Link } from 'react-router-dom';
import baseURL from "../../constant.json"

function InterviewXp() {
  
  const [driveState, setDriveState] = useState([]);
  const [yearState, setYearState] = useState([]);
  const [jobTypeState, setJobTypeState] = useState([]);
  const [companiesState, setCompaniesState] = useState([]);
  const [interviewXps, setInterviewXps] = useState([]);
  const [currentXps,setCurrentXps] = useState([]);

  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  const fetchComanies = (interviewXps) => { 
    const companiess = [];
    interviewXps.forEach((i) => {
      if(!companiess.includes(i.companyName)){
        companiess.push(i.companyName);
      }
    })
    let cmpns = [];
    companiess.forEach((c) => {  
      cmpns.push({value: c, label: c})
    })
    return cmpns;
  }
  let url = getCookie('access-token') ? baseURL.baseURL+"interviewXps/all" : baseURL.baseURL+"interviewXps/";
  useEffect(() => {
   fetch(url)
  .then(res => res.json())
  .then(res => {
    setInterviewXps(res.interviewExperiences)
    setCurrentXps(res.interviewExperiences)
  })

  }, [url]);
  let companies =  fetchComanies(interviewXps)
  const drive = [
    { value: 'On Campus', label: 'On Campus' },
    { value: 'Off Campus', label: 'Off Campus' }
  ]

  const year = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
  ]
  const jobType = [
    { value: 'Full Time', label: 'Full-Time' },
    { value: 'Internship', label: 'Internships' }
  ]



  const setYear =(e) => {
    const yrs = [];
    e.forEach((y)=>{
      yrs.push(y.value);
    });
    setYearState(yrs)
  }

  const setJobType =(e) => {
    const jtypes = [];
    e.forEach((j)=>{
      jtypes.push(j.value);
    });
    setJobTypeState(jtypes)
  }

  const setDriveType =(e) => {
    const dtype = [];
    e.forEach(d => {
      dtype.push(d.value);
    });
    setDriveState(dtype);
  }

  const setCmpns = (e) => {
    const cmpns = [];
    e.forEach(c => {
      cmpns.push(c.value);
    });
    setCompaniesState(cmpns);
  }

  const filterHandler = () => {
    
    let currXps = interviewXps;

    if(driveState.length !==0){
      currXps = interviewXps.filter((xp)=>{
        return driveState.includes(xp.driveType);
     })
    }
    
    if(yearState.length !==0){
      currXps = interviewXps.filter((xp)=>{
        return yearState.includes(xp.hiringYear);
      })
    }
    
    if(jobTypeState.length !==0){
      currXps = interviewXps.filter((xp)=>{
        return jobTypeState.includes(xp.jobType);
      })
    }
    if(companiesState.length !==0){
      currXps = interviewXps.filter((xp)=>{
        return companiesState.includes(xp.companyName);
      })
    }
    setCurrentXps(currXps);
  }

  const renderInterviewXps = () => {
    let topInterviewXps = [];
    currentXps.forEach((i) => {
      topInterviewXps.push(
        <Link to={`/interviewXp/${i._id}`}>
        <InterviewSlide key = {i._id} className="intxps" companyName={i.companyName} candidateName={i.candidateName}
          driveType={i.driveType} verified = {i.verified} hiringYear={i.hiringYear} hiringMonth={i.hiringMonth} 
        />
        </Link>
      )
    })
    return topInterviewXps
  }


  return (
    <div>
      <div className="filterbar">

        <div className="other-filter">
          <Select
            placeholder="Based on Companies"
            isMulti
            options={companies}
            className="basic-multi-select filter"
            classNamePrefix="select"
            onChange={setCmpns}
          />
          <Select className='filter' isMulti options={drive}
            placeholder="Drive"
            onChange={setDriveType}
          />
          <Select className='filter' isMulti options={year}
            onChange={setYear}
            placeholder="Year"
          />
          <Select className='filter' isMulti options={jobType}
            onChange={setJobType}
            placeholder="Job Type"
          />
          <div>
            <button className='btn' onClick={filterHandler}>
              Filter
            </button>
          </div>
        </div>

      </div>
      <div className="xps">
        {
          renderInterviewXps()
        }
      </div>

    </div>
  )
}


function InterviewXps() {
  return (
    <InterviewXp/ >
  )
}

export default InterviewXps