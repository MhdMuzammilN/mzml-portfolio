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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Let me introduce myself in 7 words - Responsible, creative,
            open-minded, friendly and ambitious web developer. This is how I see
            myself an enthusiast who is into,
            <br />
          </p>
          <ul className="skillSets">
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Mobile and Web Development']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Tech-Obsessed']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Photography']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Editing']}
                idx={15}
              />
            </li>

            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Movies']}
                idx={15}
              />
            </li>
            <li>
              <AnimatedText
                letterClass={letterClass}
                strArray={['Games']}
                idx={15}
              />
            </li>
          </ul>
        </div>
        {/* <Logo/> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
