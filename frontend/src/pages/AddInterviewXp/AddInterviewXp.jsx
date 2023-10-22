import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './addinterviewxp.css'

import parse from 'html-react-parser';
// import 'bootstrap/dist/css/bootstrap.min.css';

function AddInterviewXp() {


    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [formData, setFormData] = useState({
        candidateName: '',
        email: '',
        linkedIn: '',
        mobile: '',
        degree: 'Select Degree',
        branch: 'Select Branch',
        hiringYear: '',
        hiringMonth: 'Select Month',
        jobType: '',
        driveType: '',
        companyName: '',
        offeredRole: '',
        rounds: '',
        offeredCTC: '',
        difficulty: 0,
        experience: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleRangeChange = (e) => {
        setFormData({ ...formData, difficulty: (e.target.value) });
      };

      const handleSubmit =()=> {
        console.log(formData);
      }
    

    return (
        <div className='info-form'>
            <div className="form-group">
                <label htmlFor="candidateName">Candidate Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="candidateName"
                    name="candidateName"
                    value={formData.candidateName}
                    onChange={handleInputChange}
                    placeholder="candidateName"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ex. johdou@gmail.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="linkedIn">LinkedIn</label>
                <input
                    type="text"
                    className="form-control"
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="mobile"
                />
            </div>
            <div className="form-group">
                <select
                    className="form-select"
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                >
                    <option>Select Degree</option>
                    <option value="btech">B.Tech</option>
                    <option value="msc">M.Sc</option>
                    <option value="mtech">M.Tech</option>
                </select>
            </div>
            <div className="form-group">
                <select
                    className="form-select"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                >
                    <option>Select Branch</option>
                    <option value="cs">Computer Science and Engineering</option>
                    <option value="ece">Electronics and Communication Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="che">Chemical Engineering</option>
                    <option value="ce">Civil Engineering</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="hiringYear">Year of Hiring </label>
                <input
                    type="number"
                    className="form-control"
                    id="hiringYear"
                    name="hiringYear"
                    value={formData.hiringYear}
                    onChange={handleInputChange}
                    placeholder="ex. 2024"
                />
            </div>
            <div className="form-group">
                <label htmlFor="hiringMonth">Month of Hiring </label>
                <select
                    className="form-select"
                    id="hiringMonth"
                    name="hiringMonth"
                    value={formData.hiringMonth}
                    onChange={handleInputChange}
                >
                    <option value="null">Select Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="companyName">Company Name </label>
                <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="ex. Amazon"
                />
            </div>
            <div className="form-group">
                <label htmlFor="offeredRole">Offered Role </label>
                <input
                    type="text"
                    className="form-control"
                    id="offeredRole"
                    name="offeredRole"
                    value={formData.offeredRole}
                    onChange={handleInputChange}
                    placeholder="ex. Software Developer Engineer"
                />
            </div>
            <div className="form-group">
                <select
                    className="form-select"
                    id="jobType"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleInputChange}
                >
                    <option>Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    
                </select>
            </div>
            <div className="form-group">
                <select
                    className="form-select"
                    id="driveType"
                    name="driveType"
                    value={formData.driveType}
                    onChange={handleInputChange}
                >
                    <option>Select Degree</option>
                    <option value="On Campus">On Campus</option>
                    <option value="Off Campus">Off Campus</option>
                    
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rounds">Number of Rounds </label>
                <input
                    type="number"
                    className="form-control"
                    id="rounds"
                    name="rounds"
                    value={formData.rounds}
                    onChange={handleInputChange}
                    placeholder="ex. 4 rounds"
                />
            </div>
            <div className="form-group">
                <label htmlFor="offeredCTC">Offered CTC </label>
                <input
                    type="text"
                    className="form-control"
                    id="offeredCTC"
                    name="offeredCTC"
                    value={formData.offeredCTC}
                    onChange={handleInputChange}
                    placeholder="give breakdown if possible ex. 13 base + 2 joining bonus = total 15."
                />
            </div>
            <div className="form-group">
                <label htmlFor="difficulty">Difficulty </label>
                <input
                    type="range"
                    className="form-range"
                    id="difficulty"
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleRangeChange}
                    max={5}
                    min={1}
                />
                <span>{formData.difficulty}</span>
            </div>

            <div className="experience">

                <h2>Add Interview Experience</h2>
                <JoditEditor
                    ref={editor}
                    value={formData.experience}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => {setContent(newContent); setFormData({ ...formData, experience: content })  }} // preferred to use only this option to update the content for performance reasons
                />
                
            </div>
            <button onClick={handleSubmit} className='btn'>Submit</button>
        </div>
    )
}

export default AddInterviewXp