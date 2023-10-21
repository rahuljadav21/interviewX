import React from 'react'
import './home.css'
import InfoImg from '../../resources/infoImg.png'
import { Carousel } from '@trendyol-js/react-carousel';
import CompanySlide from '../../components/CompanySlide/CompanySlide';
import larrow from "../../resources/lefterrow.png"
import rarrow from "../../resources/rightErrow.png"
import InterviewSlide from '../../components/InterviewSlide/InterviewSlide';

function Home() {

    const compnies = [{
        name :  "amazon",
        logo : "https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg"
      },
      {
        name :  "JP Morgan and chase",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/1920px-J_P_Morgan_Logo_2008_1.svg.png"
      },
      {
        name :  "DE Shaw",
        logo : "https://upload.wikimedia.org/wikipedia/commons/6/60/D._E._Shaw_%26_Co._logo.png"
      },
      {
        name :  "Microsoft",
        logo : "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
      },
      {
        name :  "Microsoft",
        logo : "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
      },
      {
        name :  "Microsoft",
        logo : "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
      },
      {
        name :  "JP Morgan and chase",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/1920px-J_P_Morgan_Logo_2008_1.svg.png"
      },
      {
        name :  "DE Shaw",
        logo : "https://upload.wikimedia.org/wikipedia/commons/6/60/D._E._Shaw_%26_Co._logo.png"
      },
      {
        name :  "Microsoft",
        logo : "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
      }
    ]

    const interviewExperences = [
        {
            id:'1',
            companyName: 'JP Morgan',
            candidateName: 'Rahul Jadav',
            driveType: 'On Campus',
            time: 'July 2023'
        },
        {
            id:'2',
            companyName: 'Wells Fargo',
            candidateName: 'Drishey Singh',
            driveType: 'On Campus',
            time: 'July 2023'
        },
        {
            id:'3',
            companyName: 'Aspect Ratio',
            candidateName: 'Preyansh vora',
            driveType: 'On Campus',
            time: 'August 2023'
        },
        {
            id:'4',
            companyName: 'PWS',
            candidateName: 'Karm Patel',
            driveType: 'On Campus',
            time: 'September 2023'
        },
        {
            id:'5',
            companyName: 'GE Healthcare',
            candidateName: 'Rahul Jadav',
            driveType: 'On Campus',
            time: 'August 2023'
        }
    ]
    
    const renderCompanies = () => {
        let topCompanies = [];
        compnies.forEach((c)=>{
            topCompanies.push(
                <CompanySlide name = {c.name} logo = {c.logo} />
            )
        })
        return topCompanies;
    }

    const renderInterviewXps = () => {
        let topInterviewXps = [];
        interviewExperences.forEach((i)=>{
            topInterviewXps.push(
                <InterviewSlide companyName={i.companyName} candidateName={i.candidateName}
                driveType = {i.driveType} time = {i.time}
                />
            )
        })
        return topInterviewXps
    }

    return (
        <div className='main-container'>
            <div className="info">
                <div className="info-text">
                    <h1 className="info">
                        Unlock interview success with Interview X - Your gateway to real-world interview experiences and career insights.
                    </h1>
                </div>
                <div className="info-image">
                    <img src={InfoImg} alt='info logo' />
                </div>
            </div>
            <div className="companies-slider">
                <h2 className='top-companies'>
                    Top Companies
                </h2>
                <Carousel rightArrow={<img style={{height:"3vh"}} src={rarrow} alt='right errow'></img>} leftArrow ={<img style={{height:"3vh"}} src={larrow} alt='left arrow'></img>} swiping={true} show={6} slide={2} transition={0.5}>
                    {
                        renderCompanies()
                    }
                </Carousel>
            </div>
            <div className="interviewXp-slider">
            <h2 className='top-companies'>
                    Top Interview Experiences
                </h2>
                <Carousel rightArrow={<img style={{height:"3vh"}} src={rarrow} alt='right errow'></img>} leftArrow ={<img style={{height:"3vh"}} src={larrow} alt='left arrow'></img>}  swiping={true} show={3.5} slide={2} transition={0.5}>
                    {
                        renderInterviewXps()
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Home