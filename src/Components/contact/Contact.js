import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact" id="contact">
            <h1>Contact</h1>
            <p>Contact me through</p>
            <div className="contact-links">
                <div className="linkedin cl">
                    <a href="https://www.linkedin.com/in/sebe2k04"><i className='bx bxl-linkedin '></i>
                        <p>Linkedin</p></a>
                    
                </div>
                <div className="github cl">
                    <a href="https://github.com/Sebe2k04"><i className='bx bxl-github ' ></i>
                        <p>Github</p></a>
                    
                </div>
                <div className="gmail cl">
                    <a href="mailto:sebe2k04@gmail.com"><i className='bx bxl-gmail ' ></i>
                        <p>Gmail</p></a>
                    
                </div>
                <div className="instagram cl">
                    <a href="https://www.instagram.com/itz_.cb?igsh=eTQwaDB1bzhtYXVs">
                        <i className='bx bxl-instagram-alt ' ></i>
                        <p>Instagram</p></a>
                    
                </div>
                
            </div>
        </div>
  )
}

export default Contact