import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>


      <div className="social-medias">
        <ul>
          <li><a href="https://www.linkedin.com/in/davidoliveiradev/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/DaviProgramming" target="_blank"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
          <li><a href="https://www.instagram.com/asdavidoliveira/"  target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>


      <div className="copyright">
        Developed by David Oliveira
      </div>

    </footer>
  )
}

export default Footer