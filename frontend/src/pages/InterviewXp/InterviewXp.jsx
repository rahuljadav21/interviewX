import React, { useState } from 'react'
import Select from 'react-select';
import './interviewxp.css'
import InterviewSlide from '../../components/InterviewSlide/InterviewSlide';

function InterviewXp() {

  const interviewExperences = [
    {
      id: '1',
      companyName: 'JP Morgan',
      candidateName: 'Rahul Jadav',
      driveType: 'On Campus',
      hiringYear: '2023',
      jobType: 'Internship'
    },
    {
      id: '2',
      companyName: 'Wells Fargo',
      candidateName: 'Drishey Singh',
      driveType: 'On Campus',
      hiringYear: '2023',
      jobType: 'Full Time'
    },
    {
      id: '3',
      companyName: 'Aspect Ratio',
      candidateName: 'Preyansh vora',
      driveType: 'On Campus',
      hiringYear: '2023',
      jobType: 'Full Time'
    },
    {
      id: '4',
      companyName: 'PWS',
      candidateName: 'Karm Patel',
      driveType: 'On Campus',
      hiringYear: '2023',
      jobType: 'Full Time'
    },
    {
      id: '5',
      companyName: 'GE Healthcare',
      candidateName: 'Rahul Jadav',
      driveType: 'On Campus',
      hiringYear: '2023',
      jobType: 'Full Time'
    }
  ]

  const [driveState, setDriveState] = useState([]);
  const [yearState, setYearState] = useState([]);
  const [jobTypeState, setJobTypeState] = useState([]);
  const [companiesState, setCompaniesState] = useState([]);
  const [currentXps,setCurrentXps] = useState(interviewExperences);

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

  const companies = [
    { value: 'Amazon', label: 'Amazon' },
    { value: 'JP Morgan', label: 'JP Morgan' },
    { value: 'Wells Fargo', label: 'Wells Fargo' },
    { value: 'Aspect Ratio', label: 'Aspect Ratio' },
    { value: 'PWS', label: 'PWS' },
    { value: 'GE Healthcare', label: 'GE Healthcare' }
  ]

  

  const setCompanies = (e) => {
    const cmpns = [];
    e.forEach(c => {
      cmpns.push(c.value);
    });
    setCompaniesState(cmpns);
  }

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

  const filterHandler = () => {
    console.log(driveState)
    console.log(yearState)
    console.log(jobTypeState)
    console.log(companiesState)

    let currXps = interviewExperences;

    if(driveState.length !==0){
      currXps = interviewExperences.filter((xp)=>{
        return driveState.includes(xp.driveType);
     })
    }
    
    if(yearState.length !==0){
      currXps = interviewExperences.filter((xp)=>{
        return yearState.includes(xp.hiringYear);
      })
    }
    
    if(jobTypeState.length !==0){
      currXps = interviewExperences.filter((xp)=>{
        return jobTypeState.includes(xp.jobType);
      })
    }
    if(companiesState.length !==0){
      currXps = interviewExperences.filter((xp)=>{
        return companiesState.includes(xp.companyName);
      })
    }
    setCurrentXps(currXps);
  }

  const renderInterviewXps = () => {
    let topInterviewXps = [];
    currentXps.forEach((i) => {
      topInterviewXps.push(
        <InterviewSlide className="intxps" companyName={i.companyName} candidateName={i.candidateName}
          driveType={i.driveType} hiringYear={i.hiringYear}
        />
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
            onChange={setCompanies}
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

export default InterviewXp