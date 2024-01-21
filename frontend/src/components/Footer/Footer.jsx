import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="copyright">
            copyright@2024
        </div>
        <div >
            Made with Passion 🔥🔥
            <div>
            <ul className="contributors">
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rahuljadav21">
                       Developed By Rahul Jadav
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/karmkumar-patel/">
                       Managed By Karm Patel
                    </a>
                </li>
            </ul>
            </div> 
            
        </div>
    </div>
  )
}

export default Footer