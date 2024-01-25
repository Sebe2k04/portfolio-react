import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about" id="about">
            <p id="tagline">Get to Know More</p>
            <h1>KNOW MORE</h1>
            <div className="person">
                <div className="content">
                    <div className="img"></div>
                    <div className="text">
                        <p id="name">Sebe S</p>
                        <p id="role">WEB DEVELOPER</p>
                        <div className="person-links">
                            <a href="https://www.linkedin.com/in/sebe2k04"><i className='bx bxl-linkedin '></i></a>
                            <a href="https://github.com/Sebe2k04"><i className='bx bxl-github ' ></i></a>
                            <a href="mailto:sebe2k04@gmail.com"><i className='bx bxl-gmail ' ></i></a>
                            <a href="https://www.instagram.com/itz_.cb?igsh=eTQwaDB1bzhtYXVs"><i className='bx bxl-instagram-alt ' ></i></a>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="about-cv">
                <div className="cv"><a href="https://drive.google.com/file/d/1Nl3PznfRPbroMtp2nDJxfGq7ty0ijuou/view">Download CV</a></div>
            </div>
            
            <div className="about-content">
                I'm Sebe S pursuing B.E - Computer Science in Nandha College of Technology , I have gained a lot of knowledge and experience throughout my college and various courses in web technologies and gained atleast a basic knowledge of frontend and backend technologies such as HTML, CSS, JavaScript, Java, Python, Django , React JS , Express JS , Node JS , Git, Github, SQL, PostreSql etc... I am currently seeking remote internships on various companies over india to gain some experience in the pioneer of "Web Developer".. I'm an evolver to evolve my skills up to date..
            </div>
        </div>
  )
}

export default About