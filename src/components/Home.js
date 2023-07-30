import React from 'react'
import Banner from '../images/banner.jpg'
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <section className="home" id="home" style={{background: `url(${Banner}) no-repeat center`, backgroundSize:'contain', backgroundColor: 'black'}}>
        <div className="max-width">
            <div className="home-content">
                <div className="text-3">Hello !!</div>
                <div className="text-2">I am Harsha.</div>
                <div className="text-3">I'm a <span className="typing"><ReactRotatingText items={['Full Stack Developer','Programmer']} /></span></div>
                <a
                  href="https://drive.google.com/drive/folders/1Y2QWEd2faSUx3fi9IFfHkCaEM1M2YPyu?usp=sharing"
                  target="_blank"
                  type="button" rel="noreferrer"
                >Download My Resume</a>
            </div>
        </div>
    </section>
  )
}

export default Home
