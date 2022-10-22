import React from 'react'
import Image1 from '../images/image1.jpg'
import Resume from '../images/resume.pdf'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Image1} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm Rama Krishna and</div>
                    <p>I'm a student at Indian Institute of Engineering Science and Technology, Shibpur. Pursuing B.Tech in Information Technology.</p>
                    <p>I love doing competitive programming. check me on <a href="https://leetcode.com/rama_krishna044/">Leetcode</a>,<a href="https://www.codechef.com/users/rama_krishna44">Codechef</a> and <a href="https://www.hackerrank.com/ramakrishnaeswa1?hr_r=1">Hackerrank</a>.</p>
                    <p>My other interests are Web Development, Blockchain and Machine learning.</p>
                    <p>My core interest lies mainly in web development but not restricted to it. I always love exploring and learning new technologies.</p>
                    <p>In my free time, I like to finding bugs in games 🎮 and play cricket outdoor 🏏.</p>
                    <a className="resumeBtn" href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
