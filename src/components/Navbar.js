import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    const menuRef = useRef();
    const btnRef = useRef();
    const menuClick = () =>{
        menuRef.current.classList.toggle('active');
        btnRef.current.classList.toggle('active');
    }
    const makeTitle = (str) =>{
        let newStr = str.slice(1);
        if(newStr==="") return "Home";
        return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
        menuRef.current.classList.remove('active');
        btnRef.current.classList.remove('active');
        document.title=makeTitle(location.pathname);
        window.addEventListener('scroll', stickNavbar);
        return () => {
        window.removeEventListener('scroll', stickNavbar);
        };
    }, [location]);

    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setStickyClass('navfixed') : setStickyClass('');
        }
    };

    return (
            <nav className={`navbar ${location.pathname!=='/'?"sticky":""} ${stickyClass}`} stickNavbar>
                <div className="max-width">
                    <div className="logo"><Link to="/">Port<span>folio</span></Link></div>
                    <ul className="menu" ref={menuRef}>
                        <li><Link to="/" className={`menu-btn ${location.pathname==="/"?"active":""}`}>Home</Link></li>
                        <li><Link to="/about" className={`menu-btn ${location.pathname==="/about"?"active":""}`}>About</Link></li>
                        <li><Link to="/skill" className={`menu-btn ${location.pathname==="/skill"?"active":""}`}>Skills</Link></li>
                        <li><Link to="/project" className={`menu-btn ${location.pathname==="/project"?"active":""}`}>Projects</Link></li>
                        <li><Link to="/contact" className={`menu-btn ${location.pathname==="/contact"?"active":""}`}>Contact</Link></li>
                    </ul>
                    <div className="menu-btn" onClick={menuClick}>
                        <i className="fas fa-bars" ref={btnRef}></i>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
