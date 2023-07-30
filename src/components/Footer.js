import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  let location = useLocation();
  return (
    <footer style={{display: `${location.pathname==='/'?'none':'block'}`}}>
        <span><span className="far fa-copyright"></span>Copyright 2023 All rights reserved - Designed By <Link to="/contact">Harsha</Link></span>
    </footer>
  )
}

export default Footer
