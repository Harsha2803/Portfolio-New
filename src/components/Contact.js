import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>For any information regarding my work kindly, contact me though the following details.</p>
                    <div className="icons">
                        <div className="row">
                            <Link to='/contact'>
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Rama Krishna</div>
                                </div>
                            </Link>
                        </div>
                        <div className="row">
                            <a href="https://www.google.com/maps/d/u/0/edit?mid=1_BTFfXUaBKSyWSgBs4cVUAjP2dcTTAg&usp=sharing" target="_blank" rel="noreferrer">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Ganganamma peta, Tenali, Andhra Pradesh</div>
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="mailto:ramakrishnaeswar100@gmail.com">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">ramakrishnaeswar100@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="socialsite">
                        <ul className="sci">
                            <li><a href="tel:+916301989355"><i className="fas fa-phone"></i></a></li>
                            <li><a href="https://github.com/RamaITB044" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/rama-krishna-aa3175203/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/ramakrishna.namburi/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
