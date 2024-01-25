import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="foot-content">
            <h1>SEBE S</h1>
            <h3>Web Developer</h3>
            <p>Portfolio</p>
        </div>
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/sebe2k04"><i className='bx bxl-linkedin '></i></a>
            <a href="https://github.com/Sebe2k04"><i className='bx bxl-github ' ></i></a>
            <a href="mailto:sebe2k04@gmail.com"><i className='bx bxl-gmail ' ></i></a>
            <a href="https://www.instagram.com/itz_.cb?igsh=eTQwaDB1bzhtYXVs"><i className='bx bxl-instagram-alt ' ></i></a>
        </div>
        <div className="copyright">
            Sebe S &copy; 2024 All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer