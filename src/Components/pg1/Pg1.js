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
        <p>
          Crafting the digital world, one line of code at a time. Web
          development is not just about building websites; it's about creating
          immersive experiences and bringing ideas to life in the vast realm of
          the internet.Designing the web is a dance of creativity and
          functionality. Every pixel tells a story, and every layout is a canvas
          for innovation. A web designer doesn't just create visuals; they
          sculpt digital experiences that leave a lasting impression on the
          virtual stage.
        </p>
      </div>
      <div className="textbtn-pg1">
        <div className="btn1">
          <a href="">Hire Me</a>
        </div>
        <div className="btn2">
          <a href="">Let's Talk</a>
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