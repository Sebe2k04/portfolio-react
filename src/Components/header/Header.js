import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="head">
            <div className="navbar">
                <div className="left">
                    <img src="assets/pic.png" alt="" />
                    <p>Sebe</p>
                </div>
                <div className="center">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                <div className="right">
                    <a href='#'>Contact </a>
                    <div className="ico">
                        <i className='bx bx-user-voice bx-sm'></i>
                    </div>
                </div>
                <div className="" id="menu">
                    <i className='bx bx-menu bx-sm'></i>
                </div>
                
            </div>
            <div className="dropdown">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    
            </div>
        </div>
    </header>
  )
}

export default Header