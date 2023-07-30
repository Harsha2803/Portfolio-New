import React from 'react'
import Image1 from '../images/image1.jpg'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">Know About Me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Image1} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">Hello, I'm Harsha!!</div>
                    <p>Currently, 4th Year UG student at Indian Institute Of Engineering Science And Technology, Shibpur in the department of Computer Science And Technology.</p>
                    <p>I am Interested in DSA and Full Stack Web Development. </p>
                    <p>I have solved over 800 problems on DSA accross platforms like <a href='https://leetcode.com/Harsha_2803/' target="_blank" rel="noreferrer">Leetcode</a> and <a href='https://auth.geeksforgeeks.org/user/harsharoyalc2803/practice' target="_blank" rel="noreferrer">GFG</a>. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
