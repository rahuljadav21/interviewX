import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="copyright">
            copyright@2023
        </div>
        <div >
            Made with Passion By
            <div>
            <ul className="contributors">
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rahuljadav21">
                        Rahul Jadav
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/karmkumar-patel/">
                        Karm Patel
                    </a>
                </li>
            </ul>
            </div> 
            
        </div>
    </div>
  )
}

export default Footer