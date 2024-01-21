import React from 'react'
import './home.css'
import InfoImg from '../../resources/infoImg.png'
import { Carousel } from '@trendyol-js/react-carousel';
import CompanySlide from '../../components/CompanySlide/CompanySlide';
import larrow from "../../resources/lefterrow.png"
import rarrow from "../../resources/rightErrow.png"

function Home() {
    let screenSize = window.screen.width;
    const compnies = [{
        name :  "VISA",
        logo : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT"
      },
      
      {
        name :  "Wells Fargo",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiIKob-dEwvFz5_JE2QYKzkz7jdmc3O-YZQdRsGT8fuYl5dP3"
      },
      {
        name :  "Texas Instruments",
        logo : "https://upload.wikimedia.org/wikipedia/commons/b/ba/TexasInstruments-Logo.svg"
      },
      {
        name :  "Meesho",
        logo : "https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png"
      },
      {
        name :  "JP Morgan and chase",
        logo : "https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_200_200/0/1656681489601/jpmorganchase_logo?e=1712188800&v=beta&t=YfYFi1ZGFlJ2QbI2Bz0uqYOQ40Bkgvx5_qGUHpjSD-s"
      },
      {
        name :  "GE Healthcare",
        logo : "https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg"
      },
      {
        name :  "Oracle",
        logo : "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
      },
      {
        name :  "Barclays",
        logo : "https://1000logos.net/wp-content/uploads/2016/10/Barclays-Logo.png"
      },
      {
        name :  "Mastercard",
        logo : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
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

    // const renderInterviewXps = () => {
    //     let topInterviewXps = [];
    //     interviewExperences.forEach((i)=>{
    //         topInterviewXps.push(
    //             <InterviewSlide companyName={i.companyName} candidateName={i.candidateName}
    //             driveType = {i.driveType} time = {i.time} hiringMonth = {i.hiringMonth} hiringYear = {i.hiringYear}
    //             />
    //         )
    //     })
    //     return topInterviewXps
    // }

    return (
        <div className='main-container'>
            <div className="info">
                <div className="info-text">
                    <h1 className="infotext">
                        Unlock interview success with Interview X - Your gateway to real-world interview experiences and career insights.
                    </h1>
                </div>
                <div >
                    <img className="info-image" src={InfoImg} alt='info logo' />
                </div>
            </div>
            
            {/* <div className="interviewXp-slider">
            <h2 className='top-companies'>
                    Top Interview Experiences
                </h2>
                <Carousel autoSwipe={true} rightArrow={<img style={{height:"3vh"}} src={rarrow} alt='right errow'></img>} leftArrow ={<img style={{height:"3vh"}} src={larrow} alt='left arrow'></img>}  swiping={true} show={ (screenSize < 600) ? 1.3 : 4 } slide={1} transition={0.5}>
                    {
                        renderInterviewXps()
                    }
                </Carousel>
            </div> */}
            <div className="stats">
                <div className='nums'>
                    <div className='numXpsText'>
                        <h1 className='numXpsText'>10+</h1>
                        <h2 className='numXpsText' style={{color:"#279EFF"}}>Interview Experiences</h2>
                    </div>
                    <div className='numCompniesText'>
                        <h1 className='numCompniesText'>5+</h1>
                        <h2 className='numCompniesText' style={{color:"#279EFF"}}>Companies</h2>
                    </div>
                </div>

                <div>
                    <h4>Share your interview experience to help others out.</h4>
                    <div className='share-btn'><a href="/addxp">Share Here</a></div>
                </div>
            </div>
            <div className="companies-slider">
                <h2 className='top-companies'>
                    Companies
                </h2>
                <Carousel rightArrow={<img style={{height:"3vh"}} src={rarrow} alt='right errow'></img>} leftArrow ={<img style={{height:"3vh"}} src={larrow} alt='left arrow'></img>} swiping={true} show={ (screenSize < 600) ? 2 : 4 } slide={2} transition={0.5}>
                    {
                        renderCompanies()
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Home