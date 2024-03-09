import { useEffect, useState } from 'react'
import {
  faFigma,
  faJava,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&']}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={12}
            />
          </h1>

          <ul className="projects">
            <li>Java</li>
            <li>Dart, Flutter</li>

            <li>JavaScript, React</li>
            <li>MongoDb, MySQL</li>
            <li>Figma</li>
            <li>and many more...</li>
          </ul>
          <p>
            Visit my
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/muzammil06n"
              className="profile-links"
            >
              LinkedIn
            </a>
            profile for more details. Also you can checkout my
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/muzammil06n"
              className="profile-links"
            >
              cv
            </a>
            on this link, or feel free to connect with me through
            <Link to="/contact" className="profile-links">
              contact
            </Link>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
