import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const fNameArray =  ['M', 'o', 'h', 'a', 'm', 'm', 'e', 'd'];
  const mNameArray = ['M', 'u', 'z', 'a', 'm', 'm', 'i', 'l'];
 


  useEffect(() => {
  
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])
  






  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i </span>
            <span className={`${letterClass} _13`}>, </span>
            <span className='blankSpace'></span>

            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <br/>
            
            <AnimatedLetters letterClass={letterClass} strArray={fNameArray} idx={17} />
            <span className='blankSpace'></span>

            <AnimatedLetters letterClass={letterClass} strArray={mNameArray} idx={25} />
            <span className='blankSpace'></span>

            <span className={`${letterClass} _33`}>N </span>

            <br />
        
          </h1>
          <h2>Mob and Web Dev</h2>
          <Link to="/contact" className="flat-button">
             CONTACT ME
          </Link>
        </div>
        {/* <Logo/> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
