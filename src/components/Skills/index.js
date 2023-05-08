import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'

const Skills = () => {
  const AnimatedText = ({ letterClass, strArray, idx }) => {
    return (
      <>
        <span>
          {strArray.map((char, i) => (
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
              {char}
            </span>
          ))}
        </span>
      </>
    )
  }

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
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S','k', 'i','l','l','s',' ', '&']}
              idx={12}
            />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E','x', 'p','e','r','i', 'e','n','c', 'e']}
              idx={12}
            />
          </h1>
          <ul className="skillSets">
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Java']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['HTML5']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['CSS3']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Bootstrap']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['JavaScript']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['React']}
                idx={15}
              />
            </li>
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
        {/* <Logo/> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
