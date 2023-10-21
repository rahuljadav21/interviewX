import React from 'react'
import profilePic from '../../resources/propic.jpeg'
function Experience() {

    const interviewXp = {
        candidateName : 'Karm Patel',
        degree :'B.Tech',
        branch :'Electronics and Communication',
        profilePicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsrcwap.com%2Fblank-profile-picture-hd-dp-images-photo-default-profile&psig=AOvVaw1csKsdJPqNMkC9fPEZ_STA&ust=1697888947271000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiOgK_HhIIDFQAAAAAdAAAAABAJ',
        linkedIn : 'https://www.linkedin.com/in/karmkumar-patel/',
        mobile : 'd',
        email : '',
        companyName :'PWC',
        role :'Technology Consulting',
        hiringMonth :'October',
        hiringYear :'2023',
        
        
    }

  return (
    <div className='main-container'>
        <div className="candidate">
            <div className="info">
                <img src={profilePic} alt="candidate" />
            </div>
            <div className="contact">

            </div>
        </div>
    </div>
  )
}

export default Experience