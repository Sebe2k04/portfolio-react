import React from 'react';
import './Achievements.css'

const Achievements = () => {
  return (
    <div className="achievements">
            <div className="text-achievements">
                <p id="tagline">Get to Know More</p>
                <h1>ACHIEVEMENTS</h1>
                <p>Web development is not just about code; it's a symphony of creativity and functionality. Each line of code is a note, and the achievement lies in composing a seamless, user-centric experience that harmonizes technology and design, turning ideas into interactive reality</p>
            </div>
            <div className="content-achievements">
                <div className="card-achievements"><i className='bx bxs-shield-alt-2 bx-sm'></i><a href="https://drive.google.com/file/d/1XEuRjS2vEWIBtkhuQFgI4pdA6NzqnVq8/view?usp=drive_link"><p>IBM Full Stack Developer Specialization</p></a></div>
            </div>
            <div className="loader-achievements">
                <i className='bx bx-dots-horizontal-rounded bx-lg'></i>
            </div>
            <p id="load">On Evolving</p>
        </div> 
  )
}

export default Achievements