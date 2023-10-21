import React from 'react'
import './experience.css'
import parse from 'html-react-parser';
function Experience() {

    const interviewXp = {
        candidateName: 'Karm Patel',
        degree: 'B.Tech',
        rollNum: 'U20EC073',
        branch: 'Electronics and Communication',
        profilePicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsrcwap.com%2Fblank-profile-picture-hd-dp-images-photo-default-profile&psig=AOvVaw1csKsdJPqNMkC9fPEZ_STA&ust=1697888947271000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiOgK_HhIIDFQAAAAAdAAAAABAJ',
        linkedIn: 'https://www.linkedin.com/in/karmkumar-patel/',
        mobile: '7984197789',
        email: 'karmpatel@gmail.com',
        companyName: 'PWC',
        role: 'Technology Consulting',
        hiringMonth: 'October',
        hiringYear: '2023',
        driveType: 'On Campus',
        jobType: 'Full Time',
        rounds: '4',
        ctc: '7 base + 1 variable = 8 total',
        difficulty: '3',
        experience: `<p style="text-align: left;"><strong style="margin: 16px 0px; font-size: 24px;">Round 1: Online Assessment</strong></p><ul><li style="text-align: justify;"> Aptitude questions (basic math and logic)</li><li style="text-align: justify;"> Graphical interpretation questions (requires careful analysis)</li><li style="text-align: justify;"> Meeting scheduling questions (requires knowledge of calendar scheduling algorithms)</li></ul><p style="text-align: left;"><strong style="font-size: 24px;"><br>Round 2: Technical Round</strong><br>The technical round was focused on my resume. The interviewer asked me about the technologies I had used in my projects, why I had chosen those technologies and the alternatives. For example, they asked me why I chose the MERN stack for my project, why I decided on MongoDB, what other options were available, and why I didn't prefer those. I was able to answer all of the questions confidently. The interviewer also asked me some general questions about my learning style and ability to adapt to new environments. I was able to answer these questions as well.</p><p style="text-align: left;"><span style="font-size: 24px;"><strong><br>Round 3: Partner Round</strong></span><br>The partner round was more challenging than the previous two rounds. The interviewer asked<br>me two puzzles:</p><ol><li style="text-align: justify;"> How can you cut a cake into 8 pieces with 3 cuts?</li><li style="text-align: justify;">Three ants are at the vertices of an equilateral triangle. They start walking towards each other at the same speed. What is the percentage of the time that they will never collide? I solved both puzzles correctly, and then he asked two behavioural questions.</li><li style="text-align: justify;">What if you were a team leader? How can you get the max out of your team?</li><li style="text-align: justify;">How do you satisfy your client?<br>The interviewer also asked me about my involvement in clubs and extracurricular activities. I<br>was able to answer these questions as well.</li></ol><p style="text-align: left;"><span style="font-size: 24px;"><strong><br>Round 4: HR Round</strong></span><br>The HR round was mostly a formality. The interviewer confirmed my legal name, job preference, and other details. They also asked me if I had any questions for them. I had a few questions, and the interviewer could answer them all. Overall, the interview experience was challenging but rewarding. I could answer all the questions confidently and felt good about my performance. I am happy to report that I was selected for the position!<br></p>`

    }

    return (
        <div className='main-container'>
            <h2 className='titleFont'>Candidate Information </h2>
            <div className="candidate">
                <div className="cad-info">

                    <div>Name : {interviewXp.candidateName}</div>


                    <div>Degree : {interviewXp.degree}</div>


                    <div>Roll Number : {interviewXp.rollNum}</div>


                    <div>Branch : {interviewXp.branch}</div>


                </div>
                <div className="contact">
                    <div>
                        <h3>Contact Info</h3>
                    </div>
                    <div>
                        <a href={interviewXp.linkedIn}>LinkedIn</a>
                    </div>
                    <div>
                        Email : <a href={`mailTo:${interviewXp.email}`} > {interviewXp.email} </a>
                    </div>

                    <div>
                        Mobile :  {interviewXp.mobile}
                    </div>
                </div>
            </div>
            <h2 className='titleFont'>Interview Experience </h2>
            <div className="interview-xp">
                <div className="basic">
                    <div>Company : {interviewXp.companyName}</div>
                    <div>Role : {interviewXp.role}</div>
                    <div>Drive : {interviewXp.driveType}</div>
                    <div>Job Type : {interviewXp.jobType}</div>
                    <div>Hiring Year : {interviewXp.hiringYear}</div>
                    <div>Hiring Month : {interviewXp.hiringMonth}</div>
                    <div>Number of Rounds : {interviewXp.rounds}</div>
                    <div>Offered CTC : {interviewXp.ctc}</div>
                    

                   
                </div>
                <div style={{width: '80vw'}}>
                {parse(interviewXp.experience)}
                    </div>
            </div>
        </div>
    )
}

export default Experience