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
                        <div className="text">Overview.</div>
                        <p>I possess extensive knowledge in full-stack development, including proficiency in React.js, Tailwind CSS, TypeScript, and various databases such as MySQL, PHP, and MongoDB.</p>
                        <p>I am currently working on a full-stack Netflix clone using React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth, and deploying it on Vercel.</p>
                        <p>I've advanced knowledge in Data Structures and Algorithms (DSA) and have successfully solved over 800 DSA problems. My expertise allows me to tackle complex problem-solving challenges with confidence.</p>
                        <Link to="/project" className='skillbtn'>My Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
