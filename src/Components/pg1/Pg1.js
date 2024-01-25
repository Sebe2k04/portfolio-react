import React from 'react'
import './Pg1.css'
import pic from '../../assets/pic.png'

const Pg1 = () => {
  return (
    <div className="pg-1">
  <div className="content-pg1">
    <div className="text-pg1">
      <div className="textcontent-pg1">
        <h1>SEBE S</h1>
        <h3>Web Developer</h3>
        <p>Welcome to my digital space! I am Sebe S, a passionate web developer with a love for turning ideas into interactive and visually appealing experiences. This portfolio is a reflection of my journey, featuring a collection of projects that highlight my skills in  web development, design, etc.. From crafting elegant and responsive websites to solving complex problems through innovative solutions, I'm dedicated to creating meaningful and impactful digital experiences. Explore my work, and let's connect to discuss how we can collaborate and bring your ideas to life. Thank you for visiting!</p>
      </div>
      <div className="textbtn-pg1">
        <div className="btn1">
          <a href="#about">KNOW Me</a>
        </div>
        <div className="btn2">
          <a href="#contact">Let's Talk</a>
        </div>
      </div>
    </div>
    <div className="img-pg1">
        <img src={pic} alt="" />
    </div>
  </div>
</div>
  )
}

export default Pg1