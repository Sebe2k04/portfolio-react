import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div class="foot-content">
            <h1>SEBE S</h1>
            <h3>Web Developer</h3>
            <p>Portfolio</p>
        </div>
        <div class="footer-links">
            <a href="https://www.linkedin.com/in/sebe2k04"><i class='bx bxl-linkedin '></i></a>
            <a href="https://github.com/Sebe2k04"><i class='bx bxl-github ' ></i></a>
            <a href="mailto:sebe2k04@gmail.com"><i class='bx bxl-gmail ' ></i></a>
            <a href="https://www.instagram.com/itz_.cb?igsh=eTQwaDB1bzhtYXVs"><i class='bx bxl-instagram-alt ' ></i></a>
        </div>
        <div class="copyright">
            Sebe S &copy; 2024 All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer