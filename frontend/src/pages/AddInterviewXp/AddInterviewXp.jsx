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

    return (
        <div className='info-form'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="candidateName">Candidate Name :</InputGroup.Text>
                <Form.Control
                    placeholder="candidateName"
                    aria-label="candidateName"
                    aria-describedby="candidateName"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="email">Email :</InputGroup.Text>
                <Form.Control
                    placeholder="ex. johdou@gmail.com"
                    aria-label="email"
                    aria-describedby="email"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="linkedIn">LinkedIn :</InputGroup.Text>
                <Form.Control

                    aria-label="linkedIn"
                    aria-describedby="linkedIn"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="mobile">Mobile :</InputGroup.Text>
                <Form.Control
                    placeholder="mobile"
                    aria-label="mobile"
                    aria-describedby="mobile"
                    type='Number'
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <Form.Select aria-label="Select Degree">
                    <option>Select Degree</option>
                    <option value="btech">B.Tech</option>
                    <option value="msc">M.Sc</option>
                    <option value="mtech">M.Tech</option>
                </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Select aria-label="Select Degree">
                    <option>Select Branch</option>
                    <option value="cs">Computer Science and Engineering</option>
                    <option value="ece">Electronics and Communication Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="me">Mechanical  Engineering</option>
                    <option value="che">Chemical  Engineering</option>
                    <option value="ce">Civil  Engineering</option>
                </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="hiringYear">Year of Hiring :</InputGroup.Text>
                <Form.Control
                    placeholder="ex. 2024"
                    aria-label="hiringYear"
                    aria-describedby="hiringYear"
                    type='Number'
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="hiringMonth">Month of Hiring :</InputGroup.Text>
                <Form.Select aria-label="Select Month">
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
                </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="comapnyName">Company Name :</InputGroup.Text>
                <Form.Control
                    placeholder="ex. Amazon"
                    aria-label="linkedIn"
                    aria-describedby="linkedIn"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="role"> Offered Role:</InputGroup.Text>
                <Form.Control
                    placeholder="ex. Software Developer Engineer"
                    aria-label="role"
                    aria-describedby="role"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="rounds">Number of Rounds :</InputGroup.Text>
                <Form.Control
                    placeholder="ex. 4 rounds"
                    aria-label="rounds"
                    aria-describedby="rounds"
                    type='Number'
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="role"> Offered CTC :</InputGroup.Text>
                <Form.Control
                    placeholder="give breakdown if possible ex. 13 base + 2 joining bonus = total 15."
                    aria-label="role"
                    aria-describedby="role"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="difficulty">Defficulty :</InputGroup.Text>
                <Form.Range onChange={e => console.log(e.target.value)} />
            </InputGroup>

            <div className="experience">

                <h2>Add Interview Experience</h2>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
                <button >Submit Interview Experience</button>
                <pre className="content">
                    {parse(content)}
                </pre>

            </div>







        </div>
    )
}

export default AddInterviewXp