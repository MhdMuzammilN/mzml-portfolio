import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
  }, [])

  const [message, setMessage] = useState(' ')
  const handleClick = (newMessage) => {
    setMessage(newMessage)
  }

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Projects']}
              idx={12}
            />
          </h1>
          <ul className="projects">
            <li
              onClick={() => {
                handleClick(
                  <p>
                    'Web Application: The QR-Based Flight Inventory Management
                    System is a technological solution designed to enhance the
                    efficiency and accuracy of flight inventory management
                    processes. The system is to design and implementation of a
                    travel booking system based on a paperless mobile network
                    that can be delivered via QR codes. Technology used MERN
                    Stack'
                    <br />
                    Visit my
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/MhdMuzammilN"
                      className="profile-links"
                    >
                      GitHub
                    </a>
                    profile for more details.
                  </p>
                )
              }}
            >
              Suitcase Pro - JS
            </li>
            <li
              onClick={() => {
                handleClick(
                  <p>
                    Visit my
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/MhdMuzammilN"
                      className="profile-links"
                    >
                      GitHub
                    </a>
                    profile for more details.
                  </p>
                )
              }}
            >
              Flutter Projects
            </li>
            <li
              onClick={() => {
                handleClick(
                  <p>
                    Visit my
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/MhdMuzammilN"
                      className="profile-links"
                    >
                      GitHub
                    </a>
                    profile for more details.
                  </p>
                )
              }}
            >
              Clone Applications
            </li>
            <li
              onClick={() => {
                handleClick(
                  'Web Application: A website that focused on giving classes for students who missed their regular class, teacher - guardian communication, conduct MCQ exams and publish their overall performance.'
                )
              }}
            >
              Classroom
            </li>
            <li
              onClick={() => {
                handleClick(
                  'Android Application: Help users to find basic service providers like hiring a Home Nurse, Cook, Electrician, Plumber, and few more based on the location that you are in and on the service needed by the user.'
                )
              }}
            >
              Service Provider
            </li>
          </ul>

          <p>
            Visit my
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MhdMuzammilN"
              className="profile-links"
            >
              GitHub
            </a>
            profile for more details.
          </p>
        </div>

        {/* <Logo/> */}
        <div className="project-details">
          <p>{message}</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
