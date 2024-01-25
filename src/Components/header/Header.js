import { useReducer } from "react";
import './Header.css';
import icon from '../../assets/favicon.png'
const Header = () => {

    const [display, toggleDisplay] = useReducer(
        (val) => (val === "block" ? "none" : "block"),
        "none"
      );

  return (
    <header>
        <div className="head">
            <div className="navbar">
                <div className="left">
                    <img src={icon} alt="" />
                    <p>Sebe</p>
                </div>
                <div className="center">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="right">
                    <a href='#contact'>Contact </a>
                    <div className="ico">
                        <i className='bx bx-user-voice bx-sm'></i>
                    </div>
                </div>
                <div className="" id="menu" onClick={toggleDisplay} >
                    <i className='bx bx-menu bx-sm'></i>
                </div>
                
            </div>
            <div className="dropdown" style={{display}}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
            </div>
        </div>
    </header>
  )
}

export default Header