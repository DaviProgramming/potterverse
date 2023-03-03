import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer>


      <div className="social-medias">
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>


      <div className="copyright">
        Developed by David Oliveira
      </div>

    </footer>
  )
}

export default Footer