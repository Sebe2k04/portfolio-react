import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects" id='projects'>
            <p id="tagline">Get to Know More</p>
            <h1>Projects</h1>
            <div className="content-projects">
                <div className="card-project">
                    <h2>Portfolio Website</h2>
                    <p>a portfolio website serves as a dynamic and indispensable tool for professionals across various fields. It is a virtual showcase, a personalized exhibit of one's skills, experiences, and accomplishments.</p>
                    <p>Html , Css , JavaScript , React</p>
                    <div className="links">
                        <div className="web-link">
                            <a href=""><i className='bx bx-globe bx-sm'></i></a>
                        </div>
                        <div className="git-link">
                            <a href=""><i className='bx bxl-github bx-sm' ></i></a>
                        </div>
                    </div>
                </div>
                <div className="card-project">
                    <h2>Ecommerce Website</h2>
                    <p>An ecommerce website is a virtual marketplace that transcends geographical boundaries, revolutionizing the way businesses and consumers engage in commerce. Serving as a digital storefront, it provides a convenient and accessible platform for buyers to explore, compare, and purchase products or services from the comfort of their homes. For businesses, it opens up new avenues for reaching a global audience, expanding customer bases, and optimizing sales channels. The ecommerce website acts as a 24/7 storefront, accommodating the needs of consumers around the clock and facilitating transactions securely</p>
                    <p>Html , Css , JavaScript , Python , Django ,PostgreSql , Bootstrap , Jquery</p>
                    <div className="links">
                        <div className="web-link">
                            <a href=""><i className='bx bx-globe bx-sm'></i></a>
                        </div>
                        <div className="git-link">
                            <a href=""><i className='bx bxl-github bx-sm' ></i></a>
                        </div>
                    </div>
                </div>
                <div className="card-project">
                    <h2>Landing Page</h2>
                    <p>A website's landing page is the digital gateway, the first impression that sets the tone for a user's online journey. It serves as a carefully curated entry point, designed to captivate and engage visitors immediately. A well-crafted landing page is more than just an aesthetic introduction; it's a strategic conversion hub. Tailored content, compelling visuals, and a clear call-to-action work harmoniously to guide visitors toward specific goals, whether it's making a purchase, signing up for a newsletter, or exploring further within the site</p>
                    <p>Html , Css , JavaScript , Tailwind Css</p>
                    <div className="links">
                        <div className="web-link">
                            <a href=""><i className='bx bx-globe bx-sm'></i></a>
                        </div>
                        <div className="git-link">
                            <a href=""><i className='bx bxl-github bx-sm' ></i></a>
                        </div>
                    </div>
                </div>
                <div className="card-project">
                    <h2>Spider Web</h2>
                    <p>A website platform which as an interface to connect the users with familiar developer tools and contains blogs and information which is very useful for developers and studets to gain knowledge and enrichment in their career</p>
                    <p>Html , Css , JavaScript</p>
                    <div className="links">
                        <div className="web-link">
                            <a href=""><i className='bx bx-globe bx-sm'></i></a>
                        </div>
                        <div className="git-link">
                            <a href=""><i className='bx bxl-github bx-sm' ></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loader-projects">
                <i className='bx bx-dots-horizontal-rounded bx-lg'></i>
            </div>
            <p id="load">On Evolving</p>
        </div> 
  )
}

export default Projects