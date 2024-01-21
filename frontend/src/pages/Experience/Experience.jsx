import React,{useState,useEffect} from 'react'
import './experience.css'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseURL from "../../constant.json"
function Experience() {
    console.log(baseURL.baseURL)
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
    const {id} = useParams();
    const [interviewXp, setInterviewXp] = useState({});
    useEffect(() => {
        fetch(baseURL.baseURL+"interviewXps/"+id)
       .then(res => res.json())
       .then(res => {

        setInterviewXp(res.interviewExperience)
       })
     
       }, [id]);
    const handleVerify =()=>{
        axios.put(baseURL.baseURL+"interviewXps/"+id+"/verify",{
            verified: true
        },{
            headers: {
                'access-token': getCookie('access-token')
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        window.location.reload();   
    }
    const handleDelete =()=>{
        axios.delete(baseURL.baseURL+"interviewXps/"+id+"/delete",{
            headers: {
                'access-token': getCookie('access-token')
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        window.location.href = "/experiences";
    }
    return (
        <div className='main-container'>
            
            <div className="candidate">
            
                <div className="cad-info">
                <h2 className='titleFont'>Candidate Information </h2>
                    <div>Name : {interviewXp.candidateName}</div>


                    <div>Degree : {interviewXp.degree}</div>


                    <div>Branch : {interviewXp.branch}</div>

                    <div>Batch : {interviewXp.batch}</div>


                </div>
                <div className="contact">
                    <div>
                        <h2>Contact and Profiles</h2>
                    </div>
                    <div>
                        <a href={`mailTo:${interviewXp.email}`} > {interviewXp.email} </a>
                    </div>
                    <div>
                        Mobile : {interviewXp.mobile ? interviewXp.mobile : 'Not Provided'}
                    </div>
                    <div>
                      { interviewXp.linkedIn ? <a href={interviewXp.linkedIn}>LinkedIn</a> : ""}  
                    </div>
                    <div>
                      { interviewXp.github ? <a href={interviewXp.github}>Github</a> : ""}  
                    </div>
                    <div>
                      { interviewXp.leetcode ? <a href={interviewXp.leetcode}>LeetCode</a> : ""}  
                    </div>
                    <div>
                      { interviewXp.codeforces ? <a href={interviewXp.codeforces}>Codeforces</a> : ""}  
                    </div>
                    <div>
                      { interviewXp.codechef ? <a href={interviewXp.codechef}>Codechef</a> : ""}  
                    </div>
                </div>
            </div>
            <h1 className='titleFont'>Interview Experience </h1>
            <div className="interview-xp">
                <div className="basic">
                    <div>Company : {interviewXp.companyName}</div>
                    <div>Role : {interviewXp.offeredRole}</div>
                    <div>Drive : {interviewXp.driveType}</div>
                    <div>Job Type : {interviewXp.jobType}</div>
                    <div>Hiring Year : {interviewXp.hiringYear}</div>
                    <div>Hiring Month : {interviewXp.hiringMonth}</div>
                    <div>Number of Rounds : {interviewXp.rounds}</div>
                    <div>Offered CTC : {interviewXp.offeredCTC}</div>
                    

                   
                </div>
                <div style={{width: 'auto'}}>
                {/* {parse(interviewXp.experience)} */}
                {interviewXp.experience ? parse(interviewXp.experience) : "No Experience Provided"}
                    </div>
            </div>
            {
                getCookie('access-token') ? <div className="btn-container">
                <button className='btn' onClick={handleDelete}>Delete</button>
                {interviewXp.verified ?"" : <button className='btn' onClick={handleVerify} >Verify</button> }
                
                 </div> : ""
            }
            
        </div>
    )
}

export default Experience