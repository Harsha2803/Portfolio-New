import React from 'react'
import Project1 from '../images/project1.png'
import Project2 from '../images/project2.png'

const Service = () => {
  return (
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="serv-content">
                <a href='' className="card">
                    <div className="img">
                        <img src={Project1} alt="Bihar Study News"/>
                    </div>
                    <div className="box">
                        <div className="text">Portfolio</div>
                        <p>It contains details of which projects i have worked on and which languages i am familiar with and my interests.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                        <span><i class="fa-solid fa-database"></i><span> Mysql</span></span>
                    </div>
                </a>
                <a href='' className="card">
                    <div className="img">
                        <img src={Project2} alt="Rock Paper Scissors"/>
                    </div>
                    <div className="box">
                        <div className="text">Virtual Classroom</div>
                        <p>It provides the features of creating classroom for teachers and joining classroom for students. Teachers can assign work and give marks to them when students submitted them.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-bootstrap"></i><span> Bootsrap</span></span>
                        <span><i class="fa-brands fa-php"></i><span> Php</span></span>
                        <span><i class="fa-solid fa-database"></i><span> Mysql</span></span>
                    </div>
                </a>
               </div>
            </div>
    </section>
  )
}

export default Service
