import React from 'react'
import { Link } from 'react-router-dom'

const Skill = () => {
  return (
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div>
                        <div className="text">My creative skills & experiences.</div>
                        <p>I've worked using different technologies, both backend and frontend.</p>
                        <p>I'm currently working for Virtual classroom which provides features of creating classroom for teachers and joining classroom for students. Teachers can assign work and give marks to them when students submitted them. I implement this website using HTML, CSS, JavaScript, Bootstrap, PHP, Mysql.</p>
                        <p>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
                        <Link to="/project" className='skillbtn'>My Project</Link>
                    </div>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>C / C++</span>
                            <span>75%</span>
                        </div>
                        <div className="line c"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>90%</span>
                        </div>
                        <div className="line python"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>85%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Nodejs</span>
                            <span>70%</span>
                        </div>
                        <div className="line nodejs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Reactjs</span>
                            <span>60%</span>
                        </div>
                        <div className="line reactjs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB</span>
                            <span>75%</span>
                        </div>
                        <div className="line mongodb"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>70%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
